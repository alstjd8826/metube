import express from "express";// babel을 설치하고 .bablerc파일을 생성해야 import문 사용 가능하다.
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouters";
import userRouter from "./routers/userRouters";//유저가 전송하는 데이터를 이해할 수 있게 특정 형태로 처리해 주는 미들웨어
import routes from "./routes";


const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(helmet());
app.use(morgan("dev")) // 누가 들어오는지, 어디에 접속하는지 알 수 있다.

app.use("/", globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

app.set("view engine","pug"); // express 뷰엔진 세팅

export default app;