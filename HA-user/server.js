const express = require('express');
const connectDB=require('./config/db');
const app = express();

//connect Database
connectDB();

app.get('/',(req,res)=>{
    res.send('Api is running');
})

//For bodyparser
//Init Middleware
app.use(express.json({extended:false}));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
