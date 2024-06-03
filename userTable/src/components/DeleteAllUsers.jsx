import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUsers } from '../store/slices/UserSlice';

const DeleteAllUsers = () => {

  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(deleteUsers());
  }
  return (
    <div>
      <button onClick={() => deleteAllUsers()}>Clear all Users</button>
    </div>
  )
}

export default DeleteAllUsers
