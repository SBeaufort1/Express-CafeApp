const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');


const app = express();

// some middleware
app.use(logger('dev'));
app.use(express.json());

//Config both favicon and static middleware
//serve from Build folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//routes

//create Catch-All route using (/*)
//The catch all route is necessary to return the index.html on all non-AJAX request
app.get('/*', (req, res) => {
res.sendFile(path.json(__dirname,'build','index.html'))	
});



//listening
 app.listen(5000, () => {
  console.log('listening on port 5000');
 });

 //ANOTHER WAY for PORT LISTENING.
//  const port = process.env.PORT || 5000;

// app.listen(port, function() {
//    console.log(`Express app running on port ${port}`)
//  });