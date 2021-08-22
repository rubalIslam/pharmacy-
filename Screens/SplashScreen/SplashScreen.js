import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Animated,
  Dimensions,
  Pressable,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import Splash from "../../assets/Images/pink_splash1.png";
import Zalo from "../../assets/Images/Zalo.png";
import Menu from "../../assets/Images/menu_pink.png";
import MainCopy from "../../Navigators/Maincopy";
import AllNav from "../../Navigators/AllNav";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;

export default function SplashScreen() {

  const edges = useSafeAreaInsets();

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

  //const animation = useRef(new Animated.Value(0)).current;
  const [animation, setAnimation] = useState(
    new Animated.Value(0)
  )
  const [scaleLogo, setScaleLogo] = useState(
    new Animated.Value(100)
  )
  const [scaleTitle, setScaleTitle] = useState(
    new Animated.Value(1)
  )
  const [moveButton, setMoveButton] = useState(
    new Animated.ValueXY({ x: winWidth / 2 - 100, y: winHeight / 2 - 60 })
  )
  const [moveLogo, setmoveLogo] = useState(
    new Animated.ValueXY({ x: winWidth / 2 - 50, y: winHeight / 2 - 50 })
  )
  const [moveTitle, setMoveTitle] = useState(
    new Animated.ValueXY({ x: winWidth / 2 - 60, y: winHeight / 2 - 40 })
  )
  const [moveMenu, setMoveMenu] = useState(
    new Animated.ValueXY({ x: -100, y: 10 })
  )
  const [scaleMenu, setScaleMenu] = useState(
    new Animated.Value(0)
  )
  const [moveScreen, setMoveScreen] = useState(
    new Animated.ValueXY({
      x: Dimensions.get('window').width,
      y: Dimensions.get('window').height+20
    })
  )
  const [moveMainNav, setMoveMainNav] = useState(
    new Animated.ValueXY({
      x:0,
      y:winHeight+20
    })
  )
  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(moveLogo, {
        toValue: {
          x: Dimensions.get('window').width - 70,
          y: -40
        },
        duration: 1500
      }),
      Animated.timing(moveMenu, {
        toValue: {
          x: 10,
          y: 10
        },
        duration: 1500
      }),
      Animated.timing(moveMainNav,{
        toValue:{
          x: 0,
          y: 70
        },
        duration:1500
      }),
      Animated.timing(moveButton, {
        toValue: {
          x: 400,
          y: winHeight / 2 - 60
        },
        duration: 500
      }),
      Animated.timing(scaleLogo, {
        toValue: 45,
        duration: 1500
      }),
      Animated.timing(scaleTitle, {
        toValue: 1.5,
        duration: 1500
      }),
      Animated.timing(moveTitle, {
        toValue: {
          x: winWidth / 2 - 50,
          y: -70
        },
        duration: 1500
      }),
      Animated.timing(moveScreen, {
        toValue: {
          x: Dimensions.get('window').width,
          y: 70
        },
        duration: 1500
      })
    ]).start();
  }

  const animatedMenuStyle = {
    top: moveMenu.y,
    left: moveMenu.x
  }
  const animatedLogoStyle = {
    top: moveLogo.y,
    left: moveLogo.x,
    width: scaleLogo,
    height: scaleLogo
  }

  const animatedTextStyle = {
    top: moveTitle.y,
    left: moveTitle.x,
  }

  const animatedSplashScreen = {
    width: moveScreen.x,
    height: moveScreen.y
  }

  const animatedMainNav = {
    left:moveMainNav.x,
    top:moveMainNav.y
  }
  const animatedButtonStyle = {
    top: moveButton.y,
    left: moveButton.x
  }
  /*
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;
  
    const moveLogo = useRef(new Animated.ValueXY({x:0,y:0})).current;
    const moveTitle = useRef(new Animated.ValueXY({x:0,y:0})).current;
  */
  /*
      useEffect(() => {
          setTimeout(() => {
              //Animated.parallel([
              Animated.sequence([
                  Animated.timing(startAnimation, {
                      //toValue: -Dimensions.get("window").height + 100,
                      toValue: 100,
                      //useNativeDriver: true,
                  }),
                       Animated.timing(scaleLogo, {
                            toValue: 0.35,
                            useNativeDriver: true,
                          }),
                          Animated.timing(scaleTitle, {
                            toValue: 0.8,
                            useNativeDriver: true,
                          }),
                          Animated.timing(moveLogo, {
                              toValue: {
                                  x:-(Dimensions.get("Window").width/2)+35,
                                  y:0
                              },
                              useNativeDriver: true,
                            }),
                            
              ]).start();
          }, 500);
      }, []);
  */
  return (
    <View style={{ backgroundColor: "#281cb1", flex:1, paddingTop: edges.top, marginTop: 0 }}>
      <Animated.View
        style={[{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "black",
          //alignItems: "center",
          //justifyContent: "center"
        }, animatedSplashScreen]}
      >
        <Animated.Image
          source={Menu}
          style={[styles.menuLogo, animatedMenuStyle]}
        />
        <Animated.Image
          source={Zalo}
          style={[styles.imageLogo, animatedLogoStyle]}
        ></Animated.Image>
        <Animated.Text
          style={[styles.text, animatedTextStyle]}
        >
          Pharmasi++
        </Animated.Text>
        <AnimatedPressable style={[styles.button, animatedButtonStyle]} onPress={startAnimation} >
          <Text style={{ color: "white" }}>Start </Text>
        </AnimatedPressable>

      </Animated.View>
      <Animated.View
        style={[styles.mainNavStyle,animatedMainNav]}
      >
        <MainCopy/>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainNavStyle: {
    position: 'absolute',
    top: winHeight-20,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#160b97",
    color: "white"
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingTop: 50,
    backgroundColor: "black",
    color: "white",
  },
  menuLogo: {
    width: 50,
    height: 50,
    top: -10,
    left: 0
  },
  imageLogo: {
    top: winHeight / 2 - 50,
    left: winWidth / 2 - 50,
    width: 100,
    height: 100
  },
  box: {
    width: 150,
    height: 50,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
  button: {
    top: winHeight / 2 - 60,
    left: winWidth / 2 - 100,
    width: 200,
    height: 45,
    margin: 0,
    padding: 0,
    borderRadius: 5,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    top: winHeight / 2 - 40,
    left: winWidth / 2 - 60,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  }
});
