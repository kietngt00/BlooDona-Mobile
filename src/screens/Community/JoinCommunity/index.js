import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { styles } from './styles'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import Button from '../../../components/Button'
import BaseCommunity from '../../../components/BaseCommunity'
import { ScenceKey } from '../../../globals/constants'

const data = [
  {
    isPublic: true,
    club: "Sample Club 1",
    intro: "Sample Intro 1",
    buttonText: "Participate",
  },
  {
    isPublic: false,
    club: "Sample Club 2",
    intro: "Sample Intro 2",
    buttonText: "Register",
  },
  {
    isPublic: false,
    club: "Sample Club 2",
    intro: "Sample Intro 2",
    buttonText: "Register",
  },
  {
    isPublic: true,
    club: "Sample Club 2",
    intro: "Sample Intro 2",
    buttonText: "Participate",
  },
]

const JoinCommunityScreen = ({ navigation, route }) => {
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
        <View style={styles.topBody}>
          <Button
            child={<Ionicons name='chevron-back' size={30} color='#000000' />}
            styles={{ container: styles.backButton }}
            onPress={navigation.goBack}
          />
          <Text style={styles.bodyText}>Community</Text>
        </View>
        <View style={styles.list}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(itemData) => <BaseCommunity data={itemData.item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default JoinCommunityScreen
