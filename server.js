/* Empty JS object to act as endpoint for all routes */
projectData = {};
const data= [];
const express = require('express');
const http = require("http");
const app = express();
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.use(express.static('website'));
app.use(express.json());
const port = 8081;
/* Spin up the server*/
const server = app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };



  //allow get for all resources
 app.get('*', cors())

 app.get('/doorandwindow', function(request, response){
  response.sendFile('/home/hardy/Desktop/Internshiptasks/fullStack/iti/Javascript/project00_itp/website/index.html');
});
 
app.get('/home', cors(),(req,res) => {
  console.log("Got a GET request for the home");
   res.send(data);
  });


app.post('/addData', cors(),additem)

function additem(req,res){
  console.log("Got a post request from the home");
   //console.log(projectData);
   //projectData.push(req.body);
   let newData = req.body;
   let newEntry = {
    id: newData.id,
    price: newData.price
    } ;   
   data.push(newEntry);
  console.log(data );
}





