// require('dotenv').config();
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.vst2gce.mongodb.net/?retryWrites=true&w=majority`;

// async function connectToMongoDB() {
//     // Create a MongoClient with a MongoClientOptions object to set the Stable API version
//     const client = new MongoClient(uri, {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     });

//     try {
//         await client.connect();
//         console.log('DB connected');
//         return client;
//     } catch (error) {
//         console.log('Error connecting to DB')
//     }
// };

// export default connectToMongoDB;

