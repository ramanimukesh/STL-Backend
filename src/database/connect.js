const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/React-landing-Page").then(() => {
    console.log("mongodb is connected");
}).catch(() => {
    console.log("mongodb is not connected");
});
