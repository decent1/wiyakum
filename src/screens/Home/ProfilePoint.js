import { StyleSheet, Text, View, TouchableOpacity, Image ,ScrollView} from 'react-native'
import React,{useState} from 'react'
import { Colors } from '../../utils/Colors'
import AuthHeading from '../../components/AuthHeading'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Fonts } from '../../utils/Fonts'
import Entypo from 'react-native-vector-icons/Entypo'
import { ImagePath } from '../../utils/imagePath'
import Feather from 'react-native-vector-icons/Feather'
import PieChart from 'react-native-pie-chart';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { commonStyles } from '../../utils/commonStyles'
import ButtonSmall from '../../components/Button/ButtonSmall'
const ProfilePoint = ({navigation}) => {
    const widthAndHeight = 160
    const series = [275, 321, 200]
    const sliceColor = ['red','yellow','green']
    const [selectedView, setSelectedView] = useState('Point')
  return (
    <View style={styles.container}>
      <ScrollView style={{flex:1}}>
        <View style={styles.AuthHeading}>
          <AuthHeading
            title={'Hello, Jaweed'}
            style={{
              fontFamily: Fonts.semiBold,
              fontSize: 28,
            }}
          />
          <TouchableOpacity 
          onPress={() => {
            // navigation.navigate('NewCampaing')
            navigation.navigate('MyCampaign')
          }}
          style={{
            height:30,
            width: 120,
            borderRadius:10,
            backgroundColor: Colors.primary,
            alignItems:'center',
            justifyContent:'center'
          }}>
            <Text style={{
              fontFamily:Fonts.semiBold,
              color:'white',
              fontSize:12,
            }}>{'My Campaigns'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.curve}>
          <TouchableOpacity style={styles.row}>
            <Image source={ImagePath.avatar} style={styles.pic} />
            <View style={{
              marginLeft:16
            }}>
              <Text style={[styles.nameTxt,{
                fontFamily:Fonts.semiBold,
              }]}>{'Jaweed Shuja'}</Text>
                <Text style={styles.company}>{'Company: Nama'}</Text>
                <Text style={styles.company}>{'work location: Sohar'}</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{ alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.company}>{'Campaign'}</Text>
                    <Text style={[styles.company, {textAlign: 'center',fontFamily:Fonts.semiBold, color:Colors.primary}]}>
                      {'4'}
                    </Text>
                  </View>
                  <View style={{flex:1, alignItems:'center', justifyContent:'center', }}>
                    <Text style={styles.company}>{'Hours'}</Text>
                    <Text style={[styles.company, {textAlign: 'center', fontFamily:Fonts.semiBold, color:Colors.primary}]}>
                      {'24'}
                    </Text>
                  </View>
                </View>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 32}}>
            <TouchableOpacity
              onPress={() => setSelectedView('Point')}
              activeOpacity={0.8}
              style={[styles.box, {backgroundColor: selectedView == 'Point' ? '#97C139' : 'whitesmoke'}]}>
              <Image source={ImagePath.token} style={styles.token} />
              <Text style={[styles.txt,{
                color: selectedView == 'Point' ? Colors.white : Colors.black
              }]}>Points</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedView('myCompany')}
              activeOpacity={0.8}
              style={[styles.box, {backgroundColor: selectedView == 'myCompany' ? '#97C139' : 'whitesmoke'}]}>
              <Feather name="calendar" size={40} style={styles.calendar} />
              <Text style={[styles.txt, {color: selectedView == 'myCompany' ? Colors.white : Colors.black, fontSize:14, marginHorizontal:15}]}>
                My Companies
              </Text>
            </TouchableOpacity>
          </View>

          {selectedView === 'Point' ? (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                doughnut={true}
                coverRadius={0.9}
                coverFill={Colors.white}
                style={{alignSelf: 'center', marginVertical: '10%'}}
              />
              <View style={styles.pieTxt}>
                <Image
                  source={ImagePath.token}
                  style={{
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
                <Text style={styles.Ptxt}>{'150'}</Text>
                <Text
                  style={{
                    textAlign: 'center',
                    color: Colors.black,
                    fontFamily: Fonts.semiBold,
                    fontSize: 16,
                  }}>
                  Points
                </Text>
              </View>
            </View>
          ) : selectedView === 'myCompany' ? (
            <View style={styles.myCompanies}>
              <Text style={styles.myCompaniesTxt}>Upcoming Campaigns </Text>
              <View style={styles.box2}>
                <Image style={styles.upcomingPic} source={''} />
                <View style={styles.boxContent}>
                  <View style={styles.description}>
                    <Text
                      style={{
                        marginRight: 8,
                        fontFamily: Fonts.semiBold,
                        color:Colors.primary
                      }}>
                      “Plant 1000 Trees”
                    </Text>
                    <Text style={{
                      fontFamily:Fonts.regular,
                      fontSize:12
                    }}>12-12-2022 </Text>
                  </View>
                  <View style={styles.description}>
                    <Image source={ImagePath.token} style={styles.mblTxt} />
                    <Text style={{
                      fontFamily:Fonts.regular,
                      fontSize:12,
                      color:Colors.black,
                      marginLeft:8,
                    }}>20 Points</Text>
                  </View>
                  <View style={styles.description}>
                    <Ionicons name="people" size={18} color={Colors.black} />
                    <Text
                      style={{
                        marginRight: 15,
                        fontFamily:Fonts.regular,
                        marginLeft:4,
                      }}>
                      12 Of 14
                    </Text>
                    <Entypo
                      name="location-pin"
                      size={18}
                      color={Colors.black}
                    />
                    <Text style={{
                      fontFamily:Fonts.regular,
                      marginLeft:4
                    }}>Sohar, Swaihra </Text>
                  </View>
                </View>
              </View>
              <View style={styles.box2}>
                <Image style={styles.upcomingPic} source={''} />
                <View style={styles.boxContent}>
                  <View style={styles.description}>
                    <Text
                      style={{
                        marginRight: 8,
                        fontFamily: Fonts.semiBold,
                        color:Colors.primary
                      }}>
                      “Plant 1000 Trees”
                    </Text>
                    <Text style={{
                      fontFamily:Fonts.regular,
                      fontSize:12
                    }}>12-12-2022 </Text>
                  </View>
                  <View style={styles.description}>
                    <Image source={ImagePath.token} style={styles.mblTxt} />
                    <Text style={{
                      fontFamily:Fonts.regular,
                      fontSize:12,
                      color:Colors.black,
                      marginLeft:8,
                    }}>20 Points</Text>
                  </View>
                  <View style={styles.description}>
                    <Ionicons name="people" size={18} color={Colors.black} />
                    <Text
                      style={{
                        marginRight: 15,
                        fontFamily:Fonts.regular,
                        marginLeft:4,
                      }}>
                      12 Of 14
                    </Text>
                    <Entypo
                      name="location-pin"
                      size={18}
                      color={Colors.black}
                    />
                    <Text style={{
                      fontFamily:Fonts.regular,
                      marginLeft:4
                    }}>Sohar, Swaihra </Text>
                  </View>
                </View>
              </View>
              <Text style={styles.myCompaniesTxt}>Previous Campaigns </Text>
              <View style={[styles.box2, {marginBottom: 20}]}>
                <Image style={styles.upcomingPic} source={''} />
                <View style={styles.boxContent}>
                  <View style={styles.description}>
                    <Text
                      style={{
                        marginRight: 8,
                        fontFamily: Fonts.semiBold,
                        color:Colors.primary
                      }}>
                      “Plant 1000 Trees”
                    </Text>
                    <Text style={{
                      fontFamily:Fonts.regular,
                      fontSize:12
                    }}>12-12-2022 </Text>
                  </View>
                  <View style={styles.description}>
                    <Image source={ImagePath.token} style={styles.mblTxt} />
                    <Text style={{
                      fontFamily:Fonts.regular,
                      fontSize:12,
                      color:Colors.black,
                      marginLeft:8,
                    }}>20 Points</Text>
                  </View>
                  <View style={styles.description}>
                    <Ionicons name="people" size={18} color={Colors.black} />
                    <Text
                      style={{
                        marginRight: 15,
                        fontFamily:Fonts.regular,
                        marginLeft:4,
                      }}>
                      12 Of 14
                    </Text>
                    <Entypo
                      name="location-pin"
                      size={18}
                      color={Colors.black}
                    />
                    <Text style={{
                      fontFamily:Fonts.regular,
                      marginLeft:4
                    }}>Sohar, Swaihra </Text>
                  </View>
                </View>
              </View>
            </View>
          ) : null}
        </View>

        <View style={{
          flexDirection:'row',
          marginHorizontal:16,
          marginTop:32,
          alignItems:'center',
          justifyContent:'space-between',
        }}>
          <ButtonSmall 
            onPress={() => {
              navigation.navigate('Profile')
            }}
            style={{
              width:'45%'
            }}
            title={'Top Volunteer'}
          />
          <ButtonSmall 
            onPress={() => {
              navigation.navigate('ContactUs')
            }}
          style={{
            width:'45%'
          }}
            title={'Contact Us'}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default ProfilePoint

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    padding: 10,
    marginTop: 20,
    marginHorizontal: 20,
  },
  pic: {
    width: 75,
    height: 75,
  },
  nameContainer: {
    // flexDirection: 'row',
  },
  nameTxt: {
    color: '#222',
    fontSize: 18,
    flex: 1,
  },
  mblTxt: {
    width: 20,
    height: 20,
  },

  company: {
    fontSize: 14,
    fontFamily:Fonts.regular,
    marginTop:4,
    color:Colors.black
  },
  box: {
    width: 112,
    height: 114,
    borderRadius: 20,
    marginLeft: 33,
  },
  token: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  calendar: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  txt: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: Fonts.bold,
    fontSize: 16,
    marginTop: 8,
  },
  pieTxt: {
    position: 'absolute',
  },
  Ptxt: {
    color: '#00B7B7',
    fontFamily: Fonts.bold,
    textAlign: 'center',
    fontSize: 24,
  },
  // //Mycompaines CSs
  myCompanies: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop:20,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    marginBottom:20,
    ...commonStyles.shadow
  },
  upcomingPic: {
    width: 98,
    height: 74,
    backgroundColor: '#BEBEBE',
    borderRadius: 14,
    marginTop: 14,
  },
  myCompaniesTxt: {
    fontSize: 17,
    fontFamily: Fonts.semiBold,
    color: '#1A535C',
    marginTop:16,
    paddingLeft: 16,
  },

  ///

  box2: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth:1,
    borderBottomColor:'#EDEEEF',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    paddingBottom:16
  },
  boxContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
    marginTop:15,
  },
  title: {
    fontSize: 12,
    fontFamily: Fonts.bold,
    color: Colors.black,
    flex:1
  },
  time: {
    flex: 1,
    marginLeft: 20,
  },
  description:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:4
},
});