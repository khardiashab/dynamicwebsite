const Details = require("../models/detail")
const Gallery = require("../models/gallery")
const Hero = require("../models/hero")
const Services = require("../models/service")
const Slider = require("../models/slider")
const User = require("../models/user")

const router = require("express").Router()



router.get("/", async(req, res) => {
  try {
    const navbar = await Details.findOne()
    const slides = await Slider.find().limit(5)
    const gallery = (await Gallery.find())[0]
    const services = (await Services.find())
    const hero = (await Hero.find())[0]
  
    // console.log(gallery[0])
    res.render("pages/home", {
      title : "home",
      data  : navbar,
      slides : slides,
      gallery, 
      hero,
      services,
    })
    
  } catch (error) {
    res.status(500).send(error.message)
  }
})


router.post("/", async(req, res)=>{
  try {
    const user = new User({
      ...req.body
    })
    await user.save()
    res.redirect("/#contact-us")

  } catch (error) {
    res.status(500)
  }

})

module.exports = router