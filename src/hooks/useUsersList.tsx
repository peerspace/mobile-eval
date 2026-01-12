import {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux';
import {getUsers} from '../services/users';

export const useUsersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
  const numOfUsers = useMemo(() => users.length, [users]);
  const [firstScrolled, setFirstScrolled] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return {
    users,
    numOfUsers,
    firstScrolled,
    setFirstScrolled,
    dispatch,
  };
};
