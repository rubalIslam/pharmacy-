import React, { useEffect, useState, useCallback,useMemo } from "react";
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
    PanResponder
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
//import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
//import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { logoutUser } from "../../Context/actions/Auth.actions";

//import Animated from "react-native-reanimated";

export default function DecayAnim({ navigation }) {
    const [animation, setAnimation] = useState(new Animated.ValueXY(0));

  

    const _panResponder = React.useMemo(() => PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (e, gestureState) => {
            animation.extractOffset();
        },
        onPanResponderMove: Animated.event([
            null,
            {
                dx: animation.x,
                dy: animation.y
            }
        ]),
        onPanResponderRelease: (e, { vx, vy }) => {
            Animated.decay(animation, {
                velocity: { x: vx, y: vy },
                deceleration: 0.997,
            }).start();
        }
    }),[]); 

    const AnimatedStyles = {
        transform: animation.getTranslateTransform(),
    };

    return (

        <View style={{ flex: 1 }}>

            <Animated.View
                {..._panResponder.panHandlers}
                style={[
                    styles.box,
                    AnimatedStyles
                ]}
            />
        </View>
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
    content: {
        height: 3000,
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
