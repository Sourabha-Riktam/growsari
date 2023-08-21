import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  SectionList,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import Walletbar from '../screens/Atoms/Walletbar';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons/faMobileScreen';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons/faFileInvoice';
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons/faBagShopping';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons/faClockRotateLeft';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import Smart from '../assets/Smart.png';
import Meralco from '../assets/Meralco.png';
import Banner2 from '../assets/Banner2.png';
import Globe from '../assets/Globe.png';
import TM from '../assets/TM.png';
import Girl from '../assets/Girl.png';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { navigationRef } from '../navigation/RootNavigation';
import Buyloadimage from '../assets/Buyloadimage.png';
import Paybillsimage from '../assets/Paybillsimage.png';
import Ewalletcashinimage from '../assets/Ewalletcashinimage.png';
import Shopeeandlazadaimage from '../assets/Shopeeandlazadaimage.png';
import Gamingimage from '../assets/Gamingimage.png';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';

const DATA3 = [
  {
    title: 'SMART10',
    subtitle: 'Regular Load 10',
    icon: faChevronRight,
    amount: '₱10',
  },
  {
    title: 'SMART15',
    subtitle: 'Regular Load 15',
    icon: faChevronRight,
    amount: '₱15',
  },
  {
    title: 'SMART20',
    subtitle: 'Regular Load 20',
    icon: faChevronRight,
    amount: '₱20',
  },
  {
    title: 'SMART30',
    subtitle: 'Regular Load 30',
    icon: faChevronRight,
    amount: '₱30',
  },
  {
    title: 'SMART50',
    subtitle: 'Regular Load 50',
    icon: faChevronRight,
    amount: '₱50',
  },
  {
    title: 'SMART499',
    subtitle: 'Regular Load 499',
    icon: faChevronRight,
    amount: '₱499',
  },
];

const DATA2 = [
  {
    image: require('../assets/Buyloadimage.png'),
    title: 'Buy Load',
    subtitle: 'Buy and send load to your customers',
    icon: faChevronRight,
  },
  {
    image: require('../assets/Paybillsimage.png'),
    title: 'Pay Bills',
    subtitle: 'Pay bills for your customer',
    icon: faChevronRight,
  },
  {
    image: require('../assets/Ewalletcashinimage.png'),
    title: 'E-Wallet Cash-in',
    subtitle: 'Cash-in E-Wallets for your customers',
    icon: faChevronRight,
  },
  {
    image: require('../assets/Shopeeandlazadaimage.png'),
    title: 'Shopee and Lazada',
    subtitle: 'Order online from our E-Commerce partners',
    icon: faChevronRight,
  },
  {
    image: require('../assets/Gamingimage.png'),
    title: 'Gaming and E-Pins',
    subtitle: 'Sell gaming and subscription pins to your customers',
    icon: faChevronRight,
  },
];

const DATA1 = [
  {
    image: require('../assets/Smart.png'),
    title: 'Smart Prepaid',
    icon: faChevronRight,
  },
  {
    image: require('../assets/Meralco.png'),
    title: 'Meralco',
    icon: faChevronRight,
  },
  {
    image: require('../assets/Globe.png'),
    title: 'Globe',
    icon: faChevronRight,
  },
  {
    image: require('../assets/TM.png'),
    title: 'TM',
    icon: faChevronRight,
  },
  {
    image: require('../assets/TM.png'),
    title: 'Dito',
    icon: faChevronRight,
  },
  {
    image: require('../assets/TM.png'),
    title: 'Cherry Prepaid',
    icon: faChevronRight,
  },
  {
    image: require('../assets/TM.png'),
    title: 'Smart Bro Prepaid',
    icon: faChevronRight,
  },
  {
    image: require('../assets/TM.png'),
    title: 'PLDT Home Wifi',
    icon: faChevronRight,
  },
  {
    image: require('../assets/TM.png'),
    title: 'PLDT',
    icon: faChevronRight,
  },
  {
    image: require('../assets/TM.png'),
    title: 'Globe Home Prepaid Wifi',
    icon: faChevronRight,
  },
  {
    image: require('../assets/TM.png'),
    title: 'CIGNAL RELOAD',
    icon: faChevronRight,
  },
];

const Voucher = [
  {
    image: require('../assets/Paninda1.png'),
  },
  {
    image: require('../assets/Paninda1.png'),
  },
  {
    image: require('../assets/Paninda3.png'),
  },
  {
    image: require('../assets/Paninda1.png'),
  },
  {
    image: require('../assets/Paninda1.png'),
  },
  {
    image: require('../assets/Paninda1.png'),
  },
];

const DATA = [
  {
    icon: faMobileScreen,
    title: 'Load',
  },
  {
    icon: faFileInvoice,
    title: 'Bill pay',
  },
  {
    icon: faWallet,
    title: 'Cash-in',
  },

  {
    icon: faBagShopping,
    title: 'Online Shopping',
  },
];

