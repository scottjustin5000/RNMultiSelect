import React, { useState, useRef } from 'react'
import {
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
  StyleSheet } from 'react-native'
  const defaultCheckImage = require("./check.png")

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.isChecked || false)
  const spring = useRef(new Animated.Value(1))

  const onPress = () => {
    const {
      disableBuiltInState = false,
      useNativeDriver = true,
      bounceEffect = 1,
      bounceFriction = 3,
    } = props
    if (!disableBuiltInState) {
        spring.current.setValue(0.7)
        Animated.spring(spring.current, {
          toValue: bounceEffect,
          friction: bounceFriction,
          useNativeDriver,
        }).start()
        setChecked(!checked)
        props.onPress && props.onPress(!checked)
    } else {
      spring.current.setValue(0.7)
      Animated.spring(spring.current, {
        toValue: bounceEffect,
        friction: bounceFriction,
        useNativeDriver,
      }).start()
      props.onPress && props.onPress(checked)
    }

  }

  const containerStyle = (
    checked,
    fillColor,
    unfillColor
  ) => {
    return {
      width: 25,
      height: 25,
      borderWidth: 1,
      borderColor: '#ffc484',
      borderRadius: props.size / 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: checked ? fillColor : unfillColor,
    }
  }

  const textStyle = (checked) => {
    return {
      fontSize: 16,
      color: '#757575',
      fontStyle: checked ? 'italic' : 'normal',
    }
  }

if(!spring.current) return (<View />)

  return ( 
  <TouchableOpacity style={{ alignItems:'center', flexDirection:'row' }} onPress={onPress}>
      <Animated.View  style={[{ transform: [{ scale: spring.current }] },
          containerStyle(checked, '#ffc484','#ffc484')
        ]}>
     { checked && <Image source={defaultCheckImage} style={styles.iconImageStyle} /> }
     
      </Animated.View>
      <View style={[styles.textContainer]}>
          <Text
            style={[
              textStyle(checked),
              textStyle,
            ]}
          >
            {props.text}
          </Text>
        </View>
  </TouchableOpacity>)

}

const styles = StyleSheet.create({
  iconImageStyle: {
    width: 10,
    height: 10,
  },
  textContainer: {
    marginLeft: 16,
  }
})


export default Checkbox