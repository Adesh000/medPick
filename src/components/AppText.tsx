import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { TextProps } from '../types';

const AppText: FC<TextProps> = ({ title, fontFamily, fontColor = '#000' }) => {
  return (
    <Text style={[styles.text, { fontFamily, color: fontColor }]}>{title}</Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {},
});
