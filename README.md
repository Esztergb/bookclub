# 
# <span style="color:gold">Bookclub</span>
 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)
[![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)
[![MySQL Badge](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff&style=flat)](https://www.npmjs.com/package/mysql2)
[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/docs/v6/)
[![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat)](https://www.npmjs.com/package/dotenv)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)
  
## User Story

```md
AS A booklover 
I WANT to be able to search books and add them to my favorites 
SO THAT I can read them later
```

## Description 

Book search engine. Allows user to look at books by genre, create a login and select books to be added to my favourite books. 

## Table of Contents
* [Installation](#installation)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Contributors](#contributors)
  
## Installation 
* Check if you have Node.js installed by typing `node -v` in your command line. If node is not installed, visit the [Node.js](https://nodejs.org/en) website to install. 
* Next, clone this project repository to your computer. 
* Use the command `npm i` to install dependencies. 
* Create a file in the root directory titled `.env` and include database name and personal MySQL login information:
```
DB_NAME='YOUR DATABASE NAME'
DB_USER='YOUR USERNAME'
DB_PASSWORD='YOUR PASSWORD'
```
* Open MySQL with command `mysql -u root -p` and enter your personal MySQL password. 
* Create databse with command `source db/schema.sql`. Log out of MySQL with command `\q` or `quit`.
* Seed database with command `npm run seed`.
* Start server with command `npm start`.

## License
This project is covered under the MIT licence.  
To learn more click on the following *[link](https://opensource.org/licenses/MIT)*

## How to Contribute 
Please follow Contributor Covenant Guidelines by clicking on the following link: 
*[Contributor Covenant](https://www.contributor-covenant.org/)*

## Tests
No tests, just start the server and run the app 

## Questions
Please visit [GitHub Page](https://github.com/Esztergb/bookclub) to view this project.
[Heroku Page](https://morning-headland-11001-5962299a3945.herokuapp.com/)

##  Credits
Thank you for tips and sugestions from Bootcamp instructors and classmates. I have used https://www.w3schools.com/ and https://www.stackoverflow.com to research information. Codes were based on mini project and some other modules from bootcamp. 

## Contributors
Dana Belleli

Newman Porter

Eszter Barbuscia 



