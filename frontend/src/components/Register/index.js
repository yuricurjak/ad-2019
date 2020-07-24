import React, { useState } from 'react';
import api from '../../services/api';
import { Form, ButtonForm, 
          Wrapper, FormItem } from "./styles";


export default function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit() {
    try {
      const { data } = await api.post(
        '/users',
        {
          name,
          email
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );
        console.log(data);
      setMessage('Pessoa cadastrada com sucesso');
      props.attUsers();
    } catch (err) {
      console.log(err.message);
      setMessage('Falha ao tentar cadastrar');
    }
  }

  return (
    <Form>
      <FormItem>
        <h3 style={{marginTop: 0, margin: '0 auto'}}>Cadastrar pessoa</h3>
      </FormItem>
      <FormItem>
        <label style={{marginTop: -5}} htmlFor="name">Nome</label>
        <input style={{padding: 0}} type="text" id="name" required onChange={(event) => setName(event.target.value)}/>
      </FormItem>
      <FormItem>
        <label style={{marginTop: -5}} htmlFor="email">Email</label>
        <input style={{padding: 0}} type="email" id="email" required onChange={(event) => setEmail(event.target.value)}/>
      </FormItem>
      <FormItem>
        <Wrapper>
          <ButtonForm type="button" onClick={handleSubmit}>Cadastrar</ButtonForm>
        </Wrapper>
        {message && (
          <h4 style={{padding: 0, fontSize: '0.5em', marginLeft: '5px', maxWidth: '100px'}}>{message}</h4>
        )}
      </FormItem>
    </Form>
  );
}