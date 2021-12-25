import React from "react"
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native"
import SOSBroadCastedSVG from "../../../../assets/svg/SOSBroadCastedSVG"
import { styles } from "./styles"
import { Ionicons } from "@expo/vector-icons"

const SOSBroadCastedScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
          <Ionicons name="chevron-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Blood SOS</Text>
      </View>
      <View style={styles.body}>
        <SOSBroadCastedSVG width={250} height={250} style={styles.svg} />
        <Text style={styles.bodyText}>
          We have received your message. The hospital will contact you soon!
        </Text>
        <Text style={styles.bodyText}>
          Please take care, we will help you as fast as possible.
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SOSBroadCastedScreen
