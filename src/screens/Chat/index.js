import React from 'react'
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native'
import Button from '../../components/Button'
import { styles } from './styles'
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { Color } from '../../globals/constants'

const ChatScreen = ({ navigation, route }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          flex={1}
          keyboardVerticalOffset={10}
        >
          <View style={styles.header}>
            <Button
              child={<Ionicons name='chevron-back' size={30} color='#000000' />}
              styles={{ container: styles.backButton }}
              onPress={navigation.goBack}
            />
            <View style={styles.clubAvatar}></View>
            <Text style={styles.clubName}>Club name</Text>
          </View>
          <View style={styles.body} onPress={Keyboard.dismiss}></View>
          <View style={styles.bottom}>
            <Button child={<Ionicons name='attach' size={30} />} />
            <TextInput
              placeholder='write a message'
              style={styles.chatInput}
              multiline={true}
            />
            <Button
              child={
                <MaterialCommunityIcons name='microphone-outline' size={30} />
              }
            />
            <Button
              child={<MaterialIcons name='insert-emoticon' size={30} />}
            />
            <Button
              child={<Ionicons name='send' size={30} color={Color.primary} />}
              styles={{ container: { marginLeft: 5 } }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default ChatScreen
