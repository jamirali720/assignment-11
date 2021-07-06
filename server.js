const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userRouter = require('./routers/UserRoute')



const app = express();


const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))




app.use('/api/user', userRouter)

app.use('/api/users', userRouter)




app.get('/', (req, res) => {
    res.json({
        massage: ' welcome to my server '
    })
})
app.listen(PORT, ()=> {
    console.log(`server is running at: ${PORT}`)
    mongoose.connect('mongodb+srv://karamotali:SRowFq9XImJiupI8@cluster0.yuf7y.mongodb.net/bookStore?retryWrites=true&w=majority', {useNewUrlParser: true,  useUnifiedTopology: true})
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
           
    
})