import { StyleSheet,Image, Text, View, Dimensions  } from 'react-native'
import React, { useEffect, useState } from 'react'
import Swiper from 'react-native-swiper';

const Slider = () => {
    const [currentIndex , setCurrentIndex] = useState(0); 

    useEffect(()=> {
        const interval = setInterval(()=>{
            if(currentIndex < images.length - 1){
                setCurrentIndex(currentIndex + 1); 
            } 
            else {
              setCurrentIndex(0);
            }
          }, 3000); // Change timing here (in milliseconds)
      
          return () => clearInterval(interval);
        }, [currentIndex]);
      
        const images = [
             require("../../assets/Slider/ilts1.jpeg"),
             require("../../assets/Slider/ilts2.webp"),
             require("../../assets/iLakshya.jpg"),
             require("../../assets/image2.jpg"),
             require("../../assets/image3.jpg"),
             require("../../assets/image4.jpg"),
             require("../../assets/Sir.jpg")
        ]; 

        return (
            <View style={styles.container}>
              <Swiper
                style={styles.wrapper}
                loop={false}
                index={currentIndex}
                showsButtons={true}
                onIndexChanged={(index) => setCurrentIndex(index)}
              >
                {images.map((image, index) => (
                  <View style={styles.slide} key={index}>
                    <Image
                      source={image}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                       ))}
                       </Swiper>
                     </View>
                   );
                 };


const styles = StyleSheet.create({
container: { 
    flex: 1,
  },
  wrapper: {
    height:200
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width, // Use window width for responsive images
    height: 200, // Adjust height as per your requirement
  },
});
export default Slider
