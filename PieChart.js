import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import Pie from 'react-native-pie'
export default class Chart extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Pie
          radius={100}
          series={[30, 30, 40]}
          colors={['lime', 'yellow', 'red',]} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
