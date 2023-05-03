const mongoose = require("mongoose")
const detailSchema = mongoose.Schema({
  brandName : String,
  brandIconUrl : {
    type : String,
    default : "#"
  },
  links : [{
    label : String,
    labelUrl : {
      type : String,
      default : "#"
    }
    }],

    footer : {
      type : String,
    }


})

  const Details = new mongoose.model("details", detailSchema)

module.exports = Details