const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customer", (req, res) => {
  res.send([
    {
      id: "1",
      image: "https://placeimg.com/64/64/1",
      name: "�׽���",
      birthday: "990101",
      gender: "����",
      job: "���п���",
    },
    {
      id: "2",
      image: "https://placeimg.com/64/64/2",
      name: "�̽���",
      birthday: "980202",
      gender: "����",
      job: "���л�",
    },
    {
      id: "3",
      image: "https://placeimg.com/64/64/3",
      name: "�ְ��",
      birthday: "970303",
      gender: "����",
      job: "ȸ���",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
