import { StatusBar, StyleSheet, Text, View,Image,TouchableOpacity,ScrollView} from "react-native";
import Button from "../components/UI/Button";
import { useNavigation } from "@react-navigation/native";
import DropdownBox from "../components/UI/DropdownBox";
import { GlobalStyles } from "../styles/styles";

function Account({
    name = "Peter Lau",
    role="Commercial",
    license=[
        { label: 'TC7391', value: '1' },
        { label: 'BV9203333', value: '2' }],
    driveOverDistance = 105,
    declaredDistance = 1500,
    }){
    const navigation = useNavigation();
    function showOverallPageHandler() {
        navigation.navigate("Overall");
    }
    function showMiddleButtonHandler() {
        navigation.navigate("Journey");
    }
    function showPersonalPageHandler() {
    //navigation.navigate("Overall");
    }

    return(
        <> 
        <StatusBar barStyle="light-content" />
         
        <View style={styles.container}>        
        <View style={styles.colContainer}>
            <Image source={require("../assets/Images/photo.png")} style={styles.imageContainer}></Image>
            <View style={styles.rowContainer}>
                <View style={styles.colContainer}>
                    <Image source={require("../assets/Images/identification.png")} style={styles.imageContainerB}>
                    </Image>
                    <Text style={styles.nameText}>{name}</Text>
                </View>

                <View style={styles.colContainer}>
                    <Image source={require("../assets/Images/seatbelt.png")} style={styles.imageContainerB}>
                    </Image>
                    <Text style={styles.roleText}>{role} driver</Text>
                </View>


            </View>
        </View>
        <DropdownBox data={license} style={styles.dropdownContainer}></DropdownBox>

        <View style={styles.line}></View>
        <View style={styles.Summary}>
          <Text style={styles.SummaryText}>
            You've driven over {driveOverDistance}km        
          </Text>
          <Text style={styles.minorSummaryText}>
            of your declared {declaredDistance} km
          </Text>
          </View>

          {/* <Button backgroundColor={"grey"} textColor={"blue"}>
          <Image source={require("../assets/Images/wrongAlert.png")} style={styles.iconContainer}/>
            Pair new device
          </Button> */}
          <TouchableOpacity style={styles.buttonContainerB}>
          <View style={[styles.colContainer,{justifyContent:"center"}]}>
             <Image source={require("../assets/Images/bluetooth.png")} style={styles.iconContainer}/>
                <Text style={styles.buttonText}>Pair new device</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainerB}>
          <View style={[styles.colContainer,{justifyContent:"center"}]}>
             <Image source={require("../assets/Images/wrongAlert.png")} style={styles.iconContainer}/>
                <Text style={styles.buttonText}>View paired device</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainerB}>
          <View style={[styles.colContainer,{justifyContent:"center"}]}>
             <Image source={require("../assets/Images/wrongAlert.png")} style={styles.iconContainer}/>
                <Text style={styles.buttonText}>Upload driving license</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainerB}>
          <View style={[styles.colContainer,{justifyContent:"center"}]}>
             <Image source={require("../assets/Images/license.png")} style={styles.iconContainer}/>
                <Text style={styles.buttonText}>View driving license</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainerB}>
          <View style={[styles.colContainer,{justifyContent:"center"}]}>
             <Image source={require("../assets/Images/edit.png")} style={styles.iconContainer}/>
                <Text style={styles.buttonText}>Edit profile</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonContainerB}>
          <View style={[styles.colContainer,{justifyContent:"center"}]}>
             <Image source={require("../assets/Images/wrongAlert.png")} style={styles.iconContainer}/>
                <Text style={styles.buttonText}>Wrong Alert</Text>
          </View>
          </TouchableOpacity>

                    
                
  
        <View style={styles.footerContainer}>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.homeContainer}  onPress={showOverallPageHandler} >
            <Image source={require("../assets/home.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeContainer} onPress={showMiddleButtonHandler} >
            <Image source={require("../assets/journey1.png")}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeContainer} onPress={showPersonalPageHandler} >
            <Image source={require("../assets/user1.png")}/>
            </TouchableOpacity> 
          </View>
        </View>
          
  
        </View>
      </>
    );

}

export default Account;

const styles = StyleSheet.create({
    iconContainer:{
        marginRight:"10%"

    },
    buttonContainerB:{
        backgroundColor:"#5F616B",
        borderColor:"#5F616B",
        borderWidth: 1.5,
        borderRadius: 8,
        width:"90%",
        padding:"2.5%",
        justifyContent:"space-evenly",
        marginTop:"7.5%",
        marginBottom:"-5%"

    },
    buttonText:{
        fontFamily: "K2D-Regular",
        alignSelf:"center",
        fontSize:14,
        fontWeight:300,
        color:"#A1DADC",
        marginRight:"60%",
        // alignContent:"center"
    },
    Summary:{
        backgroundColor:"#353948", 
        alignSelf:"center",
        zIndex:100
      },
      minorSummaryText:{
        color:"#B6B6B6",

        fontFamily: "K2D-Regular",
        alignSelf:"center",
        fontSize:14,
        fontWeight:400,
        zIndex:1
      },
      SummaryText:{
        color:"white",
        fontFamily: "K2D-Regular",
        //position:"absolute",
        fontSize:20,
        fontWeight:700,
        zIndex:1
      },
    imageContainerB:{
        alignSelf:"center",
        
    },
    imageContainer:{
        marginTop:"10%",
        // marginLeft:"5%",
    },
    colContainer:{
        // flex: 1,
        flexDirection: "row",
        //alignSelf:"flex-start",
        marginLeft:"10%"
       
    },
    rowContainer:{
        marginTop:"5%",
        flexDirection: "col",
        justifyContent:"space-evenly",
        // alignSelf:"center",
        // align: "center",
        // alignContent:"center",

    },
    line:{
        borderWidth: 1,
        borderColor:'#EBEBEB',
        width: "100%",
        marginTop:"2.5%",
        marginBottom:"2.5%",
        transform:[{translateY:25}],

    },
    profileContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        align: "center",
        alignContent:"center",
    },
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection:"column",
        alignItems:"center"
      },
    footerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        align: "center",
        alignContent:"center",
        marginBottom:"7.5%",
        zIndex:0,
    },
    homeContainer:{
        felx: 0.3,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    buttonContainer:{
        flex: 0.8,
        flexDirection: 'row',
        align: "center",
        justifyContent: 'space-between'
      },
    nameText:{
        fontFamily: "K2D-Regular",
        fontWeight:"700",
        color:"white",
        fontSize:24,
        marginLeft:"5%"
    },
    roleText:{
        fontFamily: "K2D-Regular",
        fontWeight:"300",
        fontSize:18,
        color:"white",
        marginLeft:"2%"
    },
    dropdownContainer:{
    }

})