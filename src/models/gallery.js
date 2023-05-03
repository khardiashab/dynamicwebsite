const mongoose = require("mongoose")
const GallerySchema = mongoose.Schema({
  title: String,
  description: String,
  images: [{
    name: String,
    url: String
  }],
})

const Gallery = new mongoose.model("Gallery", GallerySchema)

// let g =  Gallery.create({
//   title : "gallery",
//   description : "These our some movements that fascinates us. And make use to get with we do it properly and make sure we could do it.",
//   images : [
//     {
//       name : "Boat on Calm Water",
//       url : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
//     },
//     {
//       name : "Wintry Mountain Landscape",
//       url : "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
//     },
//     {
//       name : "Mountains in the Clouds",
//       url : "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
//     },
//     {
//       name : "Boat on Calm Water",
//       url : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
//     },
//     {
//       name : "Waves at Sea",
//       url : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
//     },
//     {
//       name : "Yosemite National Park",
//       url : "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
//     },
//   ]
// })

module.exports = Gallery