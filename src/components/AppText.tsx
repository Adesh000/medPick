import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { TextProps } from '../types';
import { COLORS, FONTS, SIZE } from '../utils';

const AppText: FC<TextProps> = ({
  title,
  fontFamily = FONTS.RB,
  fontColor = COLORS.white,
  textSize = SIZE.md,
  style,
}) => {
  return (
    <Text
      style={[
        styles.text,
        { fontFamily, color: fontColor, fontSize: textSize },
        style,
      ]}
    >
      {title}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {},
});
