import { Image, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import AppText from './AppText';
import { COLORS } from '../utils';
import Feather from 'react-native-vector-icons/Feather';
import { DrawerListItemProps } from '../types';

const DrawerListItem: FC<DrawerListItemProps> = ({ title, image }) => {
  return (
    <View style={[styles.contianer, styles.flexBetween]}>
      <View style={styles.flexBetween}>
        <Image source={image} style={styles.image} />
        <AppText title={title} fontColor={COLORS.headerBg} />
      </View>
      {title === 'Assets' && (
        <Feather name={'chevron-down'} size={30} color={COLORS.headerBg} />
      )}
    </View>
  );
};

export default DrawerListItem;

const styles = StyleSheet.create({
  contianer: {
    padding: 15,
    borderBottomWidth: 2,
    borderColor: COLORS.grey,
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 15,
  },
});
