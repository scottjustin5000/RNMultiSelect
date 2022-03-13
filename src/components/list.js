import React, { useState, useEffect, useCallback } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  FlatList,
  TextInput,
  View
} from 'react-native'

import Checkbox from './checkbox'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

//here i think this would be a flat list wtih popup
//need option maybe to display enter or whatever..
const MultiSelect = (props) => {
  const renderItem = ({ item }) => (
    <View style={{paddingBottom: 8 }}>
    <Checkbox text={item.title} size={25}  />
    </View>
  )
  return (<SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    )
}

export default MultiSelect