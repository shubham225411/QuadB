
const axios = require('axios').default;
const mongoose = require("mongoose");
const Api = require("./model/api");

const fetch_data= async function()
{
    console.log('fetchdata called');
    const result=await axios.get("https://api.wazirx.com/api/v2/tickers");
    let res=result.data;
    
    seedDB(res);
}

   

   mongoose.connect("mongodb://localhost:27017/Api",{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("database connected");
});


const seedDB=async(res)=>{
    console.log('seeddb called');
    await Api.deleteMany({});
    
    let count=0;
    for(let i in res)
    {
        
        const api= new Api({

            name:res[i].name,
            last:res[i].last,
            buy:res[i].buy,
            sell:res[i].sell,
            volume:res[i].volume,
            base_unit:res[i].base_unit
            
           
        })
        
        await api.save();
        count++;
        if(count===10)
        {
            break;
        }
    }
  
}

module.exports={fetch_data,seedDB};

