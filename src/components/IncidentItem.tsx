import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from './AppText';
import { COLORS, FONTS, SIZE } from '../utils';
import Feather from 'react-native-vector-icons/Feather';
import AppButton from './AppButton';
const IncidentItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText
          title={item?.title}
          fontFamily={FONTS.RB}
          textSize={SIZE.slg}
          fontColor={COLORS.headerBg}
        />
        <Feather name="arrow-right" size={30} color={COLORS.headerBg} />
      </View>
      <View style={styles.hLine} />
      <View style={styles.header}>
        <AppText
          title={`${item?.count} Due`}
          fontFamily={FONTS.IB}
          textSize={SIZE.slg}
          fontColor={parseInt(item?.count) ? COLORS.orange : COLORS.headerBg}
        />
        <AppButton title="Request" iconName="plus" width={150} />
      </View>
    </View>
  );
};

export default IncidentItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 15,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hLine: {
    width: '100%',
    height: 2,
    backgroundColor: COLORS.grey,
    marginVertical: 20,
  },
});
