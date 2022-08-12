import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Colors } from '../utils/Colors';
import { Fonts } from '../utils/Fonts';
import SelectImage from './Modal/SelectImage';

export default function Photo({}) {
  const [resourcePath, setResourcePath] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  var options = {
    maxWidth: 200,
    maxHeight: 200,
    includeBase64: true,
  };
 

  const selectFile = async () => {
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        try {
          let source = res.assets[0];
          setResourcePath(source);
        } catch (error) {
          console.log('imageError', error);
        }
      }
    });
    setModalVisible(!modalVisible)
  };

 

  // Launch Camera

 const cameraLaunch = () => {

    let options = {

      storageOptions: {

        skipBackup: true,

        path: 'images',

      },

    };

    launchCamera(options, (res) => {

      console.log('Response = ', res);

      if (res.didCancel) {

        console.log('User cancelled image picker');

      } else if (res.error) {

        console.log('ImagePicker Error: ', res.error);

      } else if (res.customButton) {

        console.log('User tapped custom button: ', res.customButton);

        alert(res.customButton);

      } else {

        try {
          const source = { uri: res.uri };
          console.log(source)
  
          console.log('response', JSON.stringify(res));
  
          setResourcePath({
            filePath: res,

            fileData: res.data,

            fileUri: res.uri,
          });
          
        } catch (error) {
          console.log('error',error)
          
        }

       

      }

    });

    setModalVisible(!modalVisible)
  }

  

  return (
    <View style={styles.plus}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <SelectImage 
          selectFile={()=> selectFile()}
          cameraLaunch={()=> cameraLaunch()}
          modalVisible={()=> setModalVisible(!modalVisible)}
          
           />
      </Modal>
      {resourcePath ? (
        <View>
         <AntDesign
         name="closecircleo"
         size={20}
         color={Colors.primary}
         style={styles.cross}
         onPress={()=> setResourcePath('')}
     />
        <Image
          source={{
            uri: `data: ${resourcePath?.type};base64,` + resourcePath?.base64,
          }}
          style={styles.img}
        />
        </View>
      ) : (
        <View>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#2A525B',
              justifyContent: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              marginVertical: 20,

              borderRadius: 10,
            }}>
            <AntDesign
              name="plus"
              size={24}
              style={styles.plusSign}
              onPress={() => setModalVisible(true)}
            />
          </View>
          <Text
            style={{
              fontFamily: Fonts.bold,
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 18,
            }}>
            Add image
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  plus: {
    marginHorizontal: 16,
    borderStyle: 'dotted',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: '10%',
  },
  plusSign: {
    color: Colors.white,
    textAlign: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
  },
cross:{
position:'absolute',
right:'20%',
top:2
}
  
});

