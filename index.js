const express = require('express')
const app = express()
const cors = require('cors')
const bcrypt = require('bcrypt');
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion} = require('mongodb');

app.use(cors({}));
app.use(express.json())
app.use(cookieParser())




// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.malve12.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const uri = 'mongodb+srv://bidduttriplewsols:gwFi2uxu7gl4510o@cluster0.08vou1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const dbConnect = async () => {
    try {
        client.connect()
        console.log('DB Connected Successfully✅')
    } catch (error) {
        console.log(error.name, error.message)
    }
}
dbConnect()

const userData = client.db("user").collection("userData");






app.get('/', (req, res) => {
  res.send('server Working')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})