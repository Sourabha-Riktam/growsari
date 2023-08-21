import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageComponent,
  ScrollView,
  TextInput,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bellregular from '../assets/Bellregular.png';
import SearchBar from '../assets/SearchBar.png';
import Smile from '../assets/Smile.png';
import CartIcon from '../assets/CartIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import House from '../assets/House.png';
import Cartshopping from '../assets/Cartshopping.png';
import Mobilescreen from '../assets/Mobilescreen.png';
import Store from '../assets/Store.png';
import Listcheck from '../assets/Listcheck.png';
import User from '../assets/User.png';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ENegosyo from './ENegosyoo';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faStore } from '@fortawesome/free-solid-svg-icons/faStore';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons/faMobileScreen';
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons/faFileInvoice';
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet';
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons/faBagShopping';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import Paninda1 from '../assets/Paninda1.png';
import Paninda2 from '../assets/Paninda2.png';
import Paninda3 from '../assets/Paninda3.png';
import Paninda4 from '../assets/Paninda4.png';
import Banner from '../assets/Banner.png';
import Carousel from 'react-native-snap-carousel';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';
import { Newphone } from '../assets/Newphone.png';
import { Newcashback } from '../assets/Newcashback.png';
import { Newgold } from '../assets/NewGold.png';
import { Newtransfer } from '../asssets/Newtransfer.png';
import { FlatList } from 'react-native';
import Walletbar from './Atoms/Walletbar';

const Tab = createBottomTabNavigator();

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
    icon: faTicket,
    title: 'SariClub Promos',
  },
  {
    icon: faStore,
    title: 'Manage Tindhan',
  },
  {
    icon: faBagShopping,
    title: 'Online Shopping',
  },
  {
    icon: faStar,
    title: 'Loyality Rewards',
  },
  {
    icon: faEllipsis,
    title: 'More',
  },
];

