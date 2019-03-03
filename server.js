const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();
const cors = require('cors');



app.use(cors());


app.use('/graphql', 
  graphqlHTTP({
    schema, //same as 'schema: schema'
    graphiql: true
  }),
  
);





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server successfully started on ${PORT}`))