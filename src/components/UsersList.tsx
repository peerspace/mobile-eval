import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewToken,
} from 'react-native';

import {getMoreUsers} from '../services/users';
import {User} from '../redux/usersSlice';
import {segmentAnalytics} from '../services/analytics';
import {useUsersList} from '../hooks/useUsersList';

function UsersList(): React.JSX.Element {
  const [isScrolling, setIsScrolling] = useState(false);
  const {users, numOfUsers, firstScrolled, setFirstScrolled, dispatch} = useUsersList();

  const onViewableItemsChanged = (info: {
    viewableItems: ViewToken<User>[];
    changed: ViewToken<User>[];
  }) => {
    if (info.viewableItems.length > 0) {
      segmentAnalytics.track('item views', {
        item: info.viewableItems[0].item,
      });
    }
  };

  const onMomentumScrollEnd = () => setIsScrolling(false);
  const onMomentumScrollBegin = () => setIsScrolling(true);

  const onScroll = () => {
    if (!isScrolling && firstScrolled) {
      segmentAnalytics.track('user scrolled', {});
    }
  };

  useEffect(() => {
    if (isScrolling && !firstScrolled) {
      setFirstScrolled(true);
    }
  }, [isScrolling, firstScrolled, setFirstScrolled]);

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View>
              <Image
                source={{uri: item.url}}
                style={{width: 100, height: 100}}
              />
              <Text>{item.title}</Text>
            </View>
          );
        }}
        onEndReachedThreshold={0.1}
        onViewableItemsChanged={onViewableItemsChanged}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onMomentumScrollBegin={onMomentumScrollBegin}
        scrollEventThrottle={16}
        onScroll={onScroll}
      />

      <TouchableOpacity onPress={() => dispatch(getMoreUsers())}>
        <Text>{numOfUsers} shown. Load more</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UsersList;
