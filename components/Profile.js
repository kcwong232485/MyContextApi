import { useContext } from 'react';
import { MyContext } from './MyProvider';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function Profile() {
    // only get profile variable
    const {profile} = useContext(MyContext);
    const [profiles, setprofiles] = profile;

    // All the JSX will go inside this return
    return(
        <Card>
            <Text>Profile</Text>
            <Image style={styles.logo} source={require('../assets/adaptive-icon.png')} />
            <Text>Profile: {profiles.company}</Text>
            <Text>Profile: {profiles.address}</Text>
            <Text>Profile: {profiles.tel}</Text>
        </Card>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
    borderColor: 'red',
    borderWidth: 2,
  },
  logo: {
    height: 50,
    width: 50,
  }
});
