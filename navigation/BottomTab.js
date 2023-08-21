import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Paninda from '../screens/Paninda';
import ENegosyoo from '../screens/ENegosyoo';
import Manage from '../screens/Manage';
import Activities from '../screens/Activities';
import Accounts from '../screens/Account';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faStore } from '@fortawesome/free-solid-svg-icons/faStore';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons/faMobileScreen';
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#363636' },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <FontAwesomeIcon color={'#FFFFFF'} icon={faHouse} />
          ),
        }}
      />
      <Tab.Screen
        name="Paninda"
        component={Paninda}
        options={{
          tabBarLabel: 'Paninda',
          tabBarIcon: () => (
            <FontAwesomeIcon color={'#FFFFFF'} icon={faCartShopping} />
          ),
        }}
      />
      <Tab.Screen
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
      <Tab.Screen
        name="Manage"
        component={Manage}
        options={{
          tabBarLabel: 'Manage',
          tabBarIcon: () => (
            <FontAwesomeIcon color={'#FFFFFF'} icon={faStore} />
          ),
        }}
      />
      <Tab.Screen
        name="Activities"
        component={Activities}
        options={{
          tabBarLabel: 'Activities',
          tabBarIcon: () => (
            <FontAwesomeIcon color={'#FFFFFF'} icon={faListCheck} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Accounts}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => <FontAwesomeIcon color={'#FFFFFF'} icon={faUser} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
