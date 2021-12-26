import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { FONT, SCREEN_WIDTH } from "../globals/styles"
import { Color } from "../globals/constants"

const BaseDonateInfo = (props) => {
  const { volumn, date, place, location, map } = props
  return (
    <View style={styles.container}>
      <View style={styles.donateInfo}>
        <Text style={styles.donateText}>{volumn} ml</Text>
        <Text style={styles.donateText}>{date}</Text>
      </View>
      <View style={styles.locationContainer}>
        <View>
          <Text style={styles.place}>{place}</Text>
          <Text style={styles.locationText}>{location}</Text>
        </View>
        <View style={styles.bottomRight}>
          <TouchableOpacity style={styles.mapIconContainer}>
            <FontAwesome5 name="map-marker-alt" color={Color.secondary} />
            <Text style={styles.mapText}>{map}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="play" size={15} color={Color.secondary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default BaseDonateInfo

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.9,
    backgroundColor: "#EEEBDD",
    height: 100,
    borderRadius: 20,
    flexDirection: "row",
    marginBottom: 20,
  },
  donateInfo: {
    flex: 1,
    borderRightWidth: 2,
    height: 100,
    borderColor: Color.secondary,
    justifyContent: "center",
  },
  donateText: {
    fontSize: 14,
    fontFamily: FONT.fontRegular,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  locationContainer: {
    flex: 2.5,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  place: {
    fontSize: 15,
    fontFamily: FONT.fontBold,
    paddingTop: 5,
    textAlign: "justify",
  },
  locationText: {
    fontSize: 13,
    fontFamily: FONT.fontLight,
    textAlign: "justify",
  },
  mapIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  mapText: {
    fontSize: 14,
    fontFamily: FONT.fontBold,
    color: "#656565",
    paddingLeft: 4,
  },
  bottomRight: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
})
