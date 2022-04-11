# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: i had to look this one up

  Researched answer: rails new foreign_key
                     rails g Cohort 
                     rails model student 
                     rails g migration add_name_id_to_student name_id:string
                     rails db:migrate 

                     The foreign key would be on the student model, the belongs_to.



2. Which RESTful routes must always be passed params? Why?

  Your answer: im not sure

  Researched answer: Many resetful routs can take params but the one that must have them is Delete. You have to know specifically what you are deleting 

  The RESTful routes that must always have params passed through them are delete, show, and update. These three routes are specific and need additional information to be passed.



3. Name three rails generator commands. What is created by each?

  Your answer: rails db : migrate = uploads changes to the project
               rails db : create  = creates a database
               rails g            = starts a new project

  Researched answer: Those first two
  and rails db:seed Loads the seed data

  rails generate model is also an rails generator command.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students       
Read, the value of students    

action: "POST"   location: /students       
create, in the directory of students

action: "GET"    location: /students/new
read, the value of New students

action: "GET"    location: /students/2  
read, the value of student 2

action: "GET"    location: /students/2/edit    
read, the value of student 2 edit

action: "PATCH"  location: /students/2     
update, to student 2 

action: "DELETE" location: /students/2  
delete, student 2    



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


Carlos wants a way to track his customers average spending to better manage his inventory.

Carlos wants a updated tracking of search request for his products to make sure he highlights them and advertises his

Carlos wants a way to monitor ebay sale prices for his product to gage price points

Carlos wants a way to have a updated price sheet from his vendors to always pay the lowest price

Carlos wants a way to monitor his competitors prices to alway have the lowest price

Carlos wants a way to monitor his competitors search ranking to alway be able to have the highest traffic

Carlos wants a way to monitor his competitors social media engagements to make sure he knows which ones are on teh come up

Carlos wants a way to track the web traffic of his competitors to make sure he stays top of the pack

Carlos wants a way to spy on his competitors emails to insure theyre not plotting against him

Carlos want to launch a dns attack on his competitors to make sure he gets all the holiday sales

