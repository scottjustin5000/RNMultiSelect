import React, { useState, useRef } from 'react'
import {
  View,
 // Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList
} from 'react-native'

import Button from './button'

import Checkbox from './checkbox'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    label: 'First Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    label: 'Second Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    label: 'Third Item'
  },
];

const MultiSelect = (props) => {
  //if popover render different...
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')
  const [filteredListData, setFilteredListData] = useState([])
  const DropdownButton = useRef()
  const [dropdownTop, setDropdownTop] = useState(0)
  const [selected, setSelected] = useState(undefined)

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown()
  }

  const onItemPress = (item) => {
    setSelected(item)
  //  onSelect(item)
    setVisible(false)
  }
  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + (h - 50))
    })
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const handleSubmit = () => {

  }

  const handleChangeText = () => {

  }

  const renderItem = ({ item }) => (
    // <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
    //   <Text>{item.label}</Text>
    // </TouchableOpacity>
    <View style={styles.item}>
    <Checkbox text={item.title} size={25}  />
    </View>
  )

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType='none'>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <View style={{flexDirection:'row'}}>
            <TextInput 
              placeholder='Search' 
              style={styles.searchInput} 
              onChangeText={(text) => handleChangeText(text)} />
            </View>
           
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.footer}>
              <Button
                title='X'
                backgroundColor='#000'
                onPress={handleCancel}
              />
              <Button
                title='Submit'
                flexGrow={1}
                backgroundColor='#007bff'
                onPress={handleSubmit}
              />
          </View>
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }


  return (
    <TouchableOpacity
    ref={DropdownButton}
    style={styles.button}
    onPress={toggleDropdown}
  >
    {renderDropdown()}
    <Text style={styles.buttonText}>Replace with prop</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5
  },
  footer: {
    flexDirection: 'row'
  },
  cancelButton: {
    width: 60,
    color: '#000',
  },
  submitButton: {
    color: '#f194ff'
  },
  item: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomColor: '#efefef',
    borderBottomWidth: 1
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  searchInput: {
    height: 40,
    width: '100%',
    paddingHorizontal: 5,
    color: '#000',
    backgroundColor: 'white',
    marginBottom: 5,
  },
})

export default MultiSelect
