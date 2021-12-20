import React from "react"
import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { FontAwesome5, Ionicons } from "@expo/vector-icons"
import Button from "../../components/Button"
import { ScenceKey } from "../../globals/constants"
import BaseNotice from "../../components/BaseNotice"

const NoticeScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View flexDirection="row" alignItems="center">
          <View style={styles.avatar}></View>
          <Text style={styles.headerText}>Name</Text>
          <FontAwesome5 name="check-circle" size={20} color="#fff" />
        </View>
        <View flexDirection="row" justifyContent="space-between" width={70}>
          <Button
            child={<FontAwesome5 name="bell" size={25} color="#fff" solid />}
            onPress={() => navigation.navigate(ScenceKey.NoticeScreen)}
          />
          <Button
            child={<FontAwesome5 name="cog" size={25} color="#fff" solid />}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.topBody}>
          <Button
            child={<Ionicons name="chevron-back" size={30} color="#000000" />}
            styles={{container: styles.backButton}}
            onPress={navigation.goBack}
          />
          <Text style={styles.bodyText}>Notfication</Text>
        </View>
        <BaseNotice/>
      </View>
    </SafeAreaView>
  )
}

export default NoticeScreen
