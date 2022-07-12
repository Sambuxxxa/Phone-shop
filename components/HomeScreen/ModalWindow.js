import React, {useContext, useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity, Modal
} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function ModalWindow({isVisibleModal, setIsVisibleModal, item}) {

  return (
    <Modal
      visible={isVisibleModal}
      style={styles.mainBox}
      animationType={'slide'}
    >
      <TouchableOpacity
        onPress={() => setIsVisibleModal()}
      >
        <Text>Close</Text>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainBox: {},
})
