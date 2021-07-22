# Social-Media-Mern

A social media application made using the javascript tech stack MERN

- Features of like and comment on a post
- User profile page to see a particular user's profile
- adding personal details like education, experience, summary and projects

## Steps to follow

- Download the code by cloning or in it's zip form
- Run the command ``` npm install ``` in the client folder and the main folder to download npm packages
- In the ```config``` folder, add a file called ```default.json``` and paste the following code
  ```json
    {
    "mongoURI": "your url",
    "jsonWebTokenSecret": "your secret",
    "expiresIn": 8640000,
    "githubToken": "github access token"
    }
  ```
 - To run the code, in the main folder system, open the terminal and run
   ``` npm run dev``` to run the development server 
 - And voila
