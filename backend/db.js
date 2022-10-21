const mongoose = require('mongoose');
const url = "YOUR DATABASE URL"

module.exports.connect = () => {
    mongoose.connect(url)
    .then((res) => console.log("MongoDB is connected"))
    .catch((err) => console.log("Error:", err));
}
