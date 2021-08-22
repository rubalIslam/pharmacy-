import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox,Text,SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

// Redux
import { Provider } from "react-redux";
import store from "./Redux/store";
import { createStore, combineReducers, applyMiddleware } from "redux";


// Context API
import Auth from "./Context/store/Auth";

// Navigatiors
//import Main from "./Navigators/Main";
import MainCopy from "./Navigators/Maincopy";
import SplashScreen from "./Screens/SplashScreen/SplashScreen";

// Screens
import Header from "./Shared/Header";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <SafeAreaProvider>
      <Auth>
        <Provider store={store}>
          <NavigationContainer style={{flex:1}}>
            <Header />
            <SplashScreen/>
            {/*<MainCopy/>*/}
            <Toast ref={(ref) => Toast.setRef(ref)} />
          </NavigationContainer>
          {/*<Text>hello</Text>*/}
        </Provider>
      </Auth>
    </SafeAreaProvider>
  );
}
