import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

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
    <div>
      {customer.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            name={c.name}
            image={c.image}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
