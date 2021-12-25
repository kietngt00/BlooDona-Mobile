import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FONT, SCREEN_WIDTH } from "../globals/styles"
import { MaterialIcons } from "@expo/vector-icons"

const color = {
  main: "#E74C3C",
}

const BaseNotice1 = (props) => {
  const {group, time, timeType, place, location, map} = props.data
  return (
    <View style={styles.container}>
      <View style={styles.leftBorder}></View>
      <View style={styles.icon}>
        <MaterialIcons name="error-outline" size={30} color={color.main} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          SOS - BLOOD GROUP {group} - {time} {timeType} AGO
        </Text>
        <Text style={styles.place}>{place}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.location}>{map}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BaseNotice1

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
    height: 130,
    marginBottom: 5,
    elevation: 1,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 3,
    shadowColor: "gray",
    borderColor: color.main,
    borderWidth: 1,
  },
  leftBorder: {
    width: 8,
    height: 128,
    backgroundColor: color.main,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    opacity: 0.4,
  },
  icon: {
    paddingHorizontal: 10,
    height: 130,
    paddingTop: 10,
  },
  contentContainer: {
    justifyContent: "flex-start",
    height: 130,
    paddingVertical: 10,
  },
  title: {
    fontSize: 12,
  },
  place: {
    fontSize: 16,
    paddingVertical: 5,
    fontWeight: 'normal'
  },
  location: {
    fontSize: 12,
    fontFamily: FONT.fontLight
  },
  button: {
    marginTop: 10,
    width: 55,
    borderBottomWidth: 1,
    borderColor: '#34A853',
  },
  buttonText: {
    fontSize: 16,
    color: "#34A853",
    width: 55,
  },
})
