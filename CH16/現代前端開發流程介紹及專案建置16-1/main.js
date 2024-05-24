import addCount, { name } from "./addCount.js";

const a = addCount(1, 2);

console.log("addCount=>", a);

console.log("name=>", name) ;


// import addCount, { name } from "./addCount.js";：這行程式碼從 addCount.js 檔案中導入了兩個東西。addCount 是預設導出（default export），而 name 是具名導出（named export）。預設導出在一個模組中只能有一個，而具名導出可以有多個。

// const a = addCount(1, 2);：這行程式碼呼叫了導入的 addCount 函數，並將結果儲存到常數 a 中。

// console.log("addCount=>", a);：這行程式碼將 addCount 函數的結果輸出到控制台。

// console.log("name=>", name);：這行程式碼將導入的 name 變數輸出到控制台。