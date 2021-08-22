import React, { useState, useRef, useEffect } from "react";
import { Slider } from "react-native";
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  StatusBar,
  Text,
} from "react-native";
import { useDispatch } from "react-redux";
import * as CheckFirstTimeAction from "../../Redux/Reducers/checkFirstTimeActions";
const { height, width } = Dimensions.get("window");
//import { useNavigation } from '@react-navigation/native';

import slides from "../../db/IntroSlides";
//Components
import Slide from "../IntroScreen/Slide";
import Pagination from "../IntroScreen/Pagination";
import SubSlide from "../IntroScreen/SubSlide";
import Ticker from "../IntroScreen/TickerText";
//import  * as RootNavigation from "../RootNavigation";

export default function IntroScreen({ navigation }) {
  //const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollClick = useRef(null);
  const unmounted = useRef(false);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  const backgroundColor = scrollX.interpolate({
    inputRange: [0, width, width * 2, width * 3],
    outputRange: ["#3d00ad", "#77009c", "#850073", "#3d00ad"],
    extrapolate: "clamp",
  });
  const backgroundColor1 = scrollX.interpolate({
    inputRange: [0, width, width * 2, width * 3],
    outputRange: ["green", "yellow", "blue", "red"],
    extrapolate: "clamp",
  });
  const textTranslate = scrollX.interpolate({
    inputRange: [0, width, width * 2, width * 3],
    outputRange: [0, width * -1, width * -2, width * -3],
    extrapolate: "clamp",
  });

  const EnterApp = async () => {
    setLoading(true);
    await dispatch(CheckFirstTimeAction.firstOpen());
    console.log("Enter app")
    //props.setValue("FirstTimeLogin")
    //console.log(navigation.dispatch)
    try{
      //navigation.navigate("Drawer",{screen: "Welcome1"})
      //navigation.navigate("Drawer1")
    }catch(e){
      alert("app crashed, open app again")
    }
    //RootNavigation.navigate("Welcome1")
    if (!unmounted.current) {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Ticker scrollX={scrollX}/>
        <Animated.ScrollView
          ref={scrollClick}
          horizontal
          snapToInterval={width}
          scrollTo={{ x: scrollClick, animated: true }}
          decelerationRate="normal"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          {slides.map((slide) => {
            return <Slide key={slide.id} imageUrl={slide.imageUrl} />;
          })}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Pagination slides={slides} scrollX={scrollX} />
        <Animated.View
          style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
        ></Animated.View>
        <Animated.View style={styles.footerContent}>
          <Animated.View
            style={[{
              flexDirection: "row",
              width: width * slides.length,
              transform: [
                {
                  translateX: textTranslate,
                },
              ] 
            }
            ]}
          >
            {slides.map(({ subtitle, des, color }, index) => {
              return (
                  <SubSlide
                    key={subtitle}
                    last={index === slides.length - 1}
                    EnterApp={EnterApp}
                    subtitle={subtitle}
                    des={des}
                    scrollX={scrollX}
                    tcolor={color}
                    NextSlide={() => {
                      if (scrollClick.current) {
                        scrollClick.current.scrollTo({
                          x: width * (index + 1)
                        });
                      }
                    }}
                  />
              );
            })}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  slider: {
    paddingTop: StatusBar.currentHeight,
    height: 0.61 * height,
    //borderBottomEndRadius:75
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flexDirection: "row",
    backgroundColor: "black",
  },
});
