import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors:["#A9F5F2","#00BFFF",'#00C6FB',"#005BEA"],
    title : "비가 온다. 쥬륵 쥬륵",
    subtitle : "더 자세한 정보를 원한다면 밖에 나가봐",
    icon : 'weather-rainy'
  },
  Clear: {
    colors:['#DF0101','#FF4000','#FF0000','#FE2E2E','#FA5858','#F78181','#F5A9A9'],
    title : "대프리카가 뭔지 알아?",
    subtitle : "대한민국 + 아프리카 = 대프리카",
    icon : 'weather-sunny'   
  },
  Thunderstorm: {
    colors:['#00ECBC',"#007ADF"],
    title : "천둥의 신 - 토르 강림",
    subtitle : "오늘 대개봉",
    icon : 'weather-lightning-rainy'   
  },
  Clouds: {
    colors:['red','orange','yellow','limegreen','skyblue','darkblue','violet'],
    title : "구름이 좋은 사람은.",
    subtitle : "운이 좋은 사람이다.",
    icon : 'weather-partlycloudy'   
  },
  Snow: {
    colors:['#7DE2FC',"#B9B6E5"],
    title : "겨울왕국이다.",
    subtitle : "Elsa? Do you want to build a snowman? .",
    icon : 'weather-snowy'   
  },
  Drizzle: {
    colors:['#89F7FE',"#66A6FF"],
    title : "보슬비가 내린다.",
    subtitle : "가랑비에 옷 젖는 줄 모른다",
    icon : 'weather-rainy'   
  },
  Haze: {
    colors:['#89F7FE',"#66A6FF"],
    title : "안개낀 날씨",
    subtitle : "아무것도 안보이지? 그게 너의 미래야",
    icon : 'weather-fog'   
  },
  Mist: {
    colors:['gray','lime'],
    title : "습하고 안개꼈다.",
    subtitle : "개굴 개굴 개굴 개굴 개굴 ",
    icon : 'weather-fog'   
  }
}


function Weather ({ weatherName, temp }) {
  return(
    <LinearGradient 
      colors={weatherCases[weatherName].colors} 
      style={styles.container} 
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons 
          color="black" 
          size={288}
          name={weatherCases[weatherName].icon}/>
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  )
}

Weather.propTypes ={
  temp : PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
}

export default Weather;


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  temp: {
    fontSize : 180,
    backgroundColor : "transparent",
    color: "black",
    marginTop: 10
  },
  upper: {
    flex:1,
    alignItems:"center",
    justifyContent: "center",
    backgroundColor:"transparent"
  },
  lower: {
    flex:1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft : 25
  },
  title: {
    fontSize : 76,
    backgroundColor : "transparent",
    color:"white",
    marginBottom:0,
    fontWeight: "300"
  },
  subtitle: {
    fontSize : 48,
    backgroundColor : "transparent",
    color:"white",
    marginBottom:450  
  }
});