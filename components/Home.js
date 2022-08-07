import React, { useContext } from 'react';
import { MyContext } from './MyProvider';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function Home(){

    const lstBook = [
      {
          id: 1,
          name: "Learning React",
          author: "John Doe",
          serialnumber: "1234"
      },
      {
          id: 2,
          name: "Learning RN",
          author: "Wong Ka Chun",
          serialnumber: "4321"
      },
    ];
    // only get book variable
    const { book } = useContext(MyContext);
    const [books, setbooks] = book;

    function toggleStyle() {
      console.log("toggle");
      if (books.id == 1) {        
        setbooks(lstBook[1]);
      } else {        
        setbooks(lstBook[0]);
      }
    }

    // All the JSX will go inside this return
    return(
        <Card>
            <Text>Home</Text>
            <Image style={styles.logo} source={require('../assets/icon.png')} />            
            <Text>ID: {books.id}</Text>
            <Text>Name: {books.name}</Text>
            <Text>Author: {books.author}</Text>
            <Text>Serial Number: {books.serialnumber}</Text>
            <Button title="toggle" onPress={ () => toggleStyle() } ></Button>                        
        </Card>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
    borderColor: 'blue',
    borderWidth: 2,
    marginTop: 5,
    marginBottom: 5,
  },
  logo: {
    height: 50,
    width: 50,
  }
});