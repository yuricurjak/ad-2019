import React from 'react';
import api from '../../services/api';
import { Box, ButtonForm, Wrapper} from "./styles";

export default function ListUsers(props) {

  async function handleDelete(id) {
    try {
      const { data } = await api.delete(
        `/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
      console.log(data);
      props.attUsers();
      console.log('delete', id);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <Box>
      {props.users.length > 0 && 
      props.users.map(user => (
        <div key={user._id}>
          <h4>Nome: {user.name}</h4>
          <p>Email: {user.email}</p>
          <p>Amigo: {user.friend}</p>
          <Wrapper>
            <ButtonForm type="button" onClick={() => handleDelete(user._id)}>Deletar</ButtonForm>
          </Wrapper>
        </div>
      ))
      }
    </Box>
  )
}