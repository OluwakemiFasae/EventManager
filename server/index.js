import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({
    message: 'This is the root link'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server running')
});
