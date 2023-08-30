import express from "express";
import dataSource from "./db/dataSource.js";
import usersRouter from "./routers/users.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('Server Up!')
});


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  dataSource.initialize()
});
  
  export default app;

