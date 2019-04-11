const fs = require("fs")
const obj ={
    fname:"Waleed",
    lname:"Ali",
    mobile:"+92038726178",
    location:"pakistan",

}
const dataToStr=JSON.stringify(obj);
fs.writeFileSync("data.txt",dataToStr);