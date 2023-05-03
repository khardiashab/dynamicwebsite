const mongoose = require("mongoose")
const HeroSchema = mongoose.Schema({
  heading: String,
  btn: String,
  btnUrl : String,
  description: String,
})

const Hero = new mongoose.model("Hero", HeroSchema)

// const hero = new Hero({
//   heading : "This is our motto",
//   description : "Here Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste architecto omnis amet et iusto odio dignissimos. Possimus, nobis sint, nemo nisi modi, nihil facilis iusto perferendis dolor dolorum sapiente optio natus in cum eaque consequatur aliquid odio cupiditate molestias quaerat beatae id pariatur. Quae aspernatur natus necessitatibus quis deserunt.",
//   btn : "Download App",
//   btnUrl : "/"

// })
// hero.save()

module.exports = Hero