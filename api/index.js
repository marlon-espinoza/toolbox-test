const Express = require('express');
require('dotenv').config();
var cors = require('cors')
const filesRouter = require('./Routes/files.routes');

const app = Express();
const port = process.env.PORT || 4001;

// CORS dinamic config 
const CORS = process.env.CORS || '*';
const whitelist = CORS == '*' ? CORS : JSON.parse(CORS);

var corsOptions = {
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(whitelist == '*') return callback(null, true);
    if(whitelist.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}

app.use(cors(corsOptions));

app.listen(port, ()=>{
  console.log(`App listening on port ${port}`)
})

app.use('/files', filesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).json({
    message: "No such route exists"
  })
});

// error handler
app.use(function(err, req, res, next) {
  // console.log(err)
  if (err.status) {
    res.status(err.status || 500).json({
      message: err.message || "Error procesando los datos"
    })
  }
  else {
    res.status(401).json({
      message: err.message
    })
  }
});

module.exports = app;