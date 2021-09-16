const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const fs = require("fs");
const app = express();
const port = 3001;

//미들 웨어 설정
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

//라우터 설정
// app.get("/", (req, res) => res.send("Hello World"));
//들어가서 뜨는 로그인페이지 만약 쿠키들어있으면 성공 뜸
// app.get("/", (req, res) => {
//   if (req.cookies.auth) {
//     res.send("<h1>Login Success</h1>");
//   } else {
//     res.redirect("/login");
//   }
// });
// //메인페이지 추가해봄
app.get("/", (req, res) => {
  if (req.cookies.auth) {
    res.send("<h1>Login Success</h1>");
  }

  // fs.readFile("main.html", (error, data) => {
  //   res.send(data.toString());
  // });
  else {
    // res.redirect("/login");

    //send는 한번만 쓸수 있어서..end처럼끝내버리는거였음 그래서 밑에또부를때충돌남!!
    //여러개쓰고 싶으면 write
    //그거뿐만 아니라 불러올때 충돌나는것도 있음..
    fs.readFile("main.html", (error, data) => {
      res.send(data.toString());
    });
  }
});

app.post("/", (req, res) => {
  if (req.body.loginpage) {
    console.log(req.body);
    res.redirect("/login");
  } else req.body.naver;
  {
    res.redirect("https://www.naver.com/");
  }
});

//html페이지로
app.get("/login", (req, res) => {
  fs.readFile("login.html", (error, data) => {
    res.send(data.toString());
  });
});
//단순페이지요청(클라이언트가ㅏ요청한걸로 쿠키생성)
app.post("/login", (req, res) => {
  //쿠키생성
  let login = req.body.login;
  let password = req.body.password;
  console.log(login, password);
  console.log(req.body);
  if (login == "rint" && password == "1234") {
    res.cookie("auth", true);
    res.redirect("/");
  } else {
    res.redirect("/login");
  }
});

app.listen(port, () => console.log("example app listening on port"));

/*지금해볼거
메인페이지 하나 있음  
뭘 누르면 
로그인 페이지 만들기
로그인 성공하면 어디로 이동, 어디오는건 자기맘*/

//컨트롤 C가 작업끝내는거

//<데이터베이스>
//데이터의 집합
//DBMS 는 뭐냐. 데이터베이스를 관리, 운영하는 역할. 데이터의 저장공간
//MySQL
//MariaDB
//post
//oracle
//SQL server
//DB2
//Access
//SQlite

//DBMS 특징
//1. 데이터의 무결성
//-데이터베이스 안에 있는 데이터는 어떠한 경로를 통해 들어왔든지 오류가 있어선 안됨
//-제약조건이 있음 ex)학생 데이터가 있다면 무조건 학번이 반드시 있어야 된다. 각 학생의 학번은
//서로 중복되면 안되는 제약 조건이 있을 수 있음(예시 학번입력해서 자료찾는것처럼~)
//2. 데이터의 독립성
// 독립적으로 이뤄져야~
//3. 보안
//허가된 사람만 접근이 되어야해~
//4. 데이터 중복의 최소화
//동일한 데이터가 여러번 중복되어서 저장되는 걸 방지해야함

//DBMS의 종류
//-계층형, 망형 관계형 객체지향형, 객체관계형
//관계형이 제일많은 부분차지함 MySQL도 관계형

//계층형(1:N관계): 트리구조, 조직도...단점 한번 구축하게되면 그 구조변경하기 까다로워.검색은 빠르지만  접근의 유연성이 떨어진다
//접근의 유연성 떨어진다=임의의 검색에는 어렵다

//망형(1:N, N:N관계 지원): 빠른 데이터 추출은 가능하지만 내부구조 복잡함..
//관계형(엑셀이라 생각~데이터베이스는 테이블이라는 최소단위로 구성됨 모든데이터는 테이블에 저장됨,정보저장위해서
//하나의 테이블을 여러개로 나눠서 효율적으로 관리 가능.):변화에 빠르게 대응

//데이터: 단편적인 정보
//테이블: 회원이나 제품의 데이터를 입력하기 위해 표 형태로 표현한것
//기본키(pk):기본키 열은 각 행을 구분하는 유일한 열
//기본키열은 중복안되고 비어있어서도 안됨
