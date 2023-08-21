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
  Button,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { createStackNavigator } from '@react-navigation/stack';
import ENegosyo from './screens/ENegosyoo';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faStore } from '@fortawesome/free-solid-svg-icons/faStore';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons/faMobileScreen';
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck';
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons/faFileInvoice';
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet';
import { faTicket } from '@fortawesome/free-solid-svg-icons/faTicket';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons/faBagShopping';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons/faEllipsis';
import { navigationRef } from './navigation/RootNavigation';
import Home from './screens/Home';
import ENegosyoo from './screens/ENegosyoo';
import BottomTab from './navigation/BottomTab';

// function HomeScreen() {
//   return (
//     <>
//       <Home />
//     </>
//   );
// }

function PanindaScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}></View>
  );
}

// function ENegosyoScreen() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>

//     </View>
//   );
// }

function ManageScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}></View>
  );
}
function ActivitiesScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}></View>
  );
}
function AccountScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}></View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.topbar, { width: 80 }]}>
          <FontAwesomeIcon color="#F8602D" icon={faBell} size={25} />
          <Text style={styles.text}>Updates</Text>
        </View>

        <View
          style={[
            styles.topbar,
            {
              flexDirection: 'row',
              width: 200,
              height: 40,
              backgroundColor: '#494949',
              padding: 2,
            },
          ]}>
          <FontAwesomeIcon color="#FFFFFF" icon={faMagnifyingGlass} size={20} />
          <TextInput placeholder="Search all products" />
        </View>
        <View style={[styles.topbar, { width: 75 }]}>
          <FontAwesomeIcon color="#F8602D" icon={faComments} size={25} />
          <Text style={styles.text}>Chat</Text>
        </View>
        <View style={[styles.topbar, { width: 75 }]}>
          <FontAwesomeIcon color="#F8602D" icon={faCartShopping} size={25} />
          <Text style={styles.text}>My Cart</Text>
        </View>
      </View>

      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="bottomtab"
            component={BottomTab}
            options={{
              headerShown: false,
              tabBarLabel: 'bottomTab',
              tabBarIcon: () => (
                <FontAwesomeIcon color={'#FFFFFF'} icon={faMobileScreen} />
              ),
            }}
          />
          <Stack.Screen
            name="ENegosyoo"
            component={ENegosyoo}
            options={{
              headerShown: false,
              tabBarLabel: 'ENegosyoo',
              tabBarIcon: () => (
                <FontAwesomeIcon color={'#FFFFFF'} icon={faMobileScreen} />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#363636',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },

  update: {
    width: 55,
    height: 20,
    color: '#F8602D',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 12,
    letterSpacing: 0.25,
    textAlign: 'right',
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
