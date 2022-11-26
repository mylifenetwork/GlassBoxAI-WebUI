import { View, TextInput, StyleSheet,Text,Image} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { GlobalStyles } from "../../styles/styles";

function Input({iconConfig, textInputConfig,input=true,id}) {
    if(input ===false){
        if(id ==="Phone\nNumber"){
            return <View style={styles.inputContainer}>
                <Ionicons style={styles.icon} {...iconConfig} />
                <Text style={[styles.tag,{marginRight:"-2.5%"}]}>{id}</Text>
                <View style={styles.boxinput}>
                <TextInput style={{color:"white"}} {...textInputConfig}  />
                <Image source={require("../../assets/Images/edit3.png")} style={styles.image}></Image>
                </View>
            </View>
        }
        return <View style={styles.inputContainer}>
        <Ionicons style={styles.icon} {...iconConfig} />
        <Text style={styles.tag} numberOfLines={2}>{id}</Text>
        <Text style={styles.box}>{textInputConfig}</Text>
    </View>

    }
    return <View style={styles.inputContainer}>
        <Ionicons style={styles.icon} {...iconConfig} />
        <TextInput style={styles.input} {...textInputConfig}  />
    </View>
}


export default Input; 


const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal:4,
        marginVertical:10, 
        flexDirection:'row',
        alignItems:'center'

    },
    icon:{
        marginRight:8,
        marginLeft:8,

    }, 
    input:{
        marginLeft:18,
        marginRight:18,
        borderRadius:8,
        backgroundColor:GlobalStyles.colors.primary200,
        width:'80%',
        height:'100%',
        padding:6,
        fontSize:13, 
        color:GlobalStyles.colors.primary500,

    },
    box:{
        marginLeft:18,
        marginRight:18,
        borderRadius:8,
        borderColor:"white",
        borderWidth:1,
        width:'67.5%',
        height:'100%',
        padding:6,
        color:"white"

    },
    boxinput:{
        marginLeft:18,
        marginRight:18,
        borderRadius:8,
       // backgroundColor:GlobalStyles.colors.primary200,
        borderColor:"white",
        borderWidth:1,
        width:'67.5%',
        height:'90%',
        padding:6,
        fontSize:13, 
        flexDirection:"row",
        justifyContent:"space-between"
        //color:GlobalStyles.colors.primary500,

    },
    tag:{
        color:"white",
        fontSize:16, 
        fontFamily: "K2D-Regular",
        fontWeight:400,
    },
})
