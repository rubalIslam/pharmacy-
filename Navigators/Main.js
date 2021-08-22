import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Stacks
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import UserNavigator from "./UserNavigator";
import AdminNavigator from "./AdminNavigator";

import CartIcon from "../Shared/CartIcon";
import AuthGlobal from "../Context/store/AuthGlobal";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../Screens/IntroScreen/IntroScreen";

const Tab = createBottomTabNavigator();

const IntroStack = createStackNavigator();


const Main = () => {

  const IntroStackScreen = () => (
    <IntroStack.Navigator>
      <IntroStack.Screen
        name="IntroScreen"
        component={IntroScreen}
        options={{ headerShown: false}}
      >
      </IntroStack.Screen>
    </IntroStack.Navigator>
  )

  const TabNav = () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: "#e91e63",
      }}
    >
      {/*console.log("auth",AuthGlobal)*/}

      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="shopping-cart" color={color} size={30} />
              <CartIcon />
            </View>
          ),
        }}
      />
      
      {context.stateUser.user.isAdmin == true ? (
        <Tab.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={30} />
          ),
        }}
      />
      ): null }
      
      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />

    </Tab.Navigator>
  )

  const context = useContext(AuthGlobal)
  /*
  return (
    <IntroStackScreen/>
  )
  */
  const firstTimeOpen = "no";

  return (
    <>
    { firstTimeOpen === "yes" && <IntroStackScreen/>}
    { firstTimeOpen === "no" && <TabNav/>}
    </>
  );
};

export default Main;
