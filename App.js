import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
//import axios from 'axios';
import { StyleSheet,
   Text,
   View, 
   Image, 
   TouchableWithoutFeedback, 
   TouchableOpacity, 
   Button, 
   Alert} from 'react-native';


export default function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

 

  
  
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Hello</Text>
      <TouchableOpacity onPress={()=>console.log("image tapped")}>
        <Image
         blurRadius={0}
         fadeDuration={1000}
          source={{uri: "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-1170x780.jpg"}}
        style={styles.image}/>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
    text:{
      fontSize: 40,
      color: 'Black'
    },
    image: {
     
      width: 200, // specify your desired width here
      height: 200, // specify your desired height here
      resizeMode: 'center'}
});
