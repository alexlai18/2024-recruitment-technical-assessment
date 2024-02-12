# CHAOS Technical Task

***Complete as many questions as you can.***

## Question 1
You have been given a skeleton function `process_data` in the `data.rs` file.
Complete the parameters and body of the function so that given a JSON request of the form

```json
{
  "data": ["Hello", 1, 5, "World", "!"]
}
```

the handler returns the following JSON:
```json
{
  "string_len": 11,
  "int_sum": 6
}
```

Edit the `DataResponse` and `DataRequest` structs as you need.

## Question 2

### a)
Write (Postgres) SQL `CREATE TABLE` statements to create the following schema.
Make sure to include foreign keys for the relationships that will `CASCADE` upon deletion.
![Database Schema](db_schema.png)

**Answer box:**
```sql
CREATE TYPE question_type AS ENUM ('ShortAnswer', 'MultiSelect', 'MultiChoice');

CREATE TABLE forms (
    id INT PRIMARY KEY,
    title TEXT,
    description TEXT
);

CREATE TABLE questions (
    id INT PRIMARY KEY,
    form_id INT,
    title TEXT,
    question_type question_type,
    FOREIGN KEY (form_id) REFERENCES forms(id) ON DELETE CASCADE
);

CREATE TABLE question_options (
    id INT PRIMARY KEY,
    question_id INT,
    option TEXT,
    FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE
);
```

### b)
Using the above schema, write a (Postgres) SQL `SELECT` query to return all questions in the following format, given the form id `26583`:
```
   id    |   form_id   |           title             |   question_type   |     options
------------------------------------------------------------------------------------------------------------
 2       | 26583       | What is your full name?     | ShortAnswer       | [null]
 3       | 26583       | What languages do you know? | MultiSelect       | {"Rust", "JavaScript", "Python"}
 7       | 26583       | What year are you in?       | MultiChoice       | {"1", "2", "3", "4", "5+"}
```

**Answer box:**
```sql
SELECT q.ID, f.ID, f.TITLE, d.DESCRIPTION, q.QUESTION_TYPE,
    CASE 
        WHEN q.QUESTION_TYPE = 'ShortAnswer' THEN ARRAY[NULL]
        ELSE ARRAY(SELECT option FROM QUESTION_OPTIONS qo WHERE qo.QUESTION_ID = q.ID)
    END AS options
    FROM QUESTIONS q
    WHERE q.FORM_ID = 26583;
```