import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Header from '../components/header';
import ModalContact from '../components/modal';
import ListContact from '../components/listcontact';
import Colors from '../configs/Colors';
import {getContact, delContact, setContact} from '../actions/contactAction';

const contacts = (props) => {
  const [isShowModal, setModal] = useState(false);
  const {
    contactsResponse,
    getContact,
    setContact,
    delContact,
    contactError,
    contactFetch,
  } = props;
  useEffect(() => {
    getContact();
  }, []);
  const renderItem = (item) => {
    return (
      <ListContact
        item={item}
        onPressDel={() => {
          delContact(item.id);
          getContact();
        }}
        onPressUpdate={() => {
          setContact(item);
          setModal(true);
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Header
        color={Colors.main.primary}
        title="Contact App"
        right
        onPress={() => setModal(true)}
      />
      <View
        style={{
          marginTop: 16,
          paddingBottom: 32,
        }}>
        <FlatList
          data={contactsResponse}
          renderItem={({item}) => renderItem(item)}
        />
      </View>
      <ModalContact isActive={isShowModal} onClose={() => setModal(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
});

const mapStateToProps = (state) => ({
  contactsResponse: state.contacts.contacts,
  contactFetch: state.contacts.loading,
  contactError: state.contacts.error,
});

const mapDispatchToProps = {
  getContact: (payload) => getContact(payload),
  setContact: (payload) => setContact(payload),
  delContact: (payload) => delContact(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(contacts);
