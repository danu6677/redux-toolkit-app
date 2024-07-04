import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { fetchNewsAsync } from "../slice/newsSlice";

interface NewsItem {
  id: number;
  title: string;
  images: {
    square_140: string;
  };
}

const NewsComponent = () => {
  const dispatch = useDispatch();
  //from the initial state object in the slice
  const { status, news, error } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    // Dispatch the fetchNewsAsync action when the component mounts
    dispatch(fetchNewsAsync() as any); // Use 'as any' to resolve TypeScript error
  }, [dispatch]); // Dependency array ensures the effect runs only once

  if (status === "loading") {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (status === "failed") {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList
        data={news}
        keyExtractor={(item: NewsItem) =>
          item.id && item.images && item.images.square_140
            ? item.id.toString()
            : ""
        }
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.myText}>{item.title}</Text>
            {item.images && item.images.square_140 && (
              <Image
                source={{ uri: item.images.square_140 }}
                style={styles.image}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
  },
  image: {
    width: 140,
    height: 140,
  },
  myText: {
    fontSize: 18,
    color: "blue",
    fontWeight: "bold",
    marginVertical: 50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewsComponent;
