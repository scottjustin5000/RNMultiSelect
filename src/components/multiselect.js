import React, { useState, useRef } from 'react'
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  FlatList
} from 'react-native'

import Button from './button'
import Checkbox from './checkbox'
const srch = require("./search-icon.png")

const MultiSelect = (props) => {

  const [visible, setVisible] = useState(false)
  const DropdownButton = useRef()
  const [dropdownTop, setDropdownTop] = useState(0)
  const [selected, setSelected] = useState([])
  const [data, setData] = useState(props.data)

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown()
  }


  const onItemPress = (item) => {
    const found = selected.find(f => f.id === item.id)
    if(found) {
      const remaining = selected.filter(f => f.id !== item.id)
      setSelected(remaining)
    } else {
      setSelected([...selected, ...[item]])
    }
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
    console.log(selected)
    setVisible(false)
    props.onSubmit(selected)
  }

  const handleChangeText = (e) => {
    if(!e) {
      setData(props.data)
    } else {
      const filtered = props.data.filter(f => f.label.indexOf(e) > -1)
      setData(filtered)
    }
  }

  const renderItem = ({ item }) => {
    const checked = selected.find(s=> s.id === item.id) ?? null
    return (<View style={styles.item}>
      <Checkbox isChecked={checked !== null} text={item.title} item={item} onPress={onItemPress} size={25}  />
    </View>)
  }

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType='none'>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <View style={{flexDirection:'row'}}>
            <Image source={srch} style={styles.iconImageStyle} />
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
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  iconImageStyle: {
    width: 50,
    height: 50,
  },
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
