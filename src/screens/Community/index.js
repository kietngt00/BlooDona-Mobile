import React from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"
import Button from "../../components/Button"
import BaseCommunity from "../../components/BaseCommunity"
import { Color } from "../../globals/constants"

const data = [
  {
    isPublic: true,
    club: "Sample Club 1",
    intro: "Sample Intro 1",
    buttonText: "Chat",
  },
  {
    isPublic: false,
    club: "Sample Club 2",
    intro: "Sample Intro 2",
    buttonText: "Chat",
  },
  {
    isPublic: false,
    club: "Sample Club 2",
    intro: "Sample Intro 2",
    buttonText: "Chat",
  },
  {
    isPublic: false,
    club: "Sample Club 2",
    intro: "Sample Intro 2",
    buttonText: "Chat",
  },
]

const CommunityScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View flexDirection='row' alignItems='center'>
          <View style={styles.avatar}></View>
          <Text style={styles.headerText}>Name</Text>
          <FontAwesome5 name='check-circle' size={20} color='#fff' />
        </View>
        <View flexDirection='row' justifyContent='space-between' width={70}>
          <Button
            child={<FontAwesome5 name='bell' size={25} color='#fff' solid />}
            onPress={() => navigation.navigate(ScenceKey.NoticeScreen)}
          />
          <Button
            child={<FontAwesome5 name='cog' size={25} color='#fff' solid />}
          />
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Community</Text>
        <View style={styles.list}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(itemData) => <BaseCommunity data={itemData.item} />}
          />
        </View>
        <Button
          child={<FontAwesome5 name='plus' size={20} color='#fff' />}
          styles={{ container: styles.plusButton }}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.bottomText}>Chat with Doctors</Text>
          </View>
          <View style={styles.rightButton}>
            <MaterialCommunityIcons name='doctor' size={30} color='#fff' />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default CommunityScreen
