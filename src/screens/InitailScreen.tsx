// InitailScreen.tsx
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'; // Corrected import
import {DemoStackParamList} from '../navigation/types';

type InitailScreenNavigationProp = NativeStackNavigationProp<
  DemoStackParamList,
  'Initial'
>;

const InitailScreen = () => {
  const navigation = useNavigation<InitailScreenNavigationProp>();

  return (
    <View style = {styles.container}>
      <Text style = {styles.myText}>Initial Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    flex: 1,
    alignItems:'center'
  },
  
  myText: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
    marginVertical: 50,
  },
});
export default InitailScreen;
