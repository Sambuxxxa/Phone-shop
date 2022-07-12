import React, {useContext} from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View} from "react-native";
import Header from "./Header";
import ProductItem from "./ProductItem";
import {ProductsContext} from "../../App";
import ModalWindow from "./ModalWindow";

export default function HomeScreen() {

  const data = useContext(ProductsContext);

  return (
    <SafeAreaView style={styles.container}>

      <Header/>

      <FlatList
        data={data.searchedItems}
        renderItem={({item}) => (
          <ProductItem item={item} addToCartList={data.addToCartList}/>
        )}
        numColumns={2}
        columnWrapperStyle={styles.flat}
      />


      <View style={styles.listProducts}>

      </View>

      {/*<TouchableOpacity*/}
      {/*  style={styles.mainButsBox}*/}
      {/*  onPress={() => setIsVisibleModal(!isVisibleModal)}*/}
      {/*>*/}
      {/*  <Text>*/}
      {/*    Open modal*/}
      {/*  </Text>*/}
      {/*</TouchableOpacity>*/}

      {/*<Modal*/}
      {/*  visible={isVisibleModal}*/}
      {/*  animationType={'slide'}*/}
      {/*>*/}
      {/*  <TouchableOpacity onPress={() => setIsVisibleModal(!isVisibleModal)}>*/}
      {/*    <Text>close modal</Text>*/}
      {/*  </TouchableOpacity>*/}
      {/*</Modal>*/}

      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listProducts: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  flat: {
    // marginLeft: 20
    justifyContent: 'space-evenly'
  }
})

