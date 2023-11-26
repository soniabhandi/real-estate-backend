export const testing=(req:any,res:any)=>{
    console.log(req.body);
    res.status(201).json({
    message: 'Thing created successfully!'
  });
}