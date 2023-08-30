import { DataSource } from "typeorm";
import { User } from "./entities/User.js";

const dataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  database: "user_reg",
  username: "root",
  password: "",
  entities:[User],
  synchronize: true,
  logging: false
});


const initialize = () =>{
dataSource.initialize().then(() => {
    console.log("Connected to DB!");
  }).catch(err => {
    console.error("Failed to connect to DB: " + err);
  });
}
export default 
{dataSource,initialize};
