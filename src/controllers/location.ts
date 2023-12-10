import { Request, Response } from "express";
import Location from "../database/models/location";

export const createLocation = async (req: Request, res: Response) => {
  const { name, city }: any = req.body;
  try {
    const location = await Location.create({ name, city });
    return res.status(201).json({
      location,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllLocations = async (req: Request, res: Response) => {
  try {
    const locations = await Location.findAll();
    return res.status(200).json({ locations });
  } catch (error: any) {
    return res.status(500).send(error.message);
  }
};

export const updateLocation = async (req: Request, res: Response) => {
  const { id, name, city }: any = req.body;
  try {
    const location = await Location.findOne({ where: { id } });
    if (!location)
      return res.status(404).json({ message: "location not found" });
    location.name = name;
    location.city = city;
    await location.save();
    return res.status(200).json({ location });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
