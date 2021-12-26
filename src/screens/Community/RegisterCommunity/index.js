import React from 'react'
import { View, Text, SafeAreaView, FlatList, TextInput } from 'react-native'
import { styles } from './styles'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import Button from '../../../components/Button'
import { ScenceKey } from '../../../globals/constants'

const RegisterCommunityScreen = ({ navigation, route }) => {
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
            onPress={() => navigation.navigate(ScenceKey.NoticeNav)}
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
        <Text style={styles.clubName}>Club Name</Text>
        <View style={styles.formContainer}>
          <Text style={styles.formField}>Field A</Text>
          <TextInput placeholder='Example' style={styles.formInput} />
          <Text style={styles.formField}>Field B</Text>
          <TextInput placeholder='Example' style={styles.formInput} />
          <Text style={styles.formField}>Field C</Text>
          <TextInput placeholder='Example' style={styles.formInput} />
          <Text style={styles.formField}>Field D</Text>
          <TextInput placeholder='Example' style={styles.formInput} />
          <Button
            text='Submit'
            styles={{
              container: styles.buttonContainer,
              text: styles.buttonText,
            }}
            onPress={() => navigation.navigate(ScenceKey.ClubRegisteredScreen)}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default RegisterCommunityScreen
