import pkg from 'lodash';

const { last } = pkg;
export const func = (array) => last(array);
const arr = ['1', '2', 3, 4, 5];
console.log(func(arr));
