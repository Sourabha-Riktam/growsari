import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
const Walletbar = () => {
    return (
        <View style={{ padding: 20 }}>
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
                        <Text style={{ color: '#F8602D', paddingRight: 4 }}>GrowCoins</Text>
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
        </View>
    );
};

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

export default Walletbar;