import React from "react";
import "./App.css";
import Customer from "./components/Customer";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const customer = [
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
];

function App() {
  return (
    <Paper
      sx={{
        width: "100%",
        marginTop: 3,
        overflowX: "auto",
      }}
    >
      <Table
        sx={{
          minWidth: 1080,
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customer.map((c) => (
            <Customer
              key={c.id}
              id={c.id}
              name={c.name}
              image={c.image}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
