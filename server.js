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
      name: "테스터",
      birthday: "990101",
      gender: "남자",
      job: "대학원생",
    },
    {
      id: "2",
      image: "https://placeimg.com/64/64/2",
      name: "이시험",
      birthday: "980202",
      gender: "여자",
      job: "대학생",
    },
    {
      id: "3",
      image: "https://placeimg.com/64/64/3",
      name: "최결과",
      birthday: "970303",
      gender: "남자",
      job: "회사원",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
