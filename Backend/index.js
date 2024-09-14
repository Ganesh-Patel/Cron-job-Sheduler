import express from 'express'
import dotenv from 'dotenv/config'
import routes from './Routers/TaskRoutes.js';
import connectToDatabase from './Config/connectToDatabase.js'


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

connectToDatabase();
app.get('/', routes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

