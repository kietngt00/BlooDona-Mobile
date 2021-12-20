import React, { useEffect, useState } from "react"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { Camera } from "expo-camera"
import SwitchSelector from "react-native-switch-selector"
import { AntDesign, MaterialIcons } from "@expo/vector-icons"
import { Color } from "../../globals/constants"
import Button from "../../components/Button"

const QRCodeScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null)
  const [chosenOption, setChosenOption] = useState(0)
  const [bodyText, setBodyText] = useState(
    "Scan QR code to confirm your blood donation",
  )
  const [scanned, setScanned] = useState(false)
  const handleScan = ({ type, data }) => {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  const options = [
    {
      customIcon: (
        <AntDesign
          name="qrcode"
          size={30}
          color={chosenOption === 0 ? "#fff" : "#C4C4C4"}
        />
      ),
      value: 0,
    },
    {
      customIcon: (
        <MaterialIcons
          name="add-photo-alternate"
          size={30}
          color={chosenOption === 1 ? "#fff" : "#C4C4C4"}
        />
      ),
      value: 1,
    },
  ]

  useEffect(
    () =>
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync()
        setHasPermission(status === "granted")
      })(),
    [],
  )

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  const handleSwitch = (value) => {
    setChosenOption(value)
    if (value === 0) setBodyText("Scan QR code to confirm your blood donation")
    else setBodyText("Upload QR code image to confirm your blood donation")
    console.log(bodyText)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>QR Code Scanning</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>{bodyText}</Text>
        {chosenOption === 0 ? (
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            onBarCodeScanned={scanned ? undefined : handleScan}
          />
        ) : (
          <View style={styles.camera}></View>
        )}
        <View height={30}>
          {scanned && chosenOption === 0 && (
            <Button
              text="Scan Again"
              onPress={() => setScanned(false)}
              styles={{ text: styles.scanAgainText }}
            />
          )}
        </View>
        <SwitchSelector
          options={options}
          initial={0}
          buttonColor={Color.primary}
          backgroundColor="#E5E5E5"
          onPress={(value) => handleSwitch(value)}
          style={styles.switchSelector}
        />
      </View>
    </SafeAreaView>
  )
}

export default QRCodeScreen