const renderItem = ({ item }) => (
  <>
    <View
      style={{
        backgroundColor: '#363636',
        padding: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        padding: 20,
      }}>
      {/* <View> */}
      <FontAwesomeIcon
        style={{ fontSize: 30 }}
        color="#F8602D"
        icon={item.icon}
        size={25}
      />
      <Text>{item.title}</Text>
      {/* </View> */}
    </View>
  </>
);

const renderItems2 = ({ item }) => (
  <View>
    <Image style={{ width: 250, height: 80 }} source={item.image} />
    <Image style={{ width: 250, height: 80 }} source={item.image} />
    <Image style={{ width: 250, height: 80 }} source={item.image} />
  </View>
);

function ChooseLoad({ navigation }) {
  const renderItem6 = ({ item }) => (
    <>
      <TouchableOpacity
        // onPress={() => navigation.navigate('Enter mobile number')}
        // onPress={() =>
        //   navigationRef?.current?.navigate('ENegosyoo', {
        //     screen: 'Buy Load',
        //   })
        // }
        >
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            padding: 10,
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View>
              <Text
                style={{ marginLeft: 10, fontWeight: 'bold', fontSize: 15 }}>
                {item.title}
              </Text>
              <Text style={{ marginLeft: 10 }}>{item.subtitle}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{ color: '#00B7A8' }}>{item.amount}</Text>
            </View>
          </View>
          <View style={{ margin: 10 }}>
            <FontAwesomeIcon
              style={{ fontSize: 30 }}
              color="#FFFFFF"
              icon={item.icon}
              size={20}
            />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#363636',
          alignItems: 'center',
          paddingLeft: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon color="#F8602D" size={20} icon={faArrowLeft} />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            // margin: 10,
            padding: 20,
            fontSize: 20,
            fontWeight: 'bold',
            paddingLeft: 35,
          }}>
          Choose Load
        </Text>
      </View>
      <Text
        style={{
          margin: 20,
          fontSize: 15,
          fontWeight: 'bold',
          letterSpacing: 1,
        }}>
        Smart Prepaid Load Packages
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          backgroundColor: '#ffffff',
          // alignItems: 'center',
          // textAlign: 'center',
          margin: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
          }}>
          <FontAwesomeIcon color="black" icon={faMagnifyingGlass} size={20} />
          <TextInput
            placeholderTextColor="black"
            color="black"
            placeholder="Search by keyword or amount"
          />
        </View>
      </View>
      <Text style={{ marginLeft: 25, marginRight: 25, letterSpacing: 0.5 }}>
        Hanapin ang "G" icon para malaman ang maximum cashback!
      </Text>
      <FlatList numColums={2} data={DATA3} renderItem={renderItem6} />
    </View>
  );
}

function Entermobilenumber1({ route, navigation }) {
  // console.log(route.params.item);
  const { item } = route.params;
  const [isValidMobileNumber, setIsValidMobileNumber] = useState(false);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View>
          <View style={{ backgroundColor: 'black' }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#363636',
                alignItems: 'center',
                paddingLeft: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesomeIcon color="#F8602D" size={20} icon={faArrowLeft} />
              </TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 20,
                  fontSize: 20,
                  fontWeight: 'bold',
                  paddingLeft: 35,
                }}>
                Enter Mobile Number
              </Text>
            </View>
          </View>
        </View>
        <View backgroundColor="black">
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{ width: 85, height: 85, margin: 15 }}
              source={item.image}
            />
            <Text
              style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 20 }}>
              {item.title}
            </Text>
          </View>
          <Text style={{ margin: 5, paddingLeft: 5, fontWeight: 'bold' }}>
            Mobile Number
          </Text>
          <TextInput
            style={{ backgroundColor: '#ffffff', margin: 15, color: 'black' }}
            placeholder="Enter number here"
            placeholderTextColor="black"
            keyboardType="numeric"
            maxLength={10}
            onChangeText={text => {
              if (text.length == 10) {
                setIsValidMobileNumber(true);
              } else {
                setIsValidMobileNumber(false);
              }
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 100,
            marginBottom: 100,
            alignItems: 'center',
          }}>
          <Image
            style={{ width: 100, height: 100, marginLeft: 30 }}
            source={Girl}
          />
          <Text style={{ padding: 15, marginRight: 150 }}>
            I-save ang Suki details sa Account Section o pagkatapos mag-load
            para mapabilis ang susunod na transaksyon.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 55,
            backgroundColor: '#F8602D',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            opacity: isValidMobileNumber ? 1 : 0.5,
          }}>
          <TouchableOpacity
            disabled={!isValidMobileNumber}
            onPress={() => navigation.navigate('Choose Load')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 15,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Continue
              </Text>
              <FontAwesomeIcon color="#ffffff" icon={faArrowRight} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

function EnterMobileNumber({ navigation }) {
  const renderItem5 = ({ item }) => (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Enter mobile number', {
            item: item,
          })
        }>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            padding: 10,
            alignItems: 'center',
          }}>
          <Image style={{ width: 65, height: 65 }} source={item.image} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <Text style={{ marginLeft: 20 }}>{item.title}</Text>

            <FontAwesomeIcon
              style={{ fontSize: 30 }}
              color="#FFFFFF"
              icon={item.icon}
              size={20}
            />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <ScrollView>
      <View style={{ backgroundColor: 'black' }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#363636',
            alignItems: 'center',
            paddingLeft: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon color="#F8602D" size={20} icon={faArrowLeft} />
          </TouchableOpacity>
          <Text
            style={{
              textAlign: 'center',
              // margin: 10,
              padding: 20,
              fontSize: 20,
              fontWeight: 'bold',
              paddingLeft: 35,
            }}>
            Buy Load
          </Text>
        </View>
        <Walletbar />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
            marginTop: 30,
            marginBottom: 30,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            E-Negosyo Deals
          </Text>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{ color: '#F8602D', textAlign: 'right' }}>
              See all promos
            </Text>
            <FontAwesomeIcon color="#F8602D" icon={faChevronRight} />
          </View>
        </View>
        <FlatList
          // numColumns={2}
          data={Voucher}
          horizontal={true}
          renderItem={renderItems2}
        />

        <FlatList numColums={2} data={DATA1} renderItem={renderItem5} />
        {/* <Items /> */}
      </View>
    </ScrollView>
  );
}

