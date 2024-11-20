import React, { useState, useEffect } from "react";
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

function App() {
  // state를 useState로 선언
  const [customer, setCustomer] = useState([]);

  // componentDidMount 대신 useEffect 사용
  useEffect(() => {
    callApi()
      .then((res) => setCustomer(res))
      .catch((err) => console.log(err));
  }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때 한 번만 실행됨

  // 비동기 API 호출 함수
  const callApi = async () => {
    const response = await fetch("/api/customer");
    const body = await response.json();
    return body;
  };

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
          {customer.length > 0 ? (
            customer.map((c) => (
              <Customer
                key={c.id}
                id={c.id}
                name={c.name}
                image={c.image}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                Loading...
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
