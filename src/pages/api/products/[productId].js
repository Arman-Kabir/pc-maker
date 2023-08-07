// import connectToMongoDB from "../../../../db";

// export default async function handler(req, res) {
    
//     let client;
//     client = await connectToMongoDB();
//     try {
//         const productsCollection = client.db("pc-maker").collection("products");
//         ///////////////
//         if (req.method === 'GET') {
//             const productId =  await req.query.productId;
//             const product = await productsCollection.findOne({ id:productId});
//             res.send({ message: "success", status: 200, data: product });
//         }

//     } catch (error) {
//         res.status(500).json({ messgae: 'Internal Server Error', status: 500, error });
//     }
// };


