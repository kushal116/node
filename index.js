const mongoose = require("mongoose");
const express = require("express");
const app = express();

// create server using express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const useRouter =require("./routes/userRoutes")
app.use('/user',useRouter)

const studentRouter =require("./routes/student")
app.use('/user',studentRouter)
const port = 3000;
app.listen(port, () => {
  console.log("server is running on port", port);
});


//establish db connection using mongoose
mongoose.connect(
  "mongodb://localhost:27017/user",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if(err) {
      console.log("Error connecting", err);
    }else
    {
     console.log("connection successful");
    }
  });
