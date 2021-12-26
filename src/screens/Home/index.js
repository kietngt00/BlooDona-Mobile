import React from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { styles } from './styles'
import { FontAwesome5 } from '@expo/vector-icons'
import { Color, ScenceKey } from '../../globals/constants'
import BaseDonateInfo from '../../components/BaseDonateInfo'
import Button from '../../components/Button'

const sampleData = {
  donateCount: 5,
  donations: [
    {
      volumn: 300,
      date: '12/18/2021',
      place: 'Hospital 1',
      location: '1 Street, 1 District, 1 Province',
      map: 'G.1.1',
    },
    {
      volumn: 450,
      date: '12/19/2021',
      place: 'Hospital 2',
      location: '2 Street, 2 District, 2 Province',
      map: 'G.2.2',
    },
    {
      volumn: 300,
      date: '12/20/2021',
      place: 'Hospital 3',
      location: '3 Street, 3 District, 3 Province',
      map: 'G.3.3',
    },
    {
      volumn: 450,
      date: '12/21/2021',
      place: 'Hospital 4',
      location: '4 Street, 4 District, 4 Province',
      map: 'G.4.4',
    },
    {
      volumn: 300,
      date: '12/22/2021',
      place: 'Hospital 5',
      location: '5 Street, 5 District, 5 Province',
      map: 'G.5.5',
    },
  ],
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
        <View style={styles.donateCountBox}>
          <Text style={styles.countText}>{sampleData.donateCount} times</Text>
          <Text style={styles.donationText}>Blood Donation</Text>
        </View>
        <Button
          text='Available'
          child={<FontAwesome5 name='play' size={20} color={Color.primary} />}
          styles={{ container: styles.button, text: styles.buttonText }}
        />
        <FlatList
          marginVertical={20}
          data={sampleData.donations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(itemData) => {
            const { volumn, date, place, location, map } = itemData.item
            return (
              <BaseDonateInfo
                volumn={volumn}
                date={date}
                place={place}
                location={location}
                map={map}
              />
            )
          }}
        />
      </View>
    </View>
  )
}

export default HomeScreen
