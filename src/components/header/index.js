import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = (props) => {
  const {color, title, right, onPress} = props;

  const rightContent = () => {
    if (right) {
      return (
        <TouchableOpacity onPress={onPress}>
          <Icon name="address-book" size={25} color="#ffff" />
        </TouchableOpacity>
      );
    }
    return null;
  };
  const extraSytle = !right
    ? {justifyContent: 'center'}
    : {justifyContent: 'space-between'};
  return (
    <View style={[styles.container, extraSytle, {backgroundColor: color}]}>
      <View />
      <Text style={styles.title}>{title}</Text>
      {rightContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    color: '#ffff',
    fontSize: 16,
  },
});

export default Header;
