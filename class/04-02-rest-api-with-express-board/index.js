import express from "express";
import {
  checkValidationPhoneNumber,
  getToken,
  sendTokenToSMS,
} from "./phone.js";

const app = express();

app.use(express.json());

app.get("/boards", (req, res) => {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다~~",
      contents: "내용이에요!!",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희입니다~~",
      contents: "영희이에요!!",
    },
    {
      number: 3,
      writer: "훈이",
      title: "훈이입니다~~",
      contents: "훈이이에요!!",
    },
  ];

  // 2. 꺼내온 결과 응답 주기
  res.send(result);
});

app.post("/boards", (req, res) => {
  console.log(req.body);
  // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

  // 2. 저장 결과 응답 주기
  res.send("게시물이 등록되었습니다.");
});

app.post("/tokens/phone", (req, res) => {
  const myPhone = req.body.myPhone;

  // 1. 휴대폰 번호 자릿수 확인
  const isValid = checkValidationPhoneNumber(myPhone);
  if (isValid === true) {
    // 2. 핸드폰 토큰 6자리 만들기
    const myToken = getToken();

    // 3. 핸드폰 번호에 토큰 전송
    sendTokenToSMS(myPhone, myToken);
    res.send("인증 완료");
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
