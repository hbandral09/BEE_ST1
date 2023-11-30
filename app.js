// const express = require('express');
// const dotenv =require('dotenv');
// const app = express();

// app.use(express.json());   

// const students = [
//     {name: "Khushi", rollno: 770}  ,
//     {name: "Hritiza", rollno: 634},
//     {name: "Jyoti", rollno: 708},
//     {name: "Girish", rollno: 519}
// ]; 
// app.get('/students', (req, res) => {
//     res.send(students); 
// })
// app.get('/students/:rollno',(req,res)=>{
//     const rollno = req.params.rollno;
//     let foundStudent  = students.find( student => student.rollno == rollno); 

//     if(foundStudent){    
//         res.send("Student found "+ foundStudent.name);  
//     }
//     else{
//         res.send("this rollno does not exist");
//     }
// });
// // app.get('/students/:name',(req,res)=>{
// //     const name = req.params.name;
// //     let foundStudent  = students.find( student => student.name == name); 

// //     if(foundStudent){    
// //         res.send("Student found "+ foundStudent.rollno);  
// //     }
// //     else{
// //         res.send("this rollno does not exist");
// //     }
// // });

// app.post('/students', (req,res)=>{
//     const newStudent = req.body;

//     if(!newStudent.rollno || !newStudent.name){
//         res.send("Username and password required");
//         return ;
//     }
//     console.log(newStudent);
//     students.push(newStudent);
    
//     res.send('Student added successfully' ); 
// })

// app.delete('/students/:rollno', (req,res)=>{
//     const rollno = req.params.rollno;
//     const index = students.findIndex(student => student.rollno == rollno);

//     if(index != -1){
//         const deleteIndex = students.splice(index, 1);
//         res.send("Studnet deleted succesfully"); 
//     }
//     else{
//         res.send("student no found");
//     }
// })        

// app.put('/students/:rollno', (req,res)=>{
// //    const oldname = req.params.name ;
//     const oldrollno = req.params.rollno; 
//     const newrollno = req.body.rollno;

//     const index = students.findIndex(student => student.rollno == oldrollno);

//     if(index != -1){
//         students[index].rollno = newrollno;
//         res.send("Student rollno updated successfully");
//     }
//     else{
//         res.send("Student not found");
//     }

// })

// app.listen(3001,()=>{
//     console.log("http://localhost:3001");
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');

// // Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// // Middleware
// // app.use('/employees', () => {
// //     console.log('Middleware Running');
// // });

// // Routes 
// // app.get('/', (req, res) => {
// //     res.send('Hello World');
// // });


// // app.get('/employees', (req, res) => {
// //     res.send('Employees');
// // });

// const connectDB = require('./config/db');
// // Load Config
// dotenv.config({path: './config/config.env'})

// connectDB();

// // Routes
// app.use('/', require('./routes/index'));

// app.listen(3000);


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const dotenv = require('dotenv');

const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'});
connectDB();

app.use('/', require('./routes/index'));

app.listen(3000, () => {
  console.log("Server started on 3000");
});


