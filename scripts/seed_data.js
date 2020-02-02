import models from "../src/models/index";

/* Generate the data into database for testing purposes */
async function seed() {
  try {
    await models.sequelize.sync({ force: true });

    await models.students.bulkCreate([
      { name: "Bhushan Pagare", username: "sbhushan", password: "password" },
      { name: "Manav Peshwani", username: "smanav", password: "password" },
      { name: "Purvesh Jain", username: "spurvesh", password: "password" },
      { name: "Nipun Khivansara", username: "snipun", password: "password" }
    ]);

    await models.teachers.bulkCreate([
      { name: "Teacher 1", username: "tbhushan", password: "password" },
      { name: "Teacher 2", username: "tmanav", password: "password" },
      { name: "Teacher 3", username: "tpurvesh", password: "password" },
      { name: "Teacher 4", username: "tnipun", password: "password" }
    ]);

    await models.courses.bulkCreate([
      {
        course_id: "CS101",
        name: "Intro. to Programming",
        description:
          "In this course we will learn more about Programming Languages and their Paradigms and will learn how to write codes in C and C++",
        credits: 4
      },
      {
        course_id: "CS102",
        name: "Data Structures and Algorithms",
        description:
          "In this course we will learn how to use different data structure for different problems. And what are different types of algorithms and how to use them in practice.",
        credits: 4
      },
      {
        course_id: "CS201",
        name: "Advanced Data Structures and Algorithms",
        description:
          "In this course we will learn more about advanced data structures and advanced algorithms.",
        credits: 4
      },
      {
        course_id: "CS301",
        name: "Database Management Systems",
        description:
          "In this course we will learn about different database structures and database programming languages like MySQL, MongoDB",
        credits: 4
      }
    ]);

    await models.assignments.bulkCreate([
      {
        name: "Assignment 1",
        description:
          "In this assignment you will write program to check whether number is prime or not.",
        deadline: "2020-02-15",
        course_id: 1
      },
      {
        name: "Assignment 2",
        description:
          "In this assignment you will write program to check whether string is palindrome or not.",
        deadline: "2020-02-20",
        course_id: 1
      },
      {
        name: "Assignment 1",
        description:
          "In this assignment you will write program to demonstrate practical use of array data structures.",
        deadline: "2020-02-18",
        course_id: 2
      },
      {
        name: "Assignment 2",
        description:
          "In this assignment you will write program to check the balanced paranthesis (Use stack).",
        deadline: "2020-02-26",
        course_id: 2
      },
      {
        name: "Assignment 1",
        description:
          "In this assignment you will write program to find the shortes path to reach Delhi from Pune in given graph.",
        deadline: "2020-02-17",
        course_id: 3
      },
      {
        name: "Assignment 2",
        description:
          "In this assignment you will write program for scheduling university exams (Topological Sorting).",
        deadline: "2020-02-29",
        course_id: 3
      },
      {
        name: "Assignment 1",
        description:
          "In this assignment you will write SQL queries to create different tables and demonstrate different constraints.",
        deadline: "2020-02-13",
        course_id: 4
      },
      {
        name: "Assignment 2",
        description:
          "In this assignment you will write a PL/SQL block for finding factorial of given number and store it in table.",
        deadline: "2020-02-21",
        course_id: 4
      }
    ]);
  } catch (e) {
    throw e;
  }
}

seed();
