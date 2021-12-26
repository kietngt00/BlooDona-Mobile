import React from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import Button from '../../components/Button'
import { styles } from './styles'
import ThankSVG from '../../../assets/svg/ThankSVG'
import { Color } from '../../globals/constants'

const AcceptDonateScreen = ({ navigation, route }) => {
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
          <Text style={styles.bodyText}>Next Step</Text>
        </View>
        <ThankSVG
          width={150}
          height={120}
        />
        <View marginVertical={0}>
          <Text style={styles.infoText}>
            1. Go to the location on the below map.
          </Text>
          <Text style={styles.infoText}>
            2. Follow the instructions from the doctors to donate your blood.
          </Text>
          <Text style={styles.infoText}>
            3. Scan the QR code to verify your donation.
          </Text>
        </View>
        <Image source={require('../../../assets/map.png')} style={styles.map} />
        <View style={styles.location}>
          <Text style={styles.infoText}>Bach Mai Hospital</Text>
          <Text style={styles.infoText}>
            78 Giải Phóng, Phương Đình, Đống Đa, Hà Nội
          </Text>
          <Text style={styles.infoText}>G.3.2</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.bottomText}>Ask for help</Text>
          </View>
          <View style={styles.rightButton}>
            <Ionicons name='people' size={30} color='#fff' />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default AcceptDonateScreen
