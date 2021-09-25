const app = require('express')();
const PORT = 8080;

app.listen(
    PORT, 
    () => console.log(`It alive on http://localhost:${PORT}`)
)

app.get('/employee', (req, res)=>{
  res.status(200).send({
    department: 'Software and IT Services',
    location:'United Staes'
  })
});

app.post('/employee/:id', (req, res)=>{
  const { id } = req.params;
  const { age } = req.body;

  if(!age){
    res.status(418).send({message: 'We need age!'})
  }

  res.send({
    employee: `The age ${age} and ID of ${id}`,
  });

});
