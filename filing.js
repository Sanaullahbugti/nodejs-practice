const fs = require("fs")
const obj ={
    fname:"Waleed",
    lname:"Ali",
    mobile:"+92038726178",
    location:"pakistan",

}
const dataToStr=JSON.stringify(obj);
try{
fs.writeFileSync("data.txt",dataToStr);
const recievedData=fs.readFileSync("data.txt");
console.log(recievedData.toString())
console.log("recieved data:",JSON.parse(recievedData));
}catch(err){
    console.log("error:",err.message);
    
}
