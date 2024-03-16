import React from "react";
import {
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const getItem = (_data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Title ${index + 1}`,
  description: "Description",
  value: 105,
  createdDate: new Date().toLocaleDateString("tr"),
});

const getItemCount = (_data) => 50;

const Item = ({ title, description, value, createdDate }) => (
  <View style={styles.item}>
    <Text style={styles.createdDate}>{createdDate}</Text>
    <View style={styles.contentContainer}>
      <View style={styles.contentItem}> 
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.contentItemWithValue}>
        <MaterialCommunityIcons name="water" size={30} color={"#8b0000"} />
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  </View>
);

const Card = () => {
  return (
    <VirtualizedList
      initialNumToRender={4}
      renderItem={({ item }) => (
        <Item
          title={item.title}
          description={item.description}
          value={item.value}
          createdDate={item.createdDate}
        />
      )}
      keyExtractor={(item) => item.id}
      getItemCount={getItemCount}
      getItem={getItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, 
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentItem: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 8,
    margin: 4,
  },
  contentItemWithValue: {
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    margin: 4,
  },
  title: {
    fontSize: 32,
  },
  description: {
    fontSize: 24,
  },
  value: {
    fontSize: 40,
  },
  createdDate: {
    fontSize: 18,
    textAlign: 'center'
  },
});

export default Card;
