const express = require('express');
const cors =require("cors");
const morgan =require("morgan");
const handleError = require('./middlewares/error')

const authRouter = require('./routes/auth-route')

const app = express()

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", authRouter)

app.use(handleError)

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));