import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import React ,{useState} from 'react';
import {Colors} from '../../utils/Colors';
import { Fonts } from '../../utils/Fonts';
import { ImagePath } from '../../utils/imagePath';
import CampaignItem from '../../components/ListItem/CampaignItem';
import campaigns from '../../data///campaigns.json'
const SelectCompany = ({route, navigation}) => {
  const { fullData } = route.params;
  console.log(fullData)
  const [user, setUser] = useState([
    {
      id:1,
      image: ImagePath.user,
      name: 'Ali Ammar',
      points: 2130,
    },
    {
      id:2,
      image: ImagePath.user,
      name: 'Ali Ammar',
      points: 2130,
    },
    {
      id:3,
      image: ImagePath.user,
      name: 'Ali Ammar',
      points: 2130,
    },
    {
      id:4,
      image: ImagePath.user,
      name: 'Ali Ammar',
      points: 2130,
    },
    {
      id:5,
      image: ImagePath.user,
      name: 'Ali Ammar',
      points: 2130,
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <View
          style={{
            width: '50%',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 85,
              backgroundColor: '#D1E9EA',
              borderRadius: 5,
            }}>
            <Image
              source={fullData?.image}
              resizeMode="contain"
              style={{
                width: 108,
                height: 63,
                alignSelf: 'center',
                marginVertical: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.followBtn}>
          <Text style={styles.followBtnTxt}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TopVolunteers}>
          <Text
            style={{
              fontFamily: Fonts.bold,
              textAlign: 'center',
              fontSize: 24,
              marginTop: 29,
              color: Colors.black,
            }}>
            Top Volunteers
          </Text>
          <Text
            style={{
              color: '#707070',
              textAlign: 'center',
              fontFamily:Fonts.regular,
              marginHorizontal:30,
              marginTop:8,
            }}>
            The list of outstanding volunteers, who provided an excellent number
            of hours in volunteer work.
          </Text>
          <Image style={styles.avatarsecond} source={ImagePath.user} />
          <Text style={styles.username}> Bader Salim</Text>
          <Text style={styles.txt}>1200 Points</Text>
        </View>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'center',
          }}>
          {user.map((value, index) => {
            return (
              <View key={index} style={{
                width:'30%', 
                alignItems:'center',
                justifyContent:'center'
              }}>
                <Image style={styles.avatarsecond} source={value.image} />
                <Text style={styles.username}> {value.name}</Text>
                <Text style={styles.txt}>{value.points}Points</Text>
              </View>
            );
          })}
        </View>
        <View style={[styles.optionContainer,{
                marginTop:20
            }]}>
                <Text style={styles.optionTitle}>
                    {'VOLUTEER CAMPAIGNS'}
                </Text>
                <Text 
                onPress={() => {
                    navigation.navigate('VolunteerCampaign')
                }}
                style={styles.seeAll}>
                    {'See all'}
                </Text>
            </View>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginLeft:16,
                    paddingRight:16,
                    marginTop:16,
                    marginBottom:16
                }}
                horizontal
                data={campaigns}
                renderItem={({item}) => {
                    return <CampaignItem 
                        onPress={() => {
                            navigation.navigate('CampaignDetails')
                        }}
                        item={item}
                    />
                }}
            />
            <View style={[styles.optionContainer,{
                marginTop:16
            }]}>
                <Text style={styles.optionTitle}>
                    {'SUGGESTED CAMPAIGNS'}
                </Text>
                <Text 
                onPress={() => {
                    navigation.navigate('VolunteerCampaign')
                }}
                style={styles.seeAll}>
                    {'See all'}
                </Text>
            </View>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginLeft:16,
                    paddingRight:16,
                    marginTop:16,
                    marginBottom:16
                }}
                horizontal
                data={campaigns}
                renderItem={({item}) => {
                    return <CampaignItem 
                        onPress={() => {
                            navigation.navigate('CampaignDetails')
                        }}
                        item={item}
                    />
                }}
            />
        </ScrollView>
    </View>
  );
};

export default SelectCompany;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.appBackgroundColor,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 12,
  },
  followBtn: {
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    width: '30%',
    borderColor: '#0097A7',
  },
  followBtnTxt: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Fonts.bold,
    color: '#0097A7',
  },

  //Top Volunteer
  TopVolunteers: {
    alignItems: 'center',
  },
  username: {
    color: Colors.black,
    fontFamily: Fonts.semiBold,
    fontSize: 16,
  },
  txt: {
    color: '#0097A7',
    fontFamily: Fonts.regular,
    fontSize: 12,
    marginTop: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 63,
    marginBottom: 10,
  },
  avatarsecond: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: Colors.white,
    marginBottom: 10,
    marginTop: 16,
    borderWidth: 2,
  },
  //Camp
  optionContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  optionTitle: {
    fontFamily: Fonts.semiBold,
    fontSize: 16,
    color: Colors.black,
  },
  seeAll: {
    fontFamily: Fonts.regular,
    fontSize: 16,
    color: Colors.black,
  },
});
