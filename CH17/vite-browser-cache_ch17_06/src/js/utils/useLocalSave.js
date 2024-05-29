const cookie = {
  set() {},
  get() {},
  remove() {},
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
    let conent = localStorage.getItem(key);
    if (conent === null) {
      return conent;
    }
    if (conent[0] === "{" && conent[conent.length - 1] === "}") {
      conent = JSON.parse(localStorage.getItem(key));
    }
    return conent;
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
