const express = require('express');
const port = 3000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/todos', require('./backend/routes/todoRoutes'))

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})
