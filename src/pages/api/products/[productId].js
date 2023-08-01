import { ObjectId } from "mongodb";
import connectToMongoDB from "../db";

export default async function handler(req, res) {
    // res.send({ message: 'Server created successfully' });
    // const { productId } = req.query;
    // console.log(productId, typeof (productId));
    let client;
    try {
        client = await connectToMongoDB();
        const productsCollection = client.db("pc-maker").collection("products");
        ///////////////
        if (req.method === 'GET') {
            const productId =  await req.query.productId;
            console.log(productId);
            const product = await productsCollection.findOne({ id:productId});
            res.send({ message: "success", status: 200, data: product });
        }

        // console.log("DB connection successful");
    } catch (error) {
        res.status(500).json({ messgae: 'Internal Server Error', status: 500, error });
    }
};


// async function run(req, res) {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         console.log('db connected');
//         const productsCollection = client.db("pc-maker").collection("products");

//         if (req.method === 'GET') {

//             if (req.query.productId) {
//                 const productId = await req.query.productId;
//                 console.log(productId);
//                 const product = await productsCollection.findOne({ _id: ObjectId(productId) });
//                 res.send({ message: "success", status: 200, data: product });
//             } else {
//                 const products = await productsCollection.find({}).toArray();
//                 res.send({ message: "success", status: 200, data: products });
//             }
//         }
//     } finally {
//         // Ensures that the client will close when you finish/error
//         // await client.close();
//     }
// }


