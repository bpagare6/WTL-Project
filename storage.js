const multer = require('multer');//for file reading


var storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage }).single('myFile');
  
  
  const uploadfile= (req,res)=> {
    console.log(req.body)
    console.log("eff");
  upload(req,res,(error)=>{
  if(error)
  {
    console.log(error)
    res.send("error")
  }
  else{
    console.log(req.body)
    console.log("wrgrg");
    res.send("success");
  }
  })
};
module.exports={uploadfile}