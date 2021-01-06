# dashclicks_trello_nodejsApi

Dashclicks Challenge for Backend Developer:


Task management system similar to Trello

1. Create GET, PUT, POST, DELETE APIs for users.

2. Create GET, PUT, POST, DELETE APIs for task.



Two Api created using nodejs, express,  Storing the data in Mongodb.

Requirements:
1. node & npm
2. git
3. Mongodb


Running Locally

    Make sure you have Node.js 

  1. git clone ghttps://github.com/ankitsahu19/dashclicks_trello_nodejsApi.git
  2. cd node-js-sample
  3. npm install
  4. npm start


Your app should now be running on localhost:3000.

Two Api :
       1. http://localhost:3000/users - Get, Post, Put, Delete
       
       2. http://localhost:3000/tasks - Get, Post, Put, Delete
       
       
 
Postman
    Install Postman to interact with REST API
    
   Users: 
   1. URL: http://localhost:3000/users
      Method: GET (get all data from database)
      
      
   
   2. URL: http://localhost:3000/users
      Method: POST (Add user to database)
        Body: {
            "name": "Aman",
            "tasks": [
                {
                    "task": "T13"
                },
                {
                    "task": "T4"  
                }
            ]
            }
            
   3. URL: http://localhost:3000/users/:id
      Method: PUT (Update user from database)
      Body: {
            "name": "Aman",
            "tasks": [
                {
                    "task": "T13"
                },
                {
                    "task": "T4"  
                }
            ]
        }
      
   4.  URL: http://localhost:3000/users delete all users
        http://localhost:3000/users/:id delete user of id
        Method: DELETE
        
   Task: 
   1. URL: http://localhost:3000/Tasks/:id
      Method: GET (get all task from database of user-id)
      
      
   
   2. URL: http://localhost:3000/Tasks/:id
      Method: POST (Add task of user-id)
        Body: {
            
                {
                    "task": "T3"
                },
                {
                    "task": "T4"  
                }
            
            }
            
   3. URL: http://localhost:3000/Tasks/:id/tasks/:taskid
      Method: PUT (Update task from database)
      Body: 
                {
                    "task": "T13"
                },
                {
                    "task": "T4"  
                }
            
        
      
   4.  URL:  http://localhost:3000/Tasks/:id/tasks delete all tasks
        http://localhost:3000/Tasks/:id/tasks/:taskid delete specific task of user -id of 
        Method: DELETE
            
        
        
       
        
  
   

