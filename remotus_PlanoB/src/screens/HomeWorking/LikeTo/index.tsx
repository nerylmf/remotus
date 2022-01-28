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
  TouchableOpacity

} from 'react-native';


const ListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
     
      <Text style={styles.itemText}>{item.text}</Text>

    </TouchableOpacity>
  );
};

export function LikeTo() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
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
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
 
  {
    title: 'Você também pode gostar:',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'FM açai',
        uri: 'https://image.freepik.com/fotos-gratis/tigela-de-acai-tipica-brasileira-sobre-mesa-de-madeira_92534-1457.jpg',
      },
      {
        key: '2',
        text: 'Miudos',
        uri: 'https://image.freepik.com/fotos-gratis/bolos-velas-aalaw-e-polvilha-no-canto-do-fundo-rosa_23-2148190399.jpg',
      },

      {
        key: '3',
        text: 'Padaria Ideal',
        uri: 'https://image.freepik.com/free-photo/different-types-bread-made-from-wheat-flour_140725-5648.jpg',
      },
      {
        key: '4',
        text: 'Gugu Lanches',
        uri: 'https://image.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg',
      },
      
    ],
  },
  
];
const styles = StyleSheet.create({
  container: {
    height: 255,
    padding: 10,
    marginTop: -85,
    marginBottom: 45,

  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#0d1321',
    marginBottom: 5,
    
  },
  item: {
    margin: 7,
  },
  itemPhoto: {
    width: 100,
    height: 100,
    borderRadius:80,

  },
  itemText: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 15,
    marginLeft: 10,
  },
});
