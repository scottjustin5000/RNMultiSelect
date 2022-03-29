import React from 'react'
import {storiesOf} from '@storybook/react-native'
import MultiSelect from './multiselect'

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

  const handleSubmit = (selected) => {
    console.log('SELECTED', selected)
  }

storiesOf('Test Component', module).add('example', () => <MultiSelect onSubmit={handleSubmit} data={data} title='Select something..' />)