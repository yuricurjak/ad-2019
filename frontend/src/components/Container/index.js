import React, { useEffect, useState } from 'react';
import { ContainerDefault, Title, Header } from './styles';
import api from '../../services/api';
import Register from '../Register';
import ListUsers from '../ListUsers';
import DrawFriend from '../DrawFriend';

export default function Container() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const { data } = await api.get(
      '/users',
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      }
    ); 
    setUsers(data);
  }

  useEffect(() => {
    getUsers();

  }, []);

  return (
  <>
    <Header>
      <Title>Amigo Secreto</Title>
    </Header>
    <ContainerDefault>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Register attUsers={() => {getUsers()}}/>
          <DrawFriend attUsers={() => {getUsers()}}/>
        </div>
        <ListUsers users={users} attUsers={() => {getUsers()}}/>
    </ContainerDefault>
  </>
  );
}
