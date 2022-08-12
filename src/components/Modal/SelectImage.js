import { StyleSheet, Text, View , TouchableOpacity , TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import {Fonts}from '../../utils/Fonts'

const SelectImage = ({
selectFile,
cameraLaunch,
modalVisible
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => modalVisible()}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.selectImageTxt}>Select Image</Text>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => selectFile()}>
            <Text style={styles.textStyle}>Choose From Library</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => cameraLaunch()}>
            <Text style={styles.textStyle}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SelectImage

const styles = StyleSheet.create({
    //Modal
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    // alignItems: 'center',
    justifyContent: 'center',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  selectImageTxt:{
    fontFamily:Fonts.bold,
    fontSize:18
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin:10
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center"
  },
})