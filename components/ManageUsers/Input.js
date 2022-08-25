import { View, TextInput, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { GlobalStyles } from "../../styles/styles";

function Input({iconConfig, textInputConfig}) {
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

    }
})
