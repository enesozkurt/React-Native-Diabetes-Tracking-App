import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.pickerContainer}>
        <MaterialCommunityIcons name="filter" size={20} />
        <View style={{ flex: 1 }}>
        <RNPickerSelect
            placeholder={{
              label: 'Filtre Seçiniz',
              value: null,
            }}
            onValueChange={(value) => {
              setSelectedValue(value);
            }}
            items={[
              { label: 'Bugün', value: 'today' },
              { label: 'Bu Hafta', value: 'weekly' },
              { label: 'Bu Ay', value: 'monthly' },
              { label: 'Son 3 Ay', value: 'last3Months' },
            ]}
            style={{
              inputIOS: styles.pickerInput,
              inputAndroid: styles.pickerInput,
            }}
          />
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  pickerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 0,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  pickerInput: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
});

export default Filter;