// .t.ts 에서 타입을 지정해 줘야 사용 가능
import { init, exit } from "myPackage";

init({
  url: "true",
});

exit(1);
