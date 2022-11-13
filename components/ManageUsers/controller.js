import { StyleSheet, Text, View, Image } from "react-native";
import { db,firebase } from "../../config";
import { collection,onSnapshot,query} from "firebase/firestore"; 
import React,{ useEffect, useState } from "react";
import AlertCard from "../UI/AlertCard";

const Controller=()=>{
  const [data,setData]=useState([]);
  const todoRef = collection(db,"Journey")
  const dic = {"acceleration":{"image":"performance.png","name":"Acceleration"},
              "braking":{"image":"brake.png","name":"Braking"},
              "conering":{"image":"Coner.png","name":"Conering"},
              "distanceWithinCars":{"image":"distance.png","name":"Distance between Cars"},
              "obstructions":{"image":"obstruction.png","name":"Obstructions"},
               "withinLanes":{"image":"road.png","name":"Staying within Lanes"}

              }
  //const refdoc = doc((db,"Journey","JKUe1lI72c2VlUc7AUeS"));
  const q = query(collection(db,"Journey"))

  useEffect(()=>{ 
    onSnapshot(q,
      querySnapshot => {
        const info = []
        querySnapshot.forEach((doc)=>{
            console.log(doc.id)
          if(doc.id == "JKUe1lI72c2VlUc7AUeS"){
            info.push(doc.data()["alerts"])
          }

        })
        setData(info);
      }
    )

        
    },[]);
    
    return(
      <View>
        {console.log("data",data)}
        {Object.keys(data[0]).map(k=>
        // console.log(k)
        <AlertCard scores={data[0][k]["score"]}  alertname={k} noAlert={data[0][k]["alert"]}></AlertCard>
        )}
      </View>

    );
  
}
export default Controller

// async function getAlertsInfo (userid,journeyID){
//      userID="KhEKgrOxu9dL7EkgC8de2lZokp22";
//      journeyID="JKUe1lI72c2VlUc7AUeS";
//     const docRef = doc(db, "Journey", journeyID);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       const data = docSnap.data();
//       //console.log("Document data:", docSnap.data());
//       if(data["userid"]!=userID){
//        console.log("wrong USER ID")
//       }else{
//         return data;
//       //  console.log(data["alerts"])
//       }
//     } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//     }
//     //console.log();
  
//   }

