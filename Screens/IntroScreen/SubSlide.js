import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../Redux/utils/Colors";
import CustomText from "../UI/CustomText";

let topcolor = "white";

export default function SubSlide({ subtitle, des, last, NextSlide,tcolor, EnterApp }){
  const bgColor = last ? "#2CB9B0" : "#189642";
  const labelCover = last ? "#ffffff" : Colors.text;
  const onPressHandler = last ? EnterApp : NextSlide;
  //console.log(tcolor)
  return (
    <View style={styles.subSlideContainer}>
      <CustomText style={styles.subTitle}>{subtitle}</CustomText>
      <View>
        <Text style={styles.des}>{des}</Text>
      </View>
      <TouchableOpacity onPress={onPressHandler}>
        <View style={[styles.buttonContainer, { backgroundColor:tcolor }]}>
          <Text style={[styles.buttonLabel, { color: "white" }]}>
            {last ? "Enter App" : "Next Slide"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  subSlideContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:40,
    paddingHorizontal: 40,
  },
  subTitle: {
    fontSize: 24,
    textAlign:"center",
    color: "#2CB9B0",
  },
  des: {
    fontSize: 18,
    lineHeight: 30,
    color: "#a0ff7a",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 15,
    height: 50,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    fontSize: 16,
    //color:"#fff6a1",
    color: topcolor,
    fontWeight: "bold",
  },
});
