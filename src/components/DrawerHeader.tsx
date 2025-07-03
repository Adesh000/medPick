import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, SIZE } from '../utils';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppText from './AppText';

const DrawerHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => navigation.closeDrawer()}
      >
        <Ionicon name={'close'} size={25} color={COLORS.headerBg} />
      </TouchableOpacity>
      <View style={styles.userContainer}>
        <View style={styles.profile}>
          <FontAwesome name={'user'} size={25} color={COLORS.white} />
        </View>
        <View>
          <AppText
            title="Krishn Kumar"
            textSize={SIZE.slg}
            fontColor={COLORS.headerBg}
          />
          <AppText title="Admin" fontColor={COLORS.headerBg} />
        </View>
      </View>
      <View style={[styles.flexBetween, { paddingHorizontal: 10 }]}>
        <View style={styles.flexBetween}>
          <Ionicon name={'location-sharp'} size={25} color={COLORS.appBlue} />
          <AppText
            title="Branch"
            fontColor={COLORS.headerBg}
            style={{ marginLeft: 10 }}
          />
        </View>
        <Feather name={'chevron-down'} size={30} color={COLORS.headerBg} />
      </View>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: COLORS.white,
    elevation: 5,
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profile: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: COLORS.appBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  userContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
