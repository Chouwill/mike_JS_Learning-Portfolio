import "../css/normalize.css";
import "../css/style.css";
import axios from "axios";
// import Cookies from "js-cookie";
import { useGetRef } from "./utils/useGetRef.js";
import { info, parseReq } from "./utils/useInputData.js";

const { username, password, usernameError, passwordError, terms, btn, loginPage, successPage, logup } = useGetRef();

let isLogin = false;
let initToken = localStorage.getItem("token");

const errorMessageShow = () => {
  isLogin = false;
  if (info.username.error) {
    usernameError.classList.remove("hidden");
    usernameError.textContent = info.username.error;
  }
  if (info.password.error) {
    passwordError.classList.remove("hidden");
    passwordError.textContent = info.password.error;
  }
};

const checkPageStatus = () => {
  // 檢查登入資料
  const token = localStorage.getItem("token");

  if (token) {
    loginPage.classList.add("hidden");
    successPage.classList.remove("hidden");

    initToken = token;
  } else {
    loginPage.classList.remove("hidden");
    successPage.classList.add("hidden");

    isLogin = false;
    initToken = null;
  }
};

const sendLogin = async (req) => {
  try {
    const res = await axios.post("https://vue-lessons-api.vercel.app/auth/login", req);
    return res.data;
  } catch (err) {
    const errorRes = err.response.data.error_message;
    Object.keys(errorRes).forEach((key) => {
      info[key].error = errorRes[key];
    });
    errorMessageShow();
    return { success: false, data: {} };
  }
};

const inputUpdate = (e) => {
  const isTerms = e.target.id === "terms";
  info[e.target.id].value = !isTerms ? e.target.value : e.target.checked;
};

username.addEventListener("input", inputUpdate);
password.addEventListener("input", inputUpdate);
terms.addEventListener("input", inputUpdate);

/**
  { username: "mike", password: "7654321" }
*/
// 登入
btn.addEventListener("click", async () => {
  if (isLogin) return;
  isLogin = true;
  const req = parseReq();
  if (!req.terms) {
    alert("請閱讀使用者條款");
    return;
  }
  const data = await sendLogin(req);
  // Cookies.set("token", data.data.token);
  localStorage.setItem("token", data.data.token);

  console.log("拿到登入後的資料:", data.data.token);
});

// 登出
logup.addEventListener("click", () => {
  // Cookies.remove("token");
  localStorage.removeItem("token");
});

const init = () => {
  checkPageStatus();
};

// 初始化執行
init();

setInterval(() => {
  if (initToken !== localStorage.getItem("token")) {
    checkPageStatus();
  }
}, 300);
