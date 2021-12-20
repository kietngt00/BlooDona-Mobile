import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FONT, SCREEN_WIDTH } from "../globals/styles"
import { MaterialIcons } from "@expo/vector-icons"

const BaseNotice2 = (props) => {
  const {group, time, timeType, place, location, map} = props.data
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.icon}>
        <MaterialIcons name="sms" size={30} color='#3498DB' />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          SOS - BLOOD GROUP {group} - {time} {timeType} AGO
        </Text>
        <Text style={styles.place}>{place}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.location}>{map}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default BaseNotice2

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
  },
  icon: {
    paddingHorizontal: 10,
    height: 130,
    paddingTop: 10,
    marginLeft: 8
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
  }
})
