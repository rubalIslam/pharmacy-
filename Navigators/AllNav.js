import { View,Dimensions,Text } from "react-native";
import React from "react";
import MainCopy from "./Maincopy";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

export default function AllNav() {
    return (
      <View styles={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1, 
        backgroundColor:"red"
      }}>
          <MainCopy/>
      </View>
    );
}