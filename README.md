////
1.Insert Admin

db.users.insert( { name: "Classic005",email: "classic@email.com",password: "password",  role:"Admin",mobile: "789-456-3120" } )

2. npm install

3. update env

4. npm run dev


Practical Test:

Users:
    Recruiter
    Client
    Admin

Responsibility:
Admin:
    - Login (manage his profile)
    - Can create Recruiter
    - See all the Recruiter(CRUD)
    - See all the Clients (CRUD)

Recruiter:
    - log in (Manage his profile)
    - Can see all the job requirement posts which is assign to him.
    - Add notes on posts

Client
    - Login/Registration
    - Can create job requirement post
    - see his all the post and action(note) added by Recruiter.

-> role base login
-> When the client creates any job requirement post it's auto-assign any random Recruiter.
-> you can use any database(MongoDB is a plus point) as a database, and design the schema as per needs
-> no selected schema field for the post, and other schemas, you can choose as per your knowledge.
-> you need to create nodejs API with role-based access

