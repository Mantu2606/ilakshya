import React from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

function ImagaPicker() {

    const [imageSource, setImageSource] = useState(null);

    const selectImage = () => {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        title: 'Select Image',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
  
      // You can also use as a promise without 'callback':
      const result = launchCamera(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri || response.assets?.[0]?.uri };
          setImageSource(source);
          uploadImage(response);
        }
      });
    };
  
    const uploadImage = async (image) => {
      try {
        const url = 'http://localhost:61038/api/uploadImage/1';
        const formData = new FormData();
        formData.append('file', {
          uri: image.uri,
          type: image.type,
          name: image.fileName,
        });
       console.log(image);
        axios({
          url: url,
          method: 'POST',
          data: formData,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(function (response) {
            console.log("response :", response);
          })
          .catch(function (error) {
            console.log("error from image :", error);
          });
      } catch (error) {
        console.error('Error uploading image: ', error);
      }
    };
  
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {imageSource && (
      <Image source={imageSource} style={{ width: 200, height: 200, marginBottom: 20 }} />
    )}
    <Button title="Select Image" onPress={selectImage} />
  </View>

  )
}

export default ImagaPicker
