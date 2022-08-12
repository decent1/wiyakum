import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Modal
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../utils/Colors';
import AuthHeading from '../../components/AuthHeading';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Fonts} from '../../utils/Fonts';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {ImagePath} from '../../utils/imagePath';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PieChart from 'react-native-pie-chart';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {commonStyles} from '../../utils/commonStyles';
import DatePicker from 'react-native-date-picker'
import Photo from '../../components/Photo';
import RegisteredSuccessFully from '../../components/Modal/RegisteredSuccessFully';
const NewCampaing = ({navigation}) => {
  const [discription, setDiscription] = useState();
  const [category, setCategory] = useState([
    {
      id: 1,
      name: 'medical',
      color: '#FA7979',
    },
    {
      id: 2,
      name: 'Societal',
      color: '#FFB84D',
    },
    {
      id: 3,
      name: 'Educational',
      color: '#9AC861',
    },
    ,
    {
      id: 4,
      name: 'Relief',
      color: '#FA7979',
    },
    {
      id: 5,
      name: 'Environmental',
      color: '#FFB84D',
    },
    {
      id: 6,
      name: 'Donate',
      color: '#9AC861',
    },
  ]);
  const [modalVisible_Success, setModalVisible_Success] = useState(false);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  var showDate = String(date).substring(4, 15);
  //time
  const [time, setTime] = useState(

  )
  const [openTime, setOpenTime] = useState(false)


  const [selectedMode, setSelectedMode] = useState('')

  console.log('time',time)
  console.log(date)



  function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
  }
  
  return (
    <View style={styles.container}>
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible_Success}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible_Success(!modalVisible_Success);
        }}>
          <RegisteredSuccessFully
          modalVisible_Success={()=>setModalVisible_Success(!modalVisible_Success)}
          />
          </Modal>
     
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 16,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons size={20} color={Colors.black} name="arrow-back" />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: Fonts.semiBold,
              fontSize: 20,
              marginLeft: 16,
            }}>
            {'New Campaign'}
          </Text>
        </View>
        <View style={styles.curve}>
  
          <Text style={styles.title}>Title</Text>
          <TextInput
            placeholder="Add Title"
            placeholderTextColor={'#6E6969'}
            keyboardType="default"
            style={styles.input}
          />
          <Text style={styles.title}>Category</Text>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginHorizontal: 12,
              marginTop: 16,
            }}>
            {category.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: '33%',
                  }}>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      height: 45,
                      borderRadius: 5,
                      marginRight: index % 2 == 0 ? 4 : 4,
                      marginLeft: index % 2 == 1 ? 4 : 4,
                      marginBottom: 8,
                      borderColor: item.color,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: item.color,
                        fontSize: 12,
                        fontFamily: Fonts.semiBold,
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <Text
            style={[
              styles.title,
              {
                marginTop: 8,
              },
            ]}>
            Date and Time
          </Text>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              if (selectedMode === 'date') {
                setDate(date);
              } else {
                var h = date.getHours();
                var m = date.getMinutes();
                setTime(tConvert(h + ':' + m));
              }
            }}
            onCancel={() => {
              setOpen(false);
            }}
            mode={selectedMode}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 16,
              alignItems: 'center',
              marginTop: 12,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => {
                setSelectedMode('date');
                setOpen(true);
              }}>
              <Fontisto style={styles.dateIcon} size={20} name="date" />
              <Text style={styles.date}>{showDate}</Text>
            </TouchableOpacity>
            <Entypo name="cross" size={20} style={styles.cross} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 16,
              marginTop: 12,
            }}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => {
                setSelectedMode('time');
                setOpen(true);
              }}>
              <Ionicons style={styles.dateIcon} size={20} name="time-outline" />
              <Text style={styles.date}>{time ? time : 'Select Time'}</Text>
            </TouchableOpacity>
            <Entypo name="cross" size={20} style={styles.cross} />
          </View>

          <Text style={styles.title}>Location</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 16,
              marginTop: 12,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Entypo
                name="location-pin"
                size={20}
                color={Colors.black}
                style={styles.dateIcon}
              />
              <Text style={styles.date}>Sohar, Swaihra </Text>
            </View>
          </View>
          <TextInput
            multiline={true}
            numberOfLines={6}
            onChangeText={text => setDiscription({text})}
            value={discription}
            style={styles.disc}
            placeholder={'Discription'}
            textAlignVertical={'top'}
          />
          <Photo />
          <TouchableOpacity
          onPress={() => setModalVisible_Success(true)}
          style={styles.submitBtn}>
            <Text
              style={{
                color: Colors.white,
                textAlign: 'center',
                fontSize: 18,
                fontFamily: Fonts.bold,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewCampaing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  AuthHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    marginHorizontal: 16,
    marginBottom: 30,
  },
  curve: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: Colors.white,
  },
  title: {
    color: '#004C54',
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    marginLeft: 16,
    marginTop: 16,
  },
  input: {
    color: Colors.black,
    // padding: 20,
    height:45,
    borderWidth: 1,
    marginHorizontal: 16,
    borderRadius: 5,
    marginTop: 10,
    borderColor: '#A8A8AD',
    fontFamily: Fonts.regular,
    paddingHorizontal:8,
  },
  date: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: Fonts.semiBold,
    marginLeft: 16,
    // marginTop: 20,
   
  },
  dateIcon: {
    // marginLeft: 19,
    // marginTop: 20,
    color: Colors.black,
  },
  cross: {
    // marginTop: 10,
    color: Colors.black,
  },
  disc: {
    borderWidth: 1,
    marginHorizontal: 16,
    borderRadius: 5,
    marginTop: 20,
    borderColor: '#A8A8AD',
    paddingLeft:10,
    fontSize:16,
    fontFamily:Fonts.regular,
    height:100,
  },
  plus: {
    marginHorizontal: 16,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    marginTop:16,
    borderColor: '#A8A8AD',
    // marginVertical: '10%',
  },
  plusSign: {
    color: Colors.white,
    textAlign: 'center',
    justifyContent: 'center',
  },
  submitBtn: {
     marginTop:32,
     marginBottom:16,
    backgroundColor: '#00B7B7',
    // marginHorizontal: '10%',
    marginHorizontal:16,
    borderRadius: 5,
    height:45,
    alignItems:'center',
    justifyContent:'center'
  },
});
