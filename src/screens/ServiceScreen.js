import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ServiceScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Service Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
