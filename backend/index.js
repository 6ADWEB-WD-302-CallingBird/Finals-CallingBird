//requires
var express = require('express'),
    mongoose = require('mongoose'),
    cbdb = require('./database/db'),
    routes = require('./route/routes'),
    cors = require('cors');

    //express app
    const app = express();
 
    app.use(cors()); //removes cors restriction
    
    //mongoose connection
    mongoose.set('strictQuery',false)

    mongoose.connect(cbdb.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },() => {
        console.log('Database sucessfully connected ')
      },
      error => {
        console.log('Database error: ' + error)
      }
    )



//Server Connection    
var port = process.env.PORT || 2929;
app.listen(port, () => {
    console.log(`listening to ${port}`);
});

app.use(express.json());
app.use(routes);
