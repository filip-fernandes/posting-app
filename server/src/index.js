require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const cors = require('cors'); 


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("connected to db"))
  .catch(e => console.log(e));

app.use('/user', userRoutes);
app.use('/', postRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
