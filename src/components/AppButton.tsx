import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import AppText from './AppText';
import { COLORS, FONTS, SIZE } from '../utils';
import Feather from 'react-native-vector-icons/Feather';
import { ButtonProps } from '../types';

const AppButton: FC<ButtonProps> = ({
  title = '',
  isPrimary = true,
  width = '100%',
  iconName,
  onButtonPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={[
        styles.button,
        {
          backgroundColor: isPrimary ? COLORS.appBlue : COLORS.white,
          borderWidth: isPrimary ? 0 : 1.5,
          width,
        },
        iconName && styles.iconStyle,
      ]}
    >
      <AppText
        title={title}
        fontFamily={FONTS.RB}
        textSize={SIZE.lg}
        fontColor={isPrimary ? COLORS.white : COLORS.headerBg}
      />
      {iconName && <Feather name={iconName} size={30} color={COLORS.white} />}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  iconStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
