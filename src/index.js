import { app } from "./app.js";

app.listen(process.env.PORT || 8080, () => {
  console.log(`server is runing on port ${process.env.PORT}`);
});
