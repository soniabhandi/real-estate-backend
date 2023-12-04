export const testing=(req:any,res:any)=>{
    console.log(req.body);
    res.status(201).json({
    message: 'Thing created successfully!'
  });
}

export const addUser=()=>{
//insert user data into db
}