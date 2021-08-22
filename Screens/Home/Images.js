import React from "react"
import {
    View, 
    Text,
    StyleSheet,
    Animated,
    Dimensions,
    TouchableWithoutFeedback
} from "react-native";

const { width,height } = Dimensions.get("window");

const Images = ({image, title}) =>{
    return (
        <View style={styles.container}>
            <Animated.Image
                source={image}
                style={styles.image}
                resizeMode="cover"
            />  
                {console.log("img::",title)}
                <View style={[
                    StyleSheet.absoluteFill,
                    styles.center]}>
                    <View style={styles.textWrap}>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width,
        height,
        overflow:"hidden"
    },
    image:{
        //flex:1,
        width: 400,
        height:400
    },
    center:{
        //justifyContent:"center"
        paddingTop: 230
    },
    textWrap:{
        //backgroundColor:"rgba(0,0,0,.5)",
        paddingVertical:0
    },
    title:{
        backgroundColor:"transparent",
        fontSize:30,
        color:"white",
        textAlign:"center"
    }
})

export default Images;