import React, { Component } from 'react';
import { StyleSheet, Text, View , StatusBar } from 'react-native';
import Weather from "./Weather.js";

const API_KEY= "You must get an api_key."

export default class App extends Component {

  state = {
    isLoaded : false,
    error : null,
    temperature:null,
    name : null
  };

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error : error
        })
      }
    );
  }

  _getWeather= (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        isLoaded:true
      })
    })
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state
    console.log(`name: ${name}`);
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        { isLoaded ? ( 
        <Weather weatherName={name} temp={Math.ceil(temperature -273.15)} /> 
        ) : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>현재 위치와 날씨 정보 읽어들이는 중. . .</Text>
          <Text style={styles.loadingText}>heming weather app 작동 준비중 . . .</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },
  errorText:{
    color : "red",
    backgroundColor : "transparent",
    marginBottom: 40
  },
  loading: {
    flex:1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingRight: 25
  },
  loadingText: {
    fontSize:38,
    marginBottom : 24,
  }
});
