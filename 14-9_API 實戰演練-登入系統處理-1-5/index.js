/**
 * API https://vue-lessons-api.vercel.app/auth/registered
 *  username: string
 *  password: string
 *  email: string
 *  sex: string
 *  age: string
 *  terms: boolean
 * 
 * {
    value: "",
    error: "",
  }
 */

// input
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const sex = document.querySelectorAll("input[name='sex']");
const terms = document.querySelector("#terms");

// error message
const usernameError = document.querySelector(".username-error");
const passwordError = document.querySelector(".password-error");
const emailError = document.querySelector(".email-error");

// 送出按鈕
const btn = document.querySelector(".btn");
// 註冊的頁面
const loginPage = document.querySelector("#login-page");
// 註冊完成頁面
const successPage = document.querySelector("#success-page");

let isClick = false;

const info = {
  username: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  sex: {
    value: "",
    error: "",
  },
  age: {
    value: "",
    error: "",
  },
  terms: {
    value: "",
    error: "",
  },
};

function inputUpdate(e) {
  let id = e.target.id;
  if (["boy", "girl"].includes(id)) {
    id = "sex";
  }
  info[id].value = e.target.value;
  console.log(info);
}

username.addEventListener("input", inputUpdate);
password.addEventListener("input", inputUpdate);
email.addEventListener("input", inputUpdate);
age.addEventListener("input", inputUpdate);
sex[0].addEventListener("input", inputUpdate);
sex[1].addEventListener("input", inputUpdate);
terms.addEventListener("input", inputUpdate);

btn.addEventListener("click", () => {
  if (isClick) return;
  isClick = true;
  const req = {
    username: info.username.value,
    password: info.password.value,
    email: info.email.value,
    sex: info.sex.value,
    age: info.age.value,
    terms: info.terms === "on",
  };
  console.log(req);

  axios
    .post("https://vue-lessons-api.vercel.app/auth/registered", req)
    .then((res) => {
      console.log(res.data);
      loginPage.classList.add("hidden");
      successPage.classList.remove("hidden");
    })
    .catch((error) => {
      console.log(error);
    });
});
// API 實戰演練-登入系統處理-3 (送出資料) 完成
// -4未完
// -5未完
