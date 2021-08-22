import React, { useEffect, useState, useCallback } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import {
    Text,
    View,
    TouchableOpacity,
    AsyncStorage,
    Image,
    ActivityIndicator,
    Animated,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TextInput,
    Button,
    Easing,
    TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
//import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
//import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { logoutUser } from "../../Context/actions/Auth.actions";

//import Animated from "react-native-reanimated";

export default function Easings({ navigation }) {
    const [animation, setAnimation] = useState(new Animated.Value(0));


    const animatedStyles = {
        transform: [
            {
                translateY: animation,
            }
        ]
    };

    const startAnimation = () => {
        Animated.timing(animation, {
          toValue: 300,
          duration: 1500,
          easing: Easing.back(5)
        }).start(()=>{
          Animated.timing(animation,{
            toValue:-300,
            duration:1500,
            easing: Easing.bounce
          }).start();
        });
      };

        return (
            <KeyboardAwareScrollView
                extraScrollHeight={110}
                contentContainerStyle={styles.container}
                style={{ backgroundColor: "black", paddingTop: 0, paddingHorizontal: 10 }}
            >
                <SafeAreaView>
                    <TouchableWithoutFeedback onPress={startAnimation}>
                        <Animated.View style={[styles.box, animatedStyles]} />
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </KeyboardAwareScrollView>
        );
    }

    const styles = StyleSheet.create({
        container: {
            padding: 20,
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
        },
        box: {
            width: 150,
            height: 150,
            backgroundColor: "tomato",
        },
        pageImage: {
            //flex: 1,
            textAlign: "left",
            width: 400,
            height: 500,
            resizeMode: "contain",
            paddingRight: 20,
            margin: 0,
        },
        button: {
            width: 300,
            height: 45,
            margin: 0,
            padding: 0,
            borderRadius: 5,
            backgroundColor: "#16a89c",

            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
        },
        image: {
            height: 140,
            width: 140,
            borderRadius: 70,
            borderWidth: 2,
            borderColor: "#F35960",
        },
        textInput: {
            borderBottomColor: "#F35960",
            borderBottomWidth: 1,
            height: 45,
            width: "80%",
            paddingLeft: 15,
            marginVertical: 20,
            marginHorizontal: "10%",
        },
        textArea: {
            borderWidth: 1,
            borderColor: "#F35960",
            width: "80%",
            height: 80,
            paddingHorizontal: 15,
            paddingTop: 15,
            textAlignVertical: "top",
            marginBottom: 20,
            marginHorizontal: "10%",
            borderRadius: 5,
        },
        updateButton: {
            width: 150,
            height: 55,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "#F35960",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
        },
        logoutButton: {
            width: 150,
            height: 55,
            borderRadius: 50,
            backgroundColor: "#F35960",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
        },
        logoutButtonText: {
            color: "white",
        },
        updateButtonText: {
            color: "#F35960",
        },
    });
