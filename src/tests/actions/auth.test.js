import { login, logout } from '../../actions/auth'

test('should generate login action object', () => {
  const userId = 'lex32ix'
  const action = login(userId);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: userId
  });
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});