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
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
//import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
//import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { logoutUser } from "../../Context/actions/Auth.actions";
//import { listMyOrders } from "../actions/orderActions";
//import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ProfileScreen({navigation}) {
  //const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  //const userDetails = useSelector((state) => state.userDetails);
  //const { loading, error, user } = userDetails;

  //const userLogin = useSelector((state) => state.userLogin);
  //const { userInfo } = userLogin;

  //const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  //const { success } = userUpdateProfile;

  //const orderListMy = useSelector((state) => state.orderListMy);
  //const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;
  const logout = () => {
    try{
    dispatch(logoutUser);
    }catch(e){
      console.log(e);
    }
  }

  const startAppAfresh = () => {
    const firstOpenVal = AsyncStorage.getItem('isFirstTime')
    console.log(firstOpenVal);
    if (firstOpenVal !== null){
      //AsyncStorage.setItem("isFirstTime",null)
      AsyncStorage.removeItem("isFirstTime")
      //AsyncStorage.removeItem("isFirstTime")
      navigation.navigate("Intro1")
    }
    return null
  }
/*
  useEffect(() => {
    if (!userInfo) {
      //navigation.navigate("SignIn");
    } else {
      if (!user || !user.name || success) {
        //dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders);
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigation, userInfo, user, success]);
*/
  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("Password and confirmPassword do not match");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name: name,
          email: email,
          password: password,
        })
      );
    }
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={110}
      contentContainerStyle={styles.container}
      style={{ backgroundColor: "black", paddingTop: 40,  paddingHorizontal:10}}
    >
      <SafeAreaView
      //style={{ alignItems: "center" }}
      >
        <ScrollView>
          <Text style={{ color: "white", textAlign:"center"}}>User Profile</Text>
          {/*
          {message? <Text style={{color:"white"}}>{message}</Text> : null}
          {success ? <Text>Profile Updated</Text>: null}
          {loading ? (
            <Text>Loading...
         }</Text>
          ) : (
          */}
            <View style={styles.form}>
              {/*
              <TextInput
                autoCapitalize="none"
                style={styles.textInput}
                placeholder="name"
                placeholderTextColor="#E1E1E1"
                onChangeText={(text) => setName(text)}
                value={name}
              />
              <TextInput
                autoCapitalize="none"
                style={styles.textInput}
                placeholder="email"
                placeholderTextColor="#E1E1E1"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
              <TextInput
                style={styles.textInput}
                placeholder="password"
                placeholderTextColor="#E1E1E1"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <TextInput
                style={styles.textInput}
                placeholder="confirm password"
                placeholderTextColor="#E1E1E1"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
              />
              <TouchableOpacity style={styles.button} 
                onPress={submitHandler}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
          */}
              <TouchableOpacity style={styles.button} 
                onPress={startAppAfresh}>
                <Text style={{
                  color:"white"
                }}>Start App Afresh</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} 
                onPress={logout}>
                <Text style={{
                  color:"white"
                }}>Logout</Text>
              </TouchableOpacity>
            </View>
            {/*
          )}
            */}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    // flex: 1
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
