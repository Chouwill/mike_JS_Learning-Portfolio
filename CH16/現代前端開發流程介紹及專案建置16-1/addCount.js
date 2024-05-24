function addCount(a, b) {
  return a + b;
}

export const name = "mike";

export default addCount;


// export const name = "mike"; 和 export default addCount; 是模組導出的兩種方式。name 是具名導出，可以被其他模組通過 { name } 的方式導入。而 addCount 是默認導出，可以被其他模組通過 import addCount from './addCount.js' 的方式導入。