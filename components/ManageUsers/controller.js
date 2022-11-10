import { db } from "../../config";
import { collection, addDoc,doc,getDoc,query,where } from "firebase/firestore"; 

export async function getAlertsInfo (userid,journeyID){
     userID="KhEKgrOxu9dL7EkgC8de2lZokp22";
     journeyID="JKUe1lI72c2VlUc7AUeS";
    const docRef = doc(db, "Journey", journeyID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      //console.log("Document data:", docSnap.data());
      if(data["userid"]!=userID){
       console.log("wrong USER ID")
      }else{
        return data;
      //  console.log(data["alerts"])
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    //console.log();
  
  }

