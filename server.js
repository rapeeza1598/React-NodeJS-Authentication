let express = require("express")
let cors = require("cors")
let bodyParser = require("body-parser")
let app = express()
let mongoose = require("mongoose")
let port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoURI = "mongodb://localhost:27017/mernloginreg"

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))

let Users = require("./routes/Users")

app.use("/users", Users)

app.listen(port, () => {
    console.log("Server is runing on port: " + port)
})
