const express=require("express");
const app = new express;
const cors = require("cors");

const blog=require("./src/model/mongo")


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
 var nodemailer = require('nodemailer')
 function sendEmail(data) {
  try {
      console.log(data)
      let transport = {
          host: "smtp-relay.sendinblue.com",
          port: 587,
          secure: false, // upgrade later with STARTTLS
          auth: {
              user: "idapp3ictak@gmail.com",
              pass: process.env.MAILER_PASS,
          }
      }
      let email_data = {
          from: "idapp3ictak@gmail.com",
          to: data.email,
          subject: "Trainer Approved",
          text: `Your emplyment type `,
          html: `<p> Hi successfully registered</p>`
      };
      let transporter = nodemailer.createTransport(transport)

      transporter.sendMail(email_data, function (err, info) {
          if (err) {
              console.log(err)
          } else {
              console.log(info)
          }
      })
  } catch (error) {
      return error
  }
}





   
// app.post("/adduser",(req,res)=>{
//   res.header("Access-Control-Allow-Origin","*");
//   res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
//   console.log(req.body)
//   var user={
//     name:req.body.data.name,
//     ID:req.body.data,
//     Email:req.body.data,
//     Password:req.body.data.Password,
//     Course:req.body.data.course,
//     Batch:req.body.data.batch,
    
// }
// var user = new blog(user);
// user.save();

// //successful registration mail with all details//
// var mailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'idapp3ictak@gmail.com',
//         pass: "bjfgowfeizejsjwo"
//     },tls: {
//         rejectUnauthorized: false
//             }
// });

// let mailDetails = {
//     from: 'idapp3ictak@gmail.com',
//     to: user.Email,
//     subject: 'Welcome to ID App ICTAK !',
//      text: " Dear  " + user.name + ", \n You have successfully registered on the ICTAK IDApp. We're happy you're here. \n  Sign -in using the credentials given below: \n Email : " + user.email + "\n Username : " + user.name + "\n Password : " + user.password   
//     };
// mailTransporter.sendMail(mailDetails, function(err, data) {
//     if(err) {
//         console.log('Error Occurs');
//         console.log(err);
//     } else {
//         console.log('Registration details sent successfully');
//     }
// });
// });



  



// var mailOptions ={
//     from:'idapp3ictak@gmail.com',
//     to:'314preethi@gmail.com',
//     subject:'Hello you are successfully registered',
//     text:'This is the body of msail'


// };
// nodemailer.createTransport({
//     service: 'gmail',
//     auth:{
        
//         user:'idapp3ictak@gmail.com',
//          pass:'jixfxtupxewwaugy',
//          },
//          port:3000
        
        

    
 
//  })
// .sendMail(mailOptions,function(error,info){
//     if(error){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
//      return console.log(error);
//     }else{
//        return console.log("Email sent"+info.response);
//     }
//     }
// )

app.get("/batch",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    blog.find()
    .then(function(batch){
        res.send(batch)
    })
    
})

app.post("/new",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);

    var products = {
        name:req.body.item.name,
        ID:req.body.item.ID,
        Email:req.body.item.Email,
        Password:req.body.item.Password,
        Course:req.body.item.Course,
        Batch:req.body.item.Batch
       
       
        
    }
   var product = new blog(products)
   product.save();
})

app.get('/:_id',(req, res) => {
  
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
  
    const id = req.params.id;
      blog.findOne({"_id":id})
      .then((product)=>{
          res.send(product);
      });
  })

  app.put('/update',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
    console.log(req.body)
    id=req.body._id,
    
    name = req.body.name,
    ID = req.body.ID,
    Email= req.body.Email,
    Password = req.body.Password,
    Course = req.body.Course,
    Batch = req.body.Batch,
    
   blog.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "name":name,
                                "ID":ID,
                                "Email":Email,
                                "Password":Password,
                                "Course":Course,
                                "Batch":Batch,
                                }})
   .then(function(){
       res.send();
   })
 })

 app.delete('/remove/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    
   
    id = req.params.id;
    blog.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
  app.post("/new", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
    newarray = req.body
    courseData
      .findOneAndUpdate(
        {},
        {
          $set: {
            course: newarray,
          },
        }
      )
      .then((data) => {
        console.log(data);
        res.send(data);
      });
  });
  
  // Batch Action
  
  app.post("/new", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
    newarray = req.body
    courseData
      .findOneAndUpdate(
        {},
        {
          $set: {
            batch: newarray,
          },
        }
      )
      .then((data) => {
        console.log(data);
        res.send(data);
      });
  });



app.listen(3000);
    console.log("server is running");
