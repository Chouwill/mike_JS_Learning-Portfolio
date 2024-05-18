// 創建一個名為 obj1 的物件，該物件有一個名為 info 的屬性，該屬性也是一個物件
const obj1 = {
  name: "mike",
  info: {
    age: 12,
    address: "taiwan",
    sex: "boy",
    interest: {
      code: "javascript",
      sports: "basketball",
      watch: "movie",
    },
  },
};

// 使用 Object.assign() 方法創建一個新的物件 obj2，並將 obj1 的所有屬性複製到 obj2
// 但是這是淺拷貝，所以 obj1 和 obj2 的 info 屬性實際上指向的是同一個物件
const obj2 = Object.assign({}, obj1);

// 修改 obj1 的 info 屬性的 interest 屬性的 code 屬性
// 因為 obj1 和 obj2 的 info 屬性指向的是同一個物件，所以這個修改也會影響到 obj2
obj1.info.interest.code = "python";

// 打印 obj2 到控制台，你會看到 obj2 的 info 屬性的 interest 屬性的 code 屬性已經被修改為 "python"
// console.log(obj2);

// ---------------------------------------

//   lodash深拷貝

const objOther = {
  name: "mike",
  info: {
    age: 12,
    address: "taiwan",
    sex: "boy",
    interest: {
      code: "javascript",
      sports: "basketball",
      watch: "movie",
    },
  },
};

// 使用 lodash 的 _.cloneDeep() 方法創建一個新的物件 obj3，並將 objOther 的所有屬性複製到 obj3
// 這是深拷貝，所以 objOther 和 obj3 的 info 屬性指向的是兩個不同的物件
const obj3 = _.cloneDeep(objOther);

// 修改 obj1 的 info 屬性的 interest 屬性的 code 屬性
// 但是，由於 objOther 和 obj3 的 info 屬性指向的是兩個不同的物件，所以這個修改不會影響到 obj3
obj1.info.interest.code = "python";

// 打印 obj3 到控制台，你會看到 obj3 的 info 屬性的 interest 屬性的 code 屬性沒有被修改，仍然是 "javascript"
console.log(obj3);