# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.



# Interfaces

In this activity we will design and implement interfaces.

## Instructions

* Consider the class of items you can print. This includes books and magazines, but might also include web pages and PDFs. As a designer, do you want to consider _all_ printable items? Or do you want to restrict yourself to only one subset? Can you account for the behavior of both? In a real project, requirements will define boundaries, but for now, draw them based on what you think is possible.

interface Things {


    CheckIfMoves()

}

Class PrintableThing  implements Things {

     ChecktypeOfPrinter() {
         numOfSidesneed > 2 = 3dbrint
         if color => use color printer 
         if numOfSidesneed < 2 = NOT PRINTABLE
     }; 
}

Class Book extends PrintableThing implents Thing {
    binding(){
        check if sipiral or sting or glue
    }
}



* Once you've got a working list of things you can print, come up with some methods that each of them should have.

* Collect these methods into an interface called `Printable`.

* Once you're satisfied with your `Printable` interface, choose some of the classes you thought of earlier, and make them implement `Printable`. Instead of implementing each method, just comment out what each might do in pseudocode. Does it look like each of your classes will implement their `Printable` methods uniquely? Discuss with your partner whether interfaces seem like a useful approach, here. If not, can you think of any alternatives?

* You'll have to switch gears a bit for the next part of this activity. Take a moment to discuss what an Object Relational Mappers (ORM) is with your partner. To refresh your memory, they're tools that let you talk to _any_ database. Sequelize, for example, lets you use MySQL; PostgreSQL; or MongoDB.

* Obviously, MySQL, PostgreSQL, and MongoDB are each very different tools—otherwise, people wouldn't make such a big deal about choosing between them! The advantage to a tool like Sequelize is that it lets us use each of them without worrying about the individual details. In other words, Sequelize defines a(n) common *** for interacting with _any_ database (fill in the blank).

* Imagine you're in the early stages of building such an ORM. You want your users to be able to use a single set of methods to talk to any database they'd like. What Java tool do you use to specify these methods?

* Let's call your specification a `DatabaseService`. Create a file for it; declare it properly; and brainstorm some methods you think belong on this service. You'll probably want to be able to `add` or `insert` items, for instance. What else? Don't worry about coming up with _everything_. Just get a few good examples down. Be prepared to discuss your choice of methods with the class!

### Hints

* Check out the [Oracle documentation for Interfaces](https://docs.oracle.com/javase/tutorial/java/concepts/interface.html)