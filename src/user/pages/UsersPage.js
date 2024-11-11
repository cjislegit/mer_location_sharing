import React from 'react';
import UsersList from '../components/UsersList';

const UsersPage = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'CJR',
      image:
        'https://images.unsplash.com/photo-1720916413474-fc3c623a222a?q=80&w=1252&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      placeCount: 7,
    },
  ];
  return <UsersList items={USERS} />;
};

export default UsersPage;
