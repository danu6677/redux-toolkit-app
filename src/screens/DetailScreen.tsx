// InitailScreen.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style ={{alignItems:'center', marginVertical:50}}>
      <Text>Details Screen</Text>
      <Button
        title="Back to Initial Screen"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default DetailScreen;
