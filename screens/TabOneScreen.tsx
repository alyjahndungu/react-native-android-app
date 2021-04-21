import React, {useState,useEffect} from 'react';
import { StyleSheet, FlatList, Image} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import UsersCard from './UsersCard';
import http from '../api/users';


export default function TabOneScreen() {

  const [users, setUsers] = useState([])

function getUsers(){
  http.get('/users').then(async function(response){
    console.log(response.data);
    setUsers(response.data);
  }).catch((err) => {
    console.log(err);
    
  });
}

  useEffect(() => {
    getUsers();
}, [])


if (!users) {
  return null;

}

  return (
  <View>

    <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image style={styles.image}  source={{
          uri: "https://avatars.githubusercontent.com/u/54708963?v=4",
        }}/>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.listItemText}>Email:  {item.email}</Text>
            <Text style={styles.listItemText}>Phone:  {item.phoneNumber}</Text>
          </View>
        )}
      />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   image: {
    width: 70,
    height: 70,
    borderRadius: 100
  },
text: {
    fontSize: 22,
    color: '#e65100',
    fontWeight: '700'
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#031b4e',
    width: '100%'
  },
  listItemText: {
    fontSize: 14,
    color: '#fff'
  }
});
