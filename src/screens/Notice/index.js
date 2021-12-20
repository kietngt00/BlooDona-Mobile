import React from "react"
import { View, Text, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { FontAwesome5, Ionicons } from "@expo/vector-icons"
import Button from "../../components/Button"
import { ScenceKey } from "../../globals/constants"
import BaseNotice1 from "../../components/BaseNotice1"
import BaseNotice2 from "../../components/BaseNotice2"

const data = [
  {
    active: true,
    group: "O",
    time: 10,
    timeType: "MIN",
    place: "Bach Mai Hospital",
    location: "78 Giải Phóng, Phương Đình, Đống Đa, Hà Nội",
    map: "G.3.2",
  },
  {
    active: false,
    group: "O",
    time: 10,
    timeType: "MIN",
    place: "Bach Mai Hospital",
    location: "78 Giải Phóng, Phương Đình, Đống Đa, Hà Nội",
    map: "G.3.2",
  },
  {
    active: true,
    group: "O",
    time: 10,
    timeType: "DAY",
    place: "Bach Mai Hospital",
    location: "78 Giải Phóng, Phương Đình, Đống Đa, Hà Nội",
    map: "G.3.2",
  },
  {
    active: false,
    group: "O",
    time: 10,
    timeType: "DAY",
    place: "Bach Mai Hospital",
    location: "78 Giải Phóng, Phương Đình, Đống Đa, Hà Nội",
    map: "G.3.2",
  },
]

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
            styles={{ container: styles.backButton }}
            onPress={navigation.goBack}
          />
          <Text style={styles.bodyText}>Notfication</Text>
        </View>
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(itemData) => {
            return itemData.item.active 
              ? <BaseNotice1 data={itemData.item} />
              : <BaseNotice2 data={itemData.item} />
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default NoticeScreen
