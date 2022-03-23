import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CarService = () => {
    return (
      <View style={styles.container}>
        <Text>Booking Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default CarService;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
