import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"
import { SafeAreaView } from "react-native-safe-area-context"
import Button from "../../components/Button"
import { Color, ScenceKey } from "../../globals/constants"
import { FONT } from "../../globals/styles"
import { styles } from "./styles"

const BloodSOSScreen = ({ navigation }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(null)
  const [items, setItems] = useState([
    { label: "Very urgent", value: 0 },
    { label: "Urgent", value: 1 },
    { label: "Normal", value: 2 },
  ])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Blood SOS</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.infoContainer}>
          <Text style={styles.bodyText}>Urgent Level</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select a level"
            style={{
              height: 40,
              borderColor: Color.primary,
            }}
            textStyle={{
              fontSize: 18,
              fontFamily: FONT.fontRegular,
            }}
          />
          <Text style={styles.bodyText}>Blood Needed</Text>
          <View flexDirection="row" alignItems="center">
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              maxLength={4}
            />
            <Text style={styles.unitText}>ml</Text>
          </View>
        </View>
        <Button
          text="SOS"
          styles={{ container: styles.button, text: styles.buttonText }}
          onPress={()=> navigation.navigate(ScenceKey.SOSBroadCastedScreen)}
        />
      </View>
    </SafeAreaView>
  )
}

export default BloodSOSScreen
