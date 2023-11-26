import {Router} from 'express'


const router=Router();


router.get('/',(req,res)=>{
    console.log("routes running successfully");
    res.send("route created")
})


router.post('/signup', (req,res)=>{
    console.log(req.body);
    res.status(201).json({
    message: 'Thing created successfully!'
  });
    
})


export default router