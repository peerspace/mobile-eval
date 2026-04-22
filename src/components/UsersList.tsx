import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../services/users';
import {AppDispatch, RootState} from '../redux';

function UsersList(): React.JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);

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
