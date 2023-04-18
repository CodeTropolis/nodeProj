const express = require('express');
const port = 3000;
const app = express();
const {errorHandler} = require('./backend/middleware/errorMiddleware')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/todos', require('./backend/routes/todoRoutes'))
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})

