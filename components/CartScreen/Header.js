import {Text, View, StyleSheet} from "react-native";

export default function Header() {
  return (
    <View style={styles.mainBox}>
      <Text style={styles.title}>Корзина</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBox: {
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  }
})
