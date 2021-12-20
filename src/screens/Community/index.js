import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { FontAwesome5 } from "@expo/vector-icons"
import Button from "../../components/Button"
import BaseCommunity from "../../components/BaseCommunity"

const CommunityScreen = ({ navigation, route }) => {
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
        <Text style={styles.bodyText}>Community</Text>
        <BaseCommunity
          data={{
            isPublic: true,
            club: "Sample Club 1",
            intro: "Sample Intro 1",
            buttonText: "Chat",
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default CommunityScreen
