import React, {useContext} from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import Header from "./Header";
import ProductItem from "./ProductItem";
import {ProductsContext} from "../../App";

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

