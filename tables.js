const createTables = function (client)  {
    const queryText =
      `CREATE TABLE IF NOT EXISTS
        stu(
          id int PRIMARY KEY,
          name VARCHAR(128) NOT NULL,
          class VARCHAR(128) NOT NULL,
          rollno VARCHAR(128) NOT NULL,
          dob TIMESTAMP
        )`;
  
    client.query(queryText)
      .then((res) => {
        console.log(res);
    
      })
      .catch((err) => {
        console.log(err);
      });
  }
module.exports={createTables};
require('make-runnable');
