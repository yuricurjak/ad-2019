import React, { useState } from 'react';
import api from '../../services/api';
import { Form, ButtonForm, 
          Wrapper, FormItem } from "./styles";


export default function DrawFriend(props) {
  const [message, setMessage] = useState('');

  async function handleSubmit() {
    try {
      /* const { data } = await api.post(
        '/draw'
      );
      console.log(data); */
      setMessage('Sorteio realizado com sucesso');
      props.attUsers();
    } catch (err) {
      console.log(err.message);
      setMessage('Falha ao realizar o sorteio');
    }
  }

  return (
    <Form>
      <FormItem>
        <h3 style={{marginTop: 0, margin: '0 auto'}}>Realizar sorteio</h3>
      </FormItem>
      <FormItem>
        <Wrapper>
          <ButtonForm type="button" onClick={handleSubmit}>Sortear</ButtonForm>
        </Wrapper>
      </FormItem>
      <FormItem>
      {message && (
          <h4 style={{padding: 0, fontSize: '0.5em', marginLeft: '5px'}}>{message}</h4>
        )}
      </FormItem>
    </Form>
  );
}