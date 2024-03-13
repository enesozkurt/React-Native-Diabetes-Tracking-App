import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from "dayjs";

const NewRecord = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [date, setDate] = React.useState(dayjs());

  return (
    <SafeAreaView>
      <DateTimePicker
        mode="single"
        date={date}
        onChange={(params) => setDate(params.date)}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Açıklama Giriniz"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Kan Şekeri Değeri"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default NewRecord;
