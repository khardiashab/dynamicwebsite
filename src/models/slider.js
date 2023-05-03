const mongoose = require("mongoose")
const sliderSchema = mongoose.Schema({
  title: String,
  subtitle: String, 
  imgUrl : String,
  class: {
    type : String,
    default : "",
  }
})

const Slider = mongoose.model("Slider", sliderSchema)
const s1 = new Slider({
  title: "You are Awsome.",
  subtitle: "Everything that you do, take you towards your goal, So keep forwad.", 
  imgUrl : "https://source.unsplash.com/random?lovebirds,dark!count=5",
})
const s2 = new Slider({
  title: "Believe in yourself",
  subtitle: "Everything that you do, take you towards your goal, So keep forwad.", 
  imgUrl : "https://source.unsplash.com/random?lovebirds,dark!count=0",
})
const s3 = new Slider({
  title: "You can do it.",
  subtitle: "Everything that you do, take you towards your goal, So keep forwad.", 
  imgUrl : "https://source.unsplash.com/random?lovebirds,dark!count=9",
})
const s4 = new Slider({
  title: "You are the gratest one.",
  subtitle: "Everything that you do, take you towards your goal, So keep forwad.", 
  imgUrl : "https://source.unsplash.com/random?lovebirds,dark!count=1",
})
const s5 = new Slider({
  title: "It is your time.",
  subtitle: "Everything that you do, take you towards your goal, So keep forwad.", 
  imgUrl : "https://source.unsplash.com/random?lovebirds,dark!count=7",
})

// Slider.insertMany([s1, s2, s3, s4, s5])
module.exports = Slider