function Homescreen({ navigation }) {
  const renderItem6 = ({ item }) => (
    <>
      <TouchableOpacity
        // onPress={() => navigation.navigate('Enter mobile number')}
        onPress={() =>
          navigationRef?.current?.navigate('ENegosyoo', {
            screen: 'Buy Load',
          })
        }>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            padding: 10,
            alignItems: 'center',
          }}>
          <Image style={{ width: 65, height: 65 }} source={item.image} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
            }}>
            <View style={{}}>
              <Text
                style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 15 }}>
                {item.title}
              </Text>
              <Text style={{ marginLeft: 20 }}>{item.subtitle}</Text>
            </View>
            <FontAwesomeIcon
              style={{ fontSize: 30 }}
              color="#FFFFFF"
              icon={item.icon}
              size={20}
            />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'black' }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#363636',
            flexDirection: 'row',
            paddingRight: 10,
          }}>
          <View>
            <Text style={{ padding: 20, fontSize: 20, fontWeight: 'bold' }}>
              E-Negosyo
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View style={{ alignItems: 'center', width: 65 }}>
              <FontAwesomeIcon color="#F8602D" icon={faBell} size={25} />
              <Text style={styles.text}>Updates</Text>
            </View>
            <View style={{ alignItems: 'center', width: 65 }}>
              <FontAwesomeIcon color="#F8602D" icon={faComments} size={25} />
              <Text style={styles.text}>Chat</Text>
            </View>
            <View style={{ alignItems: 'center', width: 65 }}>
              <FontAwesomeIcon
                color="#F8602D"
                icon={faClockRotateLeft}
                size={25}
              />
              <Text style={styles.text}>My Cart</Text>
            </View>
          </View>
        </View>
        <Walletbar />
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            marginBottom: 15,
            fontSize: 15,
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
          Featured Services
        </Text>
        <FlatList
          numColumns={4}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.title}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
            marginTop: 30,
            marginBottom: 30,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            E-Negosyo Deals
          </Text>

          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{ color: '#F8602D', textAlign: 'right' }}>
              See all promos
            </Text>
            <FontAwesomeIcon color="#F8602D" icon={faChevronRight} />
          </View>
        </View>
        <FlatList data={Voucher} horizontal={true} renderItem={renderItems2} />
        <Image
          style={{ width: '100', height: 220, marginTop: 10, marginBottom: 20 }}
          source={Banner2}
        />
        <Text
          style={{
            margin: 20,
            fontSize: 15,
            fontWeight: 'bold',
            letterSpacing: 1,
          }}>
          All Services
        </Text>
        <FlatList numColums={2} data={DATA2} renderItem={renderItem6} />
      </View>
      {/* <View
        style={{
          justifyContent: 'space-between',
          padding: 20,
          alignItems: 'center',
        }}>
        <Button
          title="Press"
          onPress={() =>
            navigationRef?.current?.navigate('ENegosyoo', {
              screen: 'Buy Load',
            })
          }
        />
      </View> */}
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function ENegosyoo() {
  return (
    <>
      <Stack.Navigator initialRouteName="E-Negosyoo">
        <Stack.Screen
          name="E-Negosyoo"
          component={Homescreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Buy Load"
          component={EnterMobileNumber}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Enter mobile number"
          component={Entermobilenumber1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Choose Load"
          component={ChooseLoad}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </>
  );
}

export default ENegosyoo;

const styles = StyleSheet.create({
  container: {},
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
