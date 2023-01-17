const jwt = require("jsonwebtoken");

let privateKey = "my-dev-gram-key";
let info = {
  id: "devGram",
  email: "devgram@gmail.com",
};

let ret = jwt.sign(info, privateKey);
console.log(ret);
