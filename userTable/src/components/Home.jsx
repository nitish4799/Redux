import React from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import { fakeUserData } from '../api';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/UserSlice';
import DisplayUsers from './DisplayUsers';

const Home = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };

  return (
    <>
        <div className='content'>
            <div className='admin-table'>
                <div className='admin-subtitle'>List of User Details</div>
                <button onClick={() =>  addNewUser(fakeUserData()) }>Add New User</button>
            </div>
            <ul>
                <DisplayUsers/>
            </ul>
            <hr />
            <DeleteAllUsers/>
        </div>
    </>
  )
}

export default Home
