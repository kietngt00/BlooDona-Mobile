import React from 'react'
import { View, Text, SafeAreaView, FlatList, TextInput } from 'react-native'
import { styles } from './styles'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import Button from '../../../components/Button'
import { ScenceKey } from '../../../globals/constants'
import RegisteredSVG from '../../../../assets/svg/RegisterSVG'

const ClubRegisteredScreen = ({ navigation, route }) => {
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
          <Text style={styles.bodyText}>Register</Text>
        </View>
        <RegisteredSVG width={200} height={220} style={{ marginTop: 20 }} />
        <Text style={styles.infoText}>Registered Successfully!</Text>
        <Text style={[styles.infoText, {marginTop: 30, paddingHorizontal: 10}]}>
          The admins will consider your registration and get back to you soon.
          Be patient and prepare for upcoming exciting activities in our
          community.
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default ClubRegisteredScreen
