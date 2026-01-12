import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {getMoreUsers} from '../services/users';
import {useUsersList} from '../hooks/useUsersList';

function LoadMoreButton(): React.JSX.Element {
  const {numOfUsers, dispatch} = useUsersList();

  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(getMoreUsers())}>
        <Text>{numOfUsers} shown. Load more</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoadMoreButton;
