const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const port = process.env.PORT || 5000;
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@atlascluster.xgsegjb.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const jobsCollection = client.db("soloSphere").collection("jobs");
    const bidsCollection = client.db("soloSphere").collection("bids");

    // Get all jobs data from mongodb
    app.get("/jobs", async (req, res) => {
      const query = {};
      const cursor = jobsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get single job data from mongodb
    app.get("/job/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);
      res.send(result);
    });

    // Save bids data to mongodb
    app.post("/bid", async (req, res) => {
      const data = req.body;
      console.log(data);
      const result = await bidsCollection.insertOne(data);
      res.send(result);
    });

    console.log("You successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.log);

app.get("/", (req, res) => {
  res.send("Hello from soloSphere Server ....");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
