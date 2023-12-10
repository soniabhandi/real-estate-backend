import User from "./user";
import Location from "./location";

//Define associations here
User.belongsTo(Location, { foreignKey: "location" });
Location.hasOne(User, { foreignKey: "location" });

export { User, Location };
