import express from 'express';

const app = express();

const server = app.listen(8090, () => {
    console.log(`Server is up and running on port 8080`);
});