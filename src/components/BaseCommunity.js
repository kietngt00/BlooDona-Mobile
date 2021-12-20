import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { FONT, SCREEN_WIDTH } from "../globals/styles"
import Button from "./Button"
import { FontAwesome5 } from "@expo/vector-icons"
import { Color } from "../globals/constants"

const BaseCommunity = (props) => {
  const { isPublic, club, intro, buttonText } = props.data
  return (
    <View>
      <View
        style={{
          ...styles.header,
          backgroundColor: isPublic ? "#34A853" : Color.primary,
        }}
      >
        <Text style={styles.headerText}>
          {isPublic ? "Public" : "Private"} Club
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <View style={styles.image}></View>
          <View>
            <Text style={styles.club}>{club}</Text>
            <Text style={styles.intro}>{intro}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: isPublic ? "#34A853" : Color.primary,
          }}
          backgroundColor={isPublic ? "#34A853" : Color.primary}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
          <FontAwesome5 name="play" size={14} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BaseCommunity

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.9,
  },
  contentContainer: {
    elevation: 2,
    width: SCREEN_WIDTH * 0.9,
    height: 120,
    shadowColor: "gray",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  header: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 14,
    fontFamily: FONT.fontRegular,
    color: "#fff",
  },
  content: {
    flexDirection: "row",
    flex: 2,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    height: 60,
    width: 60,
    backgroundColor: "gray",
    borderRadius: 10,
    marginRight: 10,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },
  club: {
    fontSize: 16,
    fontFamily: FONT.fontBold,
  },
  intro: {
    fontSize: 14,
    fontFamily: FONT.fontLight,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONT.fontRegular,
    color: "#fff",
    marginHorizontal: 10,
  },
})
