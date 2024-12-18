const mongoose = require('mongoose')

const conectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Bookmyshow');
        console.log('connected to database');
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = conectDB