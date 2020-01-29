const createTables = function (client)  {
  /////////////////////jearheathrtryjy  
  var queryText =
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
         queryText =
      `CREATE TABLE IF NOT EXISTS
        submission(
          id int PRIMARY KEY,
          sid int NOT NULL,
          sub text
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
