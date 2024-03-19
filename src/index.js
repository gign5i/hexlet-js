import pkg from "lodash";
const { last } = pkg;
export const func = (array) => {
  return last(array);
};
const arr = ["1", "2", 3 , 4 , 5];
console.log(func(arr));
