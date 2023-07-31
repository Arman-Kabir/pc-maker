// const handler = (req, res) => {
//     res.send({ message: 'Server created successfully' })
// };
// export default handler;

require('dotenv').config();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.vst2gce.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(req, res) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        console.log('db connected');
        const productsCollection = client.db("pc-maker").collection("products");

        if (req.method === 'GET') {
            const products = await productsCollection.find({}).toArray();
            res.send({ message: "success", status: 200, data: products })
        }

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

export default run;
