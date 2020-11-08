import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import Colors from '../../configs/Colors';
import {
  addContact,
  getContact,
  clearContact,
  updateContact,
} from '../../actions/contactAction';

const ModalContact = (props) => {
  const {
    onClose,
    isActive,
    addContact,
    getContact,
    current,
    updateContact,
    clearContact,
  } = props;
  const [formdata, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    age: '',
  });

  useEffect(() => {
    if (current) {
      setFormData({
        ...formdata,
        ...current,
        age: current.age.toString(),
      });
    }
  }, [current]);
  const onSubmit = () => {
    if (
      formdata.firstName == '' ||
      formdata.lastName === '' ||
      formdata.age === ''
    )
      return;
    if (formdata.id !== '') {
      updateContact(formdata);
    } else {
      addContact(formdata);
    }
    setFormData({
      ...formdata,
      id: '',
      firstName: '',
      lastName: '',
      age: '',
    });
    getContact();
    clearContact();
    onClose();
  };

  const handleClose = () => {
    onClose();
    clearContact();
    setFormData({
      ...formdata,
      firstName: '',
      lastName: '',
      age: '',
    });
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isActive}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.headerModal}>
            <Text style={styles.modalTitle}>Tambah Kontak</Text>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Icon name="times-circle" size={20} color={Colors.main.red} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>
            <TextInput
              value={formdata.firstName}
              placeholder="First Name"
              style={styles.input}
              onChangeText={(firstName) =>
                setFormData({
                  ...formdata,
                  firstName,
                })
              }
            />
            <TextInput
              value={formdata.lastName}
              placeholder="Last Name"
              style={styles.input}
              onChangeText={(lastName) =>
                setFormData({
                  ...formdata,
                  lastName,
                })
              }
            />
            <TextInput
              value={formdata.age}
              placeholder="Age"
              style={styles.input}
              keyboardType="numeric"
              maxLength={3}
              onChangeText={(age) =>
                setFormData({
                  ...formdata,
                  age: parseInt(age),
                })
              }
            />
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity onPress={onSubmit}>
              <Text>Simpan</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClose}>
              <Text>Batal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.main.transparentblack,
  },
  headerModal: {
    height: 50,
    backgroundColor: Colors.main.primary,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 16,
    borderColor: Colors.main.grey,
    height: 50,
    paddingHorizontal: 16,
  },
  closeButton: {
    height: 20,
    width: 20,
    position: 'absolute',
    right: 5,
  },
  modalView: {
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 5,
  },
  modalBody: {
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  modalTitle: {
    textAlign: 'center',
    color: Colors.main.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 16,
  },
});

const mapStateToProps = (state) => ({
  contactFetch: state.contacts.loading,
  current: state.contacts.current,
  contactError: state.contacts.error,
});

const mapDispatchToProps = {
  getContact: () => getContact(),
  addContact: (payload) => addContact(payload),
  getContact: (payload) => getContact(payload),
  updateContact: (payload) => updateContact(payload),
  clearContact: () => clearContact(),
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContact);
