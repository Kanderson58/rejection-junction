import { atom } from "recoil";

export const userAtom = atom({
  key: 'user',
  default: ''
});

export const usersAtom = atom({
  key: 'users',
  default: ['kara', 'joe', 'larry']
})