import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { FlatList, Linking, View } from 'react-native';
import {
  AppButton,
  AppText,
  DrawerHeader,
  DrawerListItem,
} from '../components';
import { Assets, COLORS, DRAWER_ITEMS } from '../utils';

export default function CustomDrawerContent({ navigation }) {
  return (
    <>
      <DrawerHeader navigation={navigation} />
      <FlatList
        data={DRAWER_ITEMS}
        contentContainerStyle={{ padding: 10 }}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <DrawerListItem title={item?.title} image={item?.iconName} />
        )}
        ListFooterComponent={
          <View style={{ marginVertical: 20 }}>
            <AppButton title="Biomedical" iconName="chevron-down" />
          </View>
        }
      />
    </>
  );
}
