// InitailScreen.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Details Screen</Text>
      <Button
        title="Go to Initial Screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default DetailScreen;
