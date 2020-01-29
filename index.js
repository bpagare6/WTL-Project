var session = require('express-session');
var tables=require("./tables.js")
var storage=require("./storage.js")
var fs=require('fs')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Client=require('pg').Client


const app = express()


const client=new Client({
    user:"postgres",
    password:"",
    host:"localhost",
    port:5432,
    database:"postgres"

})
client.connect()
.then(()=>console.log("connected"))
.catch(e=>console.log(e))


//create tables
tables.createTables(client)  


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const port=3003
app.listen(port, () => {
  console.log("Server is up and listening on 3003...")
})
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })



app.use(express.static('./'))

app.use(morgan('short'))
///////////////////////// inputting a new user
 app.post('/newuser', (req, res,next) => {
  console.log(req.body.file)

  fs.readFile(req.body.file, function(err, data) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    if(err)
    {
      console.log(err);
    }
    console.log(data);
    
  });
   console.log("Trying to create a new user...")
   console.log("How do we get the form data???")
  console.log(req.body)
  console.log("First name: " + req.body.username+req.body.passsword)
  const firstName = req.body.username
  const password = req.body.passsword

   const queryString = "insert into public.users (username,pass) values ($1,$2)"
   client.query(queryString, [firstName, password], (err, results) => {
     if (err) {
       console.log("Failed to insert new user: " + err)
       res.sendStatus(500)
       return
     }

     console.log("Inserted a new user with id: ", results.insertId);
     res.end()
   })

})

//for uploading file
app.post('/uploadfile',(req,res)=>{storage.uploadfile(req,res)});

// app.post('/files', (req, res) => {
//   console.log("Trying to create a new user...")
//   console.log("How do we get the form data???")
// console.log(req.body);
//  console.log("First name: " + req.body.sid+req.body.id)
//  const id = req.body.username;
//  const sid = req.body.password;
//  const file=req.body.file;

//   const queryString = "insert into public.submission (id,sid,sub) values ($1,$2,$3)"
//   client.query(queryString, [id,sid,file], (err, results) => {
//     if (err) {
//       console.log("Failed to insert new user: " + err)
//       res.sendStatus(500)
//       return
//     }

//     console.log("Inserted a new user with id: ", results.insertId);
//     res.end()
//   })

// })
//////////////////////// validating login details
app.post('/auth', function(request, response) {
	var username = request.body.username;
  var password = request.body.password;
  console.log(username+password)
	if (username && password) {
		client.query('SELECT * FROM stu WHERE id = $1 AND name = $2', [username, password], function(error, results, fields) {
      if(error)
      {
        console.log(error);
      }
      console.log("rgggggggggg"+results.length);
      if (results) {
				request.session.loggedin = true;
        request.session.username = username;
        console.log("logged in");
				response.redirect('/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

//  function getConnection() {
//   return mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'lbta_mysql'
//   })
// }

// app.get('/user/:id', (req, res) => {
//   console.log("Fetching user with id: " + req.params.id)

//   const connection = getConnection()

//   const userId = req.params.id
//   const queryString = "SELECT * FROM users WHERE id = ?"
//   connection.query(queryString, [userId], (err, rows, fields) => {
//     if (err) {
//       console.log("Failed to query for users: " + err)
//       res.sendStatus(500)
//       return
//       // throw err
//     }

//     console.log("I think we fetched users successfully")

//     const users = rows.map((row) => {
//       return {firstName: row.first_name, lastName: row.last_name}
//     })

//     res.json(users)
//   })
// })

// app.get("/users", (req, res) => {
//   const connection = getConnection()
//   const queryString = "SELECT * FROM users"
//   connection.query(queryString, (err, rows, fields) => {
//     if (err) {
//       console.log("Failed to query for users: " + err)
//       res.sendStatus(500)
//       return
//     }
//     res.json(rows)
//   })
// })

// app.get("/", (req, res) => {
//   console.log("Responding to root route")
//   res.send("Hello from ROOOOOT")
// })


