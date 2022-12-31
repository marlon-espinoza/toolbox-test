const Express = require('express');
require('dotenv').config();
const filesRouter = require('./Routes/files.routes');

const app = Express();
const port = process.env.PORT || 4001;

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