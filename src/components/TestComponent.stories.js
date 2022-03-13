import React from 'react'
import {storiesOf} from '@storybook/react-native'

import TestComponent from './TestComponent'
import Checkbox from './checkbox'
import MultiSelect from './multiselect'

storiesOf('Test Component', module).add('example', () => <MultiSelect />)