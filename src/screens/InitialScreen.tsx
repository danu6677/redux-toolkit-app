// InitailScreen.tsx
import React, { useCallback } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"; // Corrected import
import { DemoStackParamList } from "../navigation/types";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { textChange } from "../slice/initialSlice";

type InitialScreenNavigationProp = NativeStackNavigationProp<
  DemoStackParamList,
  "Initial"
>;

const InitialScreen = () => {
  const navigation = useNavigation<InitialScreenNavigationProp>();

  const dispatch = useDispatch<AppDispatch>(); //AppDispatch is only needed if working with async
  const text = useSelector((state: RootState) => state.initial.newText);
  /*useCallback is to avoid unneccary re-renders. 
  Component receiving an inline arrow function, which is creating a new function reference on each render. 
  To optimize performance and ensure that the callback function reference remains stable between renders, you can use useCallback.*/
  const handleTextChange = useCallback(
    (newText: string) => {
      dispatch(textChange(newText));
    },
    [dispatch]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.myText}>Initial Screen</Text>
      <TextInput
        placeholder="Enter text..."
        onChangeText={handleTextChange}
        style={styles.input} // Add a style if needed
      />
      <Text style={styles.myText}>New Text: {text}</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    flex: 1,
    alignItems: "center",
  },

  myText: {
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
    marginVertical: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    width: "100%", // Adjust the width as needed
  },
});
export default InitialScreen;
