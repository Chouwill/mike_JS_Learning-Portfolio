import Cookies from "js-cookie";

const cookie = {
  set(key, value) {
    let val = value;
    if (typeof val === "object") {
      val = JSON.stringify(val);
    }
    Cookies.set(key, val);
  },
  get(key) {
    let content = Cookies.get(key);
    if (!content) {
      return null;
    }
    if (content[0] === "{" && content[content.length - 1] === "}") {
      content = JSON.parse(Cookies.get(key));
    }
    return content;
  },
  remove(key) {
    if (key === "all") {
      Object.keys(Cookies.get()).forEach((itemkey) => {
        Cookies.remove(itemkey);
      });
      return;
    }
    Cookies.remove(key);
  },
};
const local = {
  set(key, value) {
    let val = value;
    if (typeof val === "object") {
      val = JSON.stringify(val);
    }
    localStorage.setItem(key, value);
  },
  get(key) {
    let content = localStorage.getItem(key);
    if (!content) {
      return null;
    }
    if (content[0] === "{" && content[content.length - 1] === "}") {
      content = JSON.parse(localStorage.getItem(key));
    }
    return content;
  },
  remove(key) {
    if (key === "all") {
      localStorage.clear();
      return;
    }
    localStorage.removeItem(key);
  },
};

export { cookie, local };
