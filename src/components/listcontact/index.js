import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../configs/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListContact = ({item, onPressDel, onPressUpdate}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}>
        <View style={styles.initialLetter}>
          <Text style={styles.char}>{item.firstName.charAt(0)}</Text>
        </View>
        <View>
        <Text style={styles.fullName}>{`${item.firstName} ${item.lastName}`}</Text>
      <Text style={styles.age}>{item.age} year old</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity style={{
          marginRight: 16,
        }} onPress={onPressUpdate}>
          <Icon name="user-edit" size={20} color={Colors.main.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressDel}>
          <Icon name="trash" size={20} color={Colors.main.red} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: Colors.main.grey,
    height: 60,
    paddingHorizontal: 16,
    marginBottom: 16,
    paddingBottom: 10,
  },
  initialLetter: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.main.violet,
    justifyContent: 'center',
    marginRight: 10,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 14,
  },
  char: {
    color: Colors.main.white,
    textAlign: 'center',
    fontSize: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ListContact;
