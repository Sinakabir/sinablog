const mongoose = require('mongoose');
mongoose.set('strictQuery', false)


mongoose.connect("mongodb+srv://sinasasy4:kx5HaoermSnj2M3X@cluster12.3t2z5uv.mongodb.net/").then(()=> console.log("connected to mongo db")).catch((e) => console.log(e))