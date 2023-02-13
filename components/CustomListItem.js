import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from '@rneui/base'

const CustomListItem = ({ id, chatName, enterChat }) => {
  const dummyProfilePicturePath = '../assets/dummy-profile-picture.png';

  return (
    <ListItem>
      <Avatar
        rounded
        source={require(dummyProfilePicturePath)}
      // source={{ uri: 'https://randomuser.me/api/portraits/men/38.jpg' }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: '800' }}>
          John Doe
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro sequi blanditiis officiis eum placeat! Distinctio sapiente tenetur delectus fugit maxime molestiae fugiat repellendus maiores ab eveniet fuga, cum illo veniam.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})