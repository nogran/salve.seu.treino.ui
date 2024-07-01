import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import I18n from '../../util/i18n';

const MuscleGroupsScreen = ({ navigation }) => {
  const muscleGroups = [
    { id: '1', name: I18n.t('chest') },
    { id: '2', name: I18n.t('back') },
    { id: '3', name: I18n.t('shoulders') },
    { id: '4', name: I18n.t('arms') },
    { id: '5', name: I18n.t('legs') },
    { id: '6', name: I18n.t('abdomen') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Detalhes do Agrupamento', { groupId: item.id })}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={muscleGroups}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  item: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: '45%',
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MuscleGroupsScreen;
