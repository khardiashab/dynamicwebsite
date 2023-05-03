const mongoose = require("mongoose")
const ServiceSchema = mongoose.Schema({
  title: String,
  iconUrl: String,
  description: String,
  links: [{
    name: String,
    url: String
  }],
})

const Services = new mongoose.model("Service", ServiceSchema)

// const service = new Services({
//   title : "24X7 support",
//   iconUrl : "fa-brands fa-servicestack",
//   description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur dolorum aspernatur quisquam est at culpa laborum placeat debitis? Cum!",
//   links : [
//     {
//       name : "check",
//       url : "/check",
//     },
//     {
//       name : "support",
//       url : "/support",
//     }
//   ]
// })
// service.save()

module.exports = Services