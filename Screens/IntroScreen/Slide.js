import React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";

const { height, width } = Dimensions.get("window");
export default function Slide({imageUrl}){
    return (
        <View style={styles.container}>
            <Image
                style={{
                    resizeMode:"contain",
                    width:"100%",
                    height:545,
                    borderBottomLeftRadius:75,
                    borderBottomRightRadius:75,

                }}
                source={imageUrl}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop:0,
      paddingTop:0,
      flex: 1,
      width,
      alignItems: "center",
      marginBottom:0
    },
});
  