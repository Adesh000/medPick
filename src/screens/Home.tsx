import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { COLORS, FONTS, INCIDENTS, SERVICE_DATA, SIZE, STATS } from '../utils';
import Logo from '../../assets/images/c.png';
import {
  AppButton,
  AppText,
  IncidentItem,
  ServiceBox,
  StaticsComponent,
} from '../components';

enum TAB {
  ASSET = 'asset',
  INCIDENT = 'incident',
}

const Home = ({ navigation }) => {
  const [tabValue, setTabValue] = useState(TAB.ASSET);
  const [listData, setListData] = useState(SERVICE_DATA);
  const [hideHospitalBox, setHideHospitalBox] = useState(false);
  const onChangeTab = (value: TAB) => {
    if (value === tabValue) return;
    if (value === TAB.ASSET) {
      setListData(SERVICE_DATA);
    } else if (value === TAB.INCIDENT) {
      setListData(INCIDENTS);
    }
    setTabValue(value);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.header, styles.flexBetween]}>
        <Image
          source={Logo}
          style={{ width: 50, height: 50, resizeMode: 'contain' }}
        />
        <View style={[styles.iconsContainer, styles.flexBetween]}>
          <Icon name="qr-code" size={20} color={COLORS.white} />
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={30} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.darkBg} />
      <View style={styles.hospitalBox}>
        <AppText title="ABC Hospital" textSize={SIZE.xlg} />
        <AppText title="Branch Name" textSize={SIZE.md} />
        {!hideHospitalBox && (
          <View
            style={[
              styles.flexBetween,
              {
                marginTop: 20,
              },
            ]}
          >
            <View>
              <AppText title="All Assets are in order" fontFamily={FONTS.RB} />
              <AppText title="00 hr : 00 m : 00 s" fontFamily={FONTS.IB} />
            </View>
            <Octicons name="check" size={50} color={COLORS.white} />
          </View>
        )}
      </View>

      <FlatList
        data={listData}
        keyExtractor={item => item.id.toString()}
        onScroll={e => {
          const yOffset = e.nativeEvent.contentOffset.y;
          setHideHospitalBox(yOffset > 10); // hide when scrolled down a bit
        }}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <>
            <FlatList
              data={STATS}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={{
                marginVertical: 20,
                gap: 9,
                paddingHorizontal: 5,
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <StaticsComponent item={item} />}
            />

            <View style={[styles.buttonGroup, styles.flexBetween]}>
              <AppButton
                title="Assets"
                width={150}
                onButtonPress={() => onChangeTab(TAB.ASSET)}
                isPrimary={tabValue === TAB.ASSET}
              />
              <AppButton
                title="Incidents"
                isPrimary={tabValue === TAB.INCIDENT}
                width={150}
                onButtonPress={() => onChangeTab(TAB.INCIDENT)}
              />
            </View>
          </>
        }
        contentContainerStyle={{
          gap: 10,
          marginHorizontal: 20,
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          tabValue === TAB.ASSET && (
            <AppButton title="All Services" iconName={'arrow-right'} />
          )
        }
        renderItem={({ item }) =>
          tabValue === TAB.ASSET ? (
            <ServiceBox
              machineName={item?.machineName}
              machineNo={item?.machineNo}
              serviceCount={item?.serviceCount}
              desc={item?.desc}
            />
          ) : (
            <IncidentItem item={item} />
          )
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.headerBg,
    padding: 20,
  },
  buttonGroup: {
    marginVertical: 10,
  },
  iconsContainer: {
    width: 60,
  },
  darkBg: {
    backgroundColor: COLORS.headerBg,
    position: 'absolute',
    top: 90,
    width: '100%',
    height: 50,
  },
  hospitalBox: {
    backgroundColor: COLORS.appBlue,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
