const express = require('express');
const router = express.router();
const Ticket = require('./Schema')
const cors = require('cors');
const app = express();

router.use(cors());
router.use(express.json());

router.post("/booking",async(req,res) => {
    const {movie,slot,seats} = req.body;

    try {
        const mydata = new Ticket(movie,slot,seats);
        const saved = await mydata.save();

        res,status(200).json({data:mydata,message:"Booking successful"})
    }
    catch(error) {
        res.status(500).json({data:null,message:"Booking failed"})
    }
})

router.get("/booking", async(req,res) => {
    try {
        const myData = await Ticket.find().sort({_id:-1}).limit(1);

        if(myData.length === 0) {
            res.status(200).json({data:null,message:"no data found"})
        }else {
            res.status(200).json({data:myData[0]})
        }
    }catch(error) {
       res.status(500).json({data:null,message: "something went wrong"}) 
    }
})