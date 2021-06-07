const express = require('express')
const app = express()
const port = 7000;
const cors = require('cors')
app.use(cors())
// getting-started.js

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json())

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const User = mongoose.model("User", UserSchema);
app.post('/register', async (req, res)=>{
    const {username, password} = req.body
    // const user = new User()
    await User.create({username, password});

    res.json({
        message: "success"
            })
})

app.get('/ja', (req, res)=>{
    res.send("jajajajajja")
})


// app.listen(port, ()=>{
//     console.log("Listening on port man!")
// })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  app.listen(port, ()=>{
    console.log("Listening on port man!")
})
});