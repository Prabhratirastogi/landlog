import {firebaseAdmin} from "../../../lib/firebaseAdmin";
import {firebaseClient} from "../../../lib/firebaseClient"

export default async (req,res) => {
    const {id} = req.query;

    console.log("the value of id is: ",id)

    try{
        const doc = await firebaseAdmin.collection('lands').doc(id).get();
        const doc2 = await firebaseClient.collection
        if(!doc.exists){
            res.status(400).end();
        }
        else{
            res.status(200).json(doc.data());
        }
        res.stauts(200).end();
    }catch(e){
        res.status(400).end()
    }
}