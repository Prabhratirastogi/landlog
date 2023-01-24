import {firebaseAdmin} from "../../../lib/firebaseAdmin";
import {firebaseClient} from "../../../lib/firebaseClient"

export default async (req:any,res:any) => {
    const {id} = req.query;

    console.log("the value of id is: ",id)

    try{
        const doc = await firebaseClient.firestore().collection('lands').doc(id).get();
        if(!doc.exists){
            res.status(400).end();
        }

        res.stauts(200).end();
    }catch(e){
        res.status(400).end()
    }
}