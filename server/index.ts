import * as express from 'express';
import haikuRoutes from "./apiRoutes/haikuRoutes";
import promptRoutes from "./apiRoutes/promptRoutes";
import {createDbConnection} from "./database/connection";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import * as cors from 'cors';

dotenv.config();
const app = express();
const dbInstance = createDbConnection();
app.use(cors())
app.use(bodyParser.json());
app.use('/haiku', haikuRoutes);
app.use('/prompt', promptRoutes);


app.listen(process.env.PORT, () => console.log('Example app is listening on port 8000.'));
export default app;