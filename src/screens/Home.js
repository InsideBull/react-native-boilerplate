import React from 'react'
import { StyleSheet, View, Text } from 'react-native' 

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'purple',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: 'white',
      fontSize: 30
    }
});

export default Home