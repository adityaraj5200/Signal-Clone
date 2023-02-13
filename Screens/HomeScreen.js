import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from 'react-native'
import CustomListItem from '../components/CustomListItem';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: 'red',borderWidth: 2,
  }
})