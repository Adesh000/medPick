import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import AppText from './AppText';
import { COLORS, FONTS, SIZE } from '../utils';
import Feather from 'react-native-vector-icons/Feather';
import { ServiceProps } from '../types';

const ServiceBox: FC<ServiceProps> = ({
  machineName,
  machineNo,
  desc,
  serviceCount,
}) => {
  const isServiceRequired = parseInt(serviceCount) >= 10;
  return (
    <View style={styles.container}>
      {isServiceRequired && <View style={styles.blankBg} />}
      <View style={{ padding: 15 }}>
        <View style={[styles.bottomText, { marginBottom: 25 }]}>
          <AppText
            title={machineName}
            fontFamily={FONTS.RB}
            textSize={SIZE.lmd}
            fontColor={COLORS.headerBg}
          />
          {isServiceRequired && (
            <Feather name="alert-triangle" size={30} color={COLORS.white} />
          )}
        </View>
        <AppText
          title={desc}
          fontFamily={FONTS.RSB}
          fontColor={COLORS.headerBg}
        />
        <View style={styles.bottomText}>
          <AppText
            title={machineNo}
            fontFamily={FONTS.IM}
            fontColor={COLORS.headerBg}
          />
          <AppText
            title={`${serviceCount} Services`}
            fontFamily={FONTS.IM}
            fontColor={isServiceRequired ? COLORS.white : COLORS.orange}
          />
        </View>
      </View>
    </View>
  );
};

export default ServiceBox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    elevation: 5,
  },
  bottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blankBg: {
    backgroundColor: COLORS.orange,
    position: 'absolute',
    right: 0,
    width: '40%',
    height: '100%',
  },
});
