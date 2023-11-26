import {Router} from 'express'
import { testing } from '../controllers/user';


const router=Router();


router.get('/',(req,res)=>{
    console.log("routes running successfully");
    res.send("route created")
})


router.post('/signup',testing)


export default router