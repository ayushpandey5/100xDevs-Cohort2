const express = require("express");
const zod = require("zod");

const app = express();

app.use(express.json());

const user = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});

app.post("/", function (req, res) {
  const users = req.body.user; //just req.body if we are sending a single object
  const response = user.safeParse(users);
  res.send(response);
});

app.listen(3000);
