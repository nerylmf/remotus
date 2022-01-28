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

export function Lugares() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 
      }}>
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
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Centro, Quixadá - CE',
    horizontal: true,
    data: [
      {
        key: '1',
        uri: 'https://image.freepik.com/fotos-gratis/grande-plano-seletivo-closeup-tiro-de-uma-pilha-de-biscoitos-de-chocolate-assados_181624-3987.jpg',
      },
      {
        key: '2',
        
        uri: 'https://image.freepik.com/fotos-gratis/saboroso-cafe-em-um-copo-branco_1232-412.jpg',
      },
    ],
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',

  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#0d1321',
    marginTop: 35,
    marginBottom: 5,
    
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 240,
    height: 150,
    borderRadius:10,
  },
  itemText: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 5,
  },
});
