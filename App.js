import React, {createContext, useCallback, useEffect, useState} from "react";
import {Text, View, StyleSheet, TouchableOpacity, Modal, ScrollView, Image, SafeAreaView} from "react-native";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import CartScreen from "./components/CartScreen/CartScreen";
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, AntDesign, EvilIcons, Feather, Octicons} from "@expo/vector-icons";
import {NavigationContainer} from "@react-navigation/native";
import uuid from 'react-native-uuid';
import {DESCRIPTIONS} from "./data/DESCRIPTIONS";

const Tab = createBottomTabNavigator();


async function loadApplication() {
  await Font.loadAsync({
    'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
    'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'i-light': require('./assets/fonts/Inter-Light.ttf'),
    'i-semiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'i-thin': require('./assets/fonts/Inter-Thin.ttf'),
  });
}

export const ProductsContext = React.createContext(1);

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const [list, setList] = useState([
    {
      title: 'APPLE IPHONE 13 PRO 128GB',
      price: '30.000',
      price2: 30000,
      img: require('./assets/productsImg/13pro.png'),
      id: 1,
      quantity: 0
    },
    {
      title: 'APPLE IPHONE 13 512GB',
      price: '25.000',
      price2: 25000,
      img: require('./assets/productsImg/Iphone13_512.png'),
      id: 2,
      quantity: 0
    },
    {
      title: 'APPLE IPHONE 13 MINI 512GB',
      price: '20.000',
      price2: 20000,
      img: require('./assets/productsImg/Iphone13Mini_512.png'),
      id: 3,
      quantity: 0
    },
    {
      title: 'APPLE MACBOOK PRO M1 ',
      price: '45.000',
      price2: 45000,
      img: require('./assets/productsImg/m1Pro.png'),
      id: 4,
      quantity: 0
    },
    {
      title: 'APPLE MACBOOK PRO M2 ',
      price: '60.000',
      price2: 60000,
      img: require('./assets/productsImg/m2Pro.png'),
      id: 5,
      quantity: 0
    },
    {
      title: 'APPLE MACBOOK AIR M1 2020',
      price: '50.000',
      price2: 50000,
      img: require('./assets/productsImg/m1Air.png'),
      id: 6,
      quantity: 0
    },
    {
      title: 'APPLE IMAC M1 24"',
      price: '60.000',
      price2: 60000,
      img: require('./assets/productsImg/ImacM1.png'),
      id: 7,
      quantity: 0
    },
    {
      title: 'APPLE MAGIC KEYBOARD',
      price: '2.000',
      price2: 2000,
      img: require('./assets/productsImg/keyboard.png'),
      id: 8,
      quantity: 0
    },
    {
      title: 'APPLE IPAD PRO 12.9"',
      price: '35.000',
      price2: 35000,
      img: require('./assets/productsImg/IpadPro12.9.png'),
      id: 9,
      quantity: 0
    },
    {
      title: 'APPLE IPAD AIR 5TH GEN 10.9"',
      price: '32.000',
      price2: 32000,
      img: require('./assets/productsImg/IpadAir10.9.png'),
      id: 10,
      quantity: 0
    },
    {
      title: 'APPLE IPAD 10.2"',
      price: '25.000',
      price2: 25000,
      img: require('./assets/productsImg/Ipad10.2.png'),
      id: 11,
      quantity: 0
    },
    {
      title: 'APPLE WATCH SERIES 7',
      price: '7.000',
      price2: 7000,
      img: require('./assets/productsImg/watch7.png'),
      id: 12,
      quantity: 0
    },
    {
      title: 'APPLE WATCH SERIES 3',
      price: '5.000',
      price2: 5000,
      img: require('./assets/productsImg/watch3.png'),
      id: 13,
      quantity: 0
    },
    {
      title: 'APPLE AIRPODS PRO',
      price: '7.000',
      price2: 7000,
      img: require('./assets/productsImg/airpodsPro.png'),
      id: 14,
      quantity: 0
    },
    {
      title: 'APPLE AIRPODS',
      price: '4.000',
      price2: 4000,
      img: require('./assets/productsImg/airpods.png'),
      id: 15,
      quantity: 0
    }]);

  const [searchResult, setSearchResult] = useState('');

  const [searchedItems, setSearchedItems] = useState(list);


  const search = ({text}) => {
    searchResult(text.toLowerCase())
    console.log(searchResult)
    if (searchResult === '') {
      setSearchedItems(list)
    } else {
      setSearchedItems(list.filter(item => {
          return (
            item.title.toLowerCase().includes(searchResult)
          )
        })
      )
    }
  }

  const [fullPrice, setFullPrice] = useState(0);

  const [cartList, setCartList] = useState([]);

  const addToCartList = (item) => {
    setCartList((prevCartList) => [
      ...prevCartList,
      {title: item.title, price: item.price, img: item.img, id: uuid.v1()}
    ])
    setFullPrice((prevFullPrice) => prevFullPrice += item.price2)
  };

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState(list)

  const data = {
    list,
    addToCartList,
    cartList,
    setCartList,
    fullPrice,
    setFullPrice,
    search,
    searchedItems,
    isVisibleModal,
    setIsVisibleModal,
    setSelectedItem,
    selectedItem,
    searchResult,
    setSearchResult,
    setSearchedItems,
  }

  return isReady ? <NavigationContainer>
      <ProductsContext.Provider value={data}>
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            tabBarActiveTintColor: '#000000',
            headerShown: false,
            tabBarHideOnKeyboard: true,
          }}
        >
          <Tab.Screen
            name="Feed"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Главная',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size}/>
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={CartScreen}
            options={{
              tabBarLabel: 'Корзина',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="basket-outline" size={size} color={color}/>
              ),
              tabBarBadge: cartList.length,
            }}
          />
        </Tab.Navigator>

        <Modal
          visible={isVisibleModal}
          style={styles.mainBox}
          animationType={'slide'}
        >

          <SafeAreaView>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                onPress={() => setIsVisibleModal(!isVisibleModal)}
                style={{margin: 10}}
              >
                <AntDesign name="left" size={24} color="black"/>
              </TouchableOpacity>
              <View style={styles.titleBox}>
                <Text style={styles.title}>{selectedItem[0].title}</Text>
              </View>

            </View>


            <ScrollView>

              <Image
                source={selectedItem[0].img}
                style={styles.img}
              />

              <Text style={styles.price}>{selectedItem[0].price}₴</Text>

              <View style={{width: '95%', height: 1, backgroundColor: '#000', alignSelf: 'center'}}></View>

              <View style={{
                flexDirection: 'row',
                height: 50,
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 5,
              }}>

                <View style={{margin: 4, marginLeft: 10}}>
                  <Octicons name="location" size={30} color="black"/>
                </View>

                <View>
                  <Text style={styles.title}>Самовывоз: </Text>
                  <Text style={{color: '#9B9B9B'}}>Киев</Text>
                </View>

              </View>

              <View style={{
                flexDirection: 'row',
                height: 50,
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBottom: 5,
              }}>

                <View style={{margin: 2, marginLeft: 10}}>
                  <Feather name="package" size={30} color="black"/>
                </View>


                <View>
                  <Text style={[styles.title, {textAlign: 'left'}]}>Доставка: </Text>
                  <Text style={{color: '#9B9B9B'}}>Новая почта, Meest, Укрпочта</Text>
                </View>

              </View>

              <View style={{width: '95%', height: 1, backgroundColor: '#000', alignSelf: 'center'}}></View>

              <View style={{margin: 10, marginBottom: 50}}>
                <Text>{DESCRIPTIONS[0].description}</Text>
              </View>

            </ScrollView>
          </SafeAreaView>

        </Modal>

      </ProductsContext.Provider>

    </NavigationContainer>
    : <AppLoading startAsync={loadApplication}
                  onError={err => console.log(err)}
                  onFinish={() => setIsReady(true)}/>
}

const styles = StyleSheet.create({
  img: {
    width: 400,
    height: 400,
  },
  titleBox: {
    width: '95%',
    padding: 10,
  },
  title: {
    fontFamily: 'i-semiBold',
    fontSize: 17,
    textAlign: 'center',
  },
  price: {
    // fontFamily: 'mt-light',
    fontSize: 20,
    margin: 10,
  }
})
