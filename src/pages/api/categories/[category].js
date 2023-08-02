import { ObjectId } from "mongodb";
import connectToMongoDB from "../../../../db";

export default async function handler(req, res) {
    let client;
    try {
        client = await connectToMongoDB();
        const productsCollection = client.db("pc-maker").collection("products");
        ///////////////
        if (req.method === 'GET') {
            const { category } = await req.query;
            console.log(category);
            const products = await productsCollection.find({ category: category }).toArray();
            res.send({ message: "success", status: 200, data: products });
        }
    } catch (error) {
        res.status(500).json({ messgae: 'Internal Server Error', status: 500, error });
    }
};



