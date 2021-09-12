const express = require('express');
const userRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.routes');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(PORT, () => console.log(`The Server has been started on PORT=${PORT}`));