const images = [
  {
    image: require('../assets/GSpic.png'),
    title: 'Growsari',
  },
  {
    image: require('../assets/GSsale.png'),
    title: 'Promos',
  },
  {
    image: require('../assets/GSrice.png'),
    title: 'GS Bigas',
  },
  {
    image: require('../assets/GSshopee.png'),
    title: 'Shopping',
  },
  {
    image: require('../assets/GSnational.png'),
    title: 'Bookstore',
  },
  {
    image: require('../assets/GSalaska.png'),
    title: 'Alaska',
  },
  {
    image: require('../assets/GScocacola.png'),
    title: 'Coca Cola',
  },
  {
    image: require('../assets/GSviewmore.png'),
    title: 'View More',
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

const Adding = [
  {
    icon: faUserPlus,
    title: 'Add Suki',
  },
  {
    icon: faBookOpen,
    title: 'Add Suki',
  },
  {
    icon: faTicket,
    title: 'Add Suki',
  },
];

const Prize = [
  {
    image: require('../assets/Newphone.png'),
    title: 'Title',
    Subtext: 'Subtext',
  },
  {
    image: require('../assets/Newcashback.png'),
    title: 'Title',
    Subtext: 'Subtext',
  },
  {
    image: require('../assets/Newgold.png'),
    title: 'Title',
    Subtext: 'Subtext',
  },
  {
    image: require('../assets/Newtransfer.png'),
    title: 'Title',
    Subtext: 'Subtext',
  },
];

const renderItem = ({ item }) => (
  <>
    <View style={{ flex: 1, marginHorizontal: 25, alignItems: 'center' }}>
      {/* style={{ flexDirection: 'column', width: 50, height: 30, margin: 20, alignItems:'center' }} */}
      <FontAwesomeIcon
        style={{ fontSize: 30 }}
        color="#F8602D"
        icon={item.icon}
        size={25}
      />
      <Text>{item.title}</Text>
    </View>
  </>
);
const renderItems = ({ item }) => (
  <>
    <View style={{ flexDirection: 'column' }}>
      <Image
        style={{ width: 80, height: 80, margin: 10, padding: 30 }}
        source={item.image}
      />
      <Text style={{ margin: 10, paddingLeft: 15 }}>{item.title}</Text>
    </View>
  </>
);

const renderItems2 = ({ item }) => (
  <View style={{}}>
    <Image style={{ width: 250, height: 80 }} source={item.image} />
    <Image style={{ width: 250, height: 80 }} source={item.image} />
  </View>
);

const renderItems3 = ({ item }) => (
  <View style={{ flex: 1, marginHorizontal: 25, alignItems: 'center' }}>
    <FontAwesomeIcon
      style={{ fontSize: 30 }}
      color="#F8602D"
      icon={item.icon}
      size={25}
    />
    <Text style={styles.item}>{item.title}</Text>
  </View>
);

const renderItems4 = ({ item }) => (
  <View style={{ flex: 1, margin: 10 }}>
    <View>
      <Image style={{ width: 180, height: 180 }} source={item.image} />
    </View>
    <Text style={{ textAlign: 'left' }}>{item.title}</Text>
    <Text style={{}}>{item.Subtext}</Text>
  </View>
);
const Home = () => {
  return (
    <>
      <ScrollView>
        <View style={{ backgroundColor: 'black' }}>
          {/* <View style={{ padding: 20 }}>
            <View
              style={[
                styles.topbar,
                {
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  margin: 5,
                  backgroundColor: '#363636',
                },
              ]}>
              <View
                style={{
                  paddingHorizontal: 20,
                }}>
                <View
                  style={[
                    styles.topbar,
                    {
                      flexDirection: 'row',
                      alignSelf: 'left',
                    },
                  ]}>
                  <Text style={{ color: '#F8602D', paddingRight: 4 }}>
                    GrowCoins
                  </Text>
                  <View>
                    <FontAwesomeIcon color="#F8602D" icon={faCirclePlus} />
                  </View>
                </View>

                <Text style={{ textAlign: 'right' }}>3,456.78</Text>
              </View>
              <View style={{ flex: 2, flexDirection: 'column' }}>
                <View
                  style={[
                    styles.topbar,
                    {
                      flexDirection: 'row',
                      alignSelf: 'left',
                    },
                  ]}>
                  <Text style={{ color: '#00B7A8' }}>ELista</Text>
                  <FontAwesomeIcon color="#F5F5F5" icon={faChevronRight} />
                </View>

                <View
                  style={[
                    styles.topbar,
                    {
                      flexDirection: 'row',
                      alignItems: 'right',
                    },
                  ]}>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ textAlign: 'right' }}>3,456.78</Text>
                    <Text style={{ textAlign: 'right' }}>Paninda</Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ textAlign: 'right' }}>3,456.78</Text>
                    <Text style={{ textAlign: 'right' }}>ENegosyo</Text>
                  </View>
                </View>
              </View>
            </View>
          </View> */}

          <Walletbar />
          <FlatList
            numColumns={4}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.title}
          />

          <View>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 20,
                fontWeight: 'bold',
                padding: 15,
                marginLeft: 10,
              }}>
              Order na sa GS Direct Merchants
            </Text>
          </View>

          <FlatList numColumns={4} data={images} renderItem={renderItems} />

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
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Dagdag-Kita Vouchers
            </Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{ color: 'white', textAlign: 'right' }}>
                See all promos
              </Text>
              <FontAwesomeIcon color="#F8602D" icon={faChevronRight} />
            </View>
          </View>

          <View>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 15,
                fontWeight: 'bold',
                padding: 15,
                marginLeft: 10,
              }}>
              Paninda
            </Text>
          </View>
          <FlatList
            data={Voucher}
            horizontal={true}
            renderItem={renderItems2}
          />

          <View>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 15,
                fontWeight: 'bold',
                padding: 15,
                marginLeft: 10,
              }}>
              ENegosyo
            </Text>
          </View>

          <FlatList
            // numColumns={2}
            data={Voucher}
            horizontal={true}
            renderItem={renderItems2}
          />

          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <Image style={{ width: '100%', height: 155 }} source={Banner} />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 20,
              marginTop: 30,
              marginBottom: 40,
            }}>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Manage Tindahan
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{ textAlign: 'right' }}>View More</Text>
              <FontAwesomeIcon color="#F8602D" icon={faChevronRight} />
            </View>
          </View>

          <FlatList numColumns={3} data={Adding} renderItem={renderItems3} />

          <View>
            <Text
              style={{
                textAlign: 'left',
                fontSize: 23,
                fontWeight: 'bold',
                padding: 15,
                marginLeft: 10,
                marginTop: 15,
              }}>
              What's New?
            </Text>
          </View>

          <FlatList numColumns={2} data={Prize} renderItem={renderItems4} />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#363636',
    flexDirection: 'row',
  },

  topbar: {
    alignItems: 'center',
  },

  itemss: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
