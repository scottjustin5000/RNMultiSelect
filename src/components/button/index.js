import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const AppButton = ({ onPress, title, size, backgroundColor, flexGrow }) => {
 return (

        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress} 
            style={[
                styles.appButtonContainer,
                size === 'sm' && {
                  paddingHorizontal: 8,
                  paddingVertical: 6,
                  elevation: 6
                },
                flexGrow && { flexGrow },
                backgroundColor && { backgroundColor }
              ]}>
            <Text style={[styles.appButtonText, size === 'sm' && { fontSize: 14 }]}>
                {title}
            </Text>
        </TouchableOpacity>

 )
}
const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: '#009688',
      borderRadius: 1,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase'
    }
  })

export default AppButton