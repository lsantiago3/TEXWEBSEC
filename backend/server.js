require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;


// Allow JSON in request
app.use(express.json());

//CONNECT TO MONGODB

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err=>console.error("MongoDB connection error:",err));

//CONNECT YOUR ROUTES
const testRoutes=require('./routes/testRoutes');
app.use('/api', testRoutes);

//Root Route

app.get('/',(req,res)=> {
  res.send('TEXWEBSEC backend is running');
});

//START SERVER
app.listen(PORT,()=> {
  console.log(`Server running on http://localhost:${PORT}`);
});
  






