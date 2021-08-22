import React, { useEffect,useContext,useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AsyncStorage } from 'react-native';
import { View, } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// Stacks
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import UserNavigator from "./UserNavigator";
import AdminNavigator from "./AdminNavigator";

import CartIcon from "../Shared/CartIcon";
import AuthGlobal from "../Context/store/AuthGlobal";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../Screens/IntroScreen/IntroScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import AnimationWin from "../Screens/AnimationWin/AnimationWin";
import TranslateTo from "../Screens/AnimationWin/TranslateTo";
import Scale from "../Screens/AnimationWin/Scale";
import WidthHeight from "../Screens/AnimationWin/WidthHeight";
import TopLeftRight from "../Screens/AnimationWin/TopLeftRight";
import ChangeColor  from "../Screens/AnimationWin/ChangeColor";
import DecayAnim from "../Screens/AnimationWin/DecayAnim";
import Rotation  from "../Screens/AnimationWin/Rotation";
import Easings from "../Screens/AnimationWin/Easings";
import SpringAnim from "../Screens/AnimationWin/SpringAnim";
import EventsAnim from "../Screens/AnimationWin/EventsAnim";
import AddAnim from "../Screens/AnimationWin/AddAnim";
import ParallelAnim from "../Screens/AnimationWin/ParallelAnim";
import SequenceAnim from "../Screens/AnimationWin/SequonceAnim";
import StaggerAnim from "../Screens/AnimationWin/StaggerAnim";
import DelayAnim from "../Screens/AnimationWin/DelayAnim";
import InterpolateOnNum from "../Screens/AnimationWin/Interpolate_on_num";
import ColorInterpolate from "../Screens/AnimationWin/ColorInterpolate"
import Home from "../Screens/Home/Home";


const Tab = createBottomTabNavigator();

const IntroStack = createStackNavigator();


const MainCopy = () => {

  const [value, setValue] = useState(null);
  const dispatch = useDispatch();
  
  const isFirstOpen = useSelector((state) => 
    state.store.isFirstOpen);

  const store = useSelector((state) => state.store)

  useEffect(() => {
    const isFirstTime = async () => {
      const firstOpen = await AsyncStorage.getItem('isFirstTime');
      setValue(firstOpen);
    };
    isFirstTime();
    const autoLogout = async () => {
      const getUser = await AsyncStorage.getItem('user');
      if (getUser) {
        const user = await JSON.parse(getUser);
        if (user.data.expireTime - Date.now() < 0) {
          //dispatch(Logout());
          console.log("logout")
        }
      }
      return;
    };
    autoLogout();
  }, []);

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
       <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="magic" color={color} size={30} />
            ),
          }}
        />
      {console.log("auth",context.stateUser.user)}
      { context.stateUser.user.userId ?
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={30} />
            ),
          }}
        />
        :null
      }
      {context.stateUser.user.isAdmin == false && context.stateUser.user.userId ?
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
        :null
      }
      {context.stateUser.user.isAdmin == true && context.stateUser.user.userId ? (
        <Tab.Screen
          name="Admin"
          component={AdminNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="cog" color={color} size={30} />
            ),
          }}
        />
        ): null 
      }
      {!context.stateUser.user.userId ?
        <Tab.Screen
          name="User"
          component={UserNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} size={30} />
            ),
          }}
        />
        :null
      }
      {context.stateUser.user.isAdmin == false && context.stateUser.user.userId ?
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            title: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  //fontFamily: "Roboto-Medium",
                }}
              >
                Home
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <Icon name="id-card" color={color} size={30} />
            ),
          }}
        />
        :null
      }
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
    { console.log("isfirstopen::",isFirstOpen," value::",value) }
    { (isFirstOpen|| value !== null) && <TabNav/>}
    { !isFirstOpen && value === null && <IntroStackScreen/>}
    </>
  );
};

export default MainCopy;
