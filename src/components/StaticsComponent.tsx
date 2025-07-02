import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from './AppText';
import { COLORS, FONTS, SIZE } from '../utils';

const StaticsComponent = ({ item }) => {
  return (
    <View style={styles.container}>
      <AppText
        title={item?.count}
        fontFamily={FONTS.IB}
        textSize={SIZE.xlg}
        fontColor={COLORS.appBlue}
        style={{ marginBottom: 20 }}
      />
      <AppText
        title={item?.title}
        fontFamily={FONTS.RB}
        textSize={SIZE.smd}
        fontColor={COLORS.headerBg}
      />
    </View>
  );
};

export default StaticsComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 18,
    elevation: 10,
    width: 98,
  },
});
