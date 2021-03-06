import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,

} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};


export function Categorias(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
               {section.horizontal ? (
              
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator ={false}
                
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return  <ListItem item={item} />
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [  
  {
    title: 'Categorias',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Padaria',
        uri: 'https://image.freepik.com/fotos-gratis/saboroso-cafe-em-um-copo-branco_1232-412.jpg',
      },
      {
        key: '2',
        text: 'Restaurante',
        uri: 'https://image.freepik.com/fotos-gratis/interior-do-restaurante_1127-3394.jpg',
      },
      {
        key: '3',
        text: 'Cafeteria',
        uri: 'https://image.freepik.com/free-photo/closeup-coffee-machine_53876-42967.jpg',
      },
    ],
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,    
    
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#0d1321',  
    
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 150,
    height: 100,
    borderRadius:10,
  },
  itemText: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
