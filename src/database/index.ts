
const { Client } = require('pg');

// Replace the following values with your own database connection details
const dbConfig = {
    user: 'root',
    host: 'localhost',
    database: 'testing',
    password: '1234',
    port: 5432,
};

// Create a new PostgreSQL client
const client = new Client(dbConfig);

// Connect to the PostgreSQL server
client.connect()
  .then(() => {
    console.log('Connected to the PostgreSQL database');
    
    // Now you can perform database operations here
    
  })
  .catch((err:any) => console.error('Error connecting to the PostgreSQL database:', err));


export default Client