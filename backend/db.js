const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://food:food@cluster0.hve7hxo.mongodb.net/food?retryWrites=true&w=majority'
const mongoDB = async() => {
    await mongoose.connect(mongoURL, { useNewUrlParser: true},async(err, result)=>{
    if(err) console.log("---",err)
    else{
            console.log("Connected");
            //read the data from mongodb(fetched)
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function(err , data){
                if(err) console.log(err);
                else console.log(); //data
            })

        }
     });

}

 module.exports = mongoDB;

