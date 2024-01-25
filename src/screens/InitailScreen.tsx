// InitailScreen.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';
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
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export default InitailScreen;
