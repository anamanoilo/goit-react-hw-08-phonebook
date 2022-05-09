import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginContact, registerContact } from 'redux/phonebook/auth-operations';
import Button from 'components/Button';
import s from './AuthForm.module.css';

const AuthForm = ({ type }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onChangeInput = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'email':
        setEmail(value);
        return;
      case 'password':
        setPassword(value);
        return;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const onAuthSubmit = (e, type) => {
    e.preventDefault();
    if (type === 'register') {
      dispatch(registerContact({ name, email, password }));
    }
    if (type === 'login') {
      dispatch(loginContact({ email, password }));
    }
    reset();
  };

  return (
    <form className={s.form} onSubmit={e => onAuthSubmit(e, type)}>
      {type === 'register' ? (
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            required
            autoComplete="off"
            onChange={onChangeInput}
            value={name}
          />
        </label>
      ) : null}

      <label className={s.label}>
        Email
        <input
          className={s.input}
          type="email"
          name="email"
          required
          autoComplete="off"
          onChange={onChangeInput}
          value={email}
        />
      </label>
      <label className={s.label}>
        Password
        <input
          className={s.input}
          type="password"
          name="password"
          required
          autoComplete="off"
          onChange={onChangeInput}
          value={password}
        />
      </label>
      <Button
        type="submit"
        label={type === 'register' ? 'Sign Up' : 'Log In'}
      />
    </form>
  );
};

export default AuthForm;
