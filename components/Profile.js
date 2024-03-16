import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Logout from "./Logout";

const user = {
  fullName: "Enes Özkurt",
  profilePhoto: "https://reactjs.org/logo-og.png",
  weight: 75,
  height: 185,
  birthDate: "17/01/1996",
  bloodGroup: "A+",
  lastHba1c: "7.4"
};

const Profile = () => {

  const calculateAge = (birthDate) => {
    var birthDateParts = birthDate.split("/");
    var birthDay = parseInt(birthDateParts[0]);
    var birthMonth = parseInt(birthDateParts[1]);
    var birthYear = parseInt(birthDateParts[2]);

    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth() + 1;
    var currentYear = currentDate.getFullYear();

    var age = currentYear - birthYear;

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }
    return age;
  } 

  return (
    <>
      <View style={styles.card}>
        <View style={styles.profile}>
          <View style={styles.profilePhoto}>
            <Image
              source={{ uri: user.profilePhoto }}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <Text style={styles.title}>{user.fullName}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoTitle}>Kilo: </Text>
          <Text style={styles.userInfoDescription}>{user.weight}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoTitle}>Boy: </Text>
          <Text style={styles.userInfoDescription}>{user.height}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoTitle}>Yaş: </Text>
          <Text style={styles.userInfoDescription}>{calculateAge(user.birthDate)}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoTitle}>Kan Grubu: </Text>
          <Text style={styles.userInfoDescription}>{user.bloodGroup}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userInfoTitle}>Hba1c: </Text>
          <Text style={styles.userInfoDescription}>{user.lastHba1c}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Logout componentId='Home' />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    display: "flex",
    flexDirection: "column",
  },
  profile: {
    alignItems: "center"
  },
  title: {
    marginTop: 10,
    fontSize: 32,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 75,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#000",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 10,
    borderBottomColor: "#dedede",
    borderBottomWidth: 1
  },
  userInfoTitle: {
    fontSize: 24
  },
  userInfoDescription: {
    fontSize: 24
  }
});

export default Profile;
