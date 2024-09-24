import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {useDispatch} from 'react-redux';
import {getUsers} from '../services/users';
import {AppDispatch} from '../redux';

function UsersList(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}

export default UsersList;
