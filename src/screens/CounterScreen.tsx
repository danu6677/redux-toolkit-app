import React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native"; // Correct import statement
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { decrement, increment, incrementBy } from "../slice/counterslice";

const CounterScreen = () => {
  const dispatch = useDispatch<AppDispatch>(); //AppDispatch is only needed if working with async
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    // Added return statement
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.myText}>Count: {count}</Text>
          <Button title="Increments" onPress={() => dispatch(increment())} />
          <Button title="Decrement" onPress={() => dispatch(decrement())} />
          <Button
            title="IncrementBy"
            onPress={() => dispatch(incrementBy(20))}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  myText: {
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: 100,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 5,
    width: "80%",
  },
});

export default CounterScreen;
