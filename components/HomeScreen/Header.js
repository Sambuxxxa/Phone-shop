import React, {useContext} from "react";
import { View, StyleSheet, TextInput} from "react-native";
import {EvilIcons} from "@expo/vector-icons";
import {ProductsContext} from "../../App";

export default function Header() {


  const data = useContext(ProductsContext);

  return (
    <View style={styles.mainBox}>
      <View style={styles.box}>
        <View style={styles.icon}>
          <EvilIcons name="search" size={33} color="#9B9B9B"/>
        </View>
        <TextInput
          style={styles.inp}
          placeholder={'Искать...'}
          onChangeText={(text) => {
            data.setSearchedItems(data.list.filter(item => {
                return (
                  item.title.toLowerCase().includes(text.toLowerCase())
                )
              })
            )
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  box: {
    height: 45,
    // justifyContent: 'flex-start',
    // paddingTop: 10,
    flexDirection: 'row',
    // width: '89%',
    width: '96%',
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 20,
    borderWidth: 0.1,
    borderColor: '#9B9B9B'
  },
  inp: {
    width: '99%',
    fontSize: 17,
    marginLeft: 5,
    color: '#9B9B9B'
  },
  icon: {
    paddingTop: 8,
  },
  icon2: {
    paddingTop: 11,
    left: -5
  },
})
