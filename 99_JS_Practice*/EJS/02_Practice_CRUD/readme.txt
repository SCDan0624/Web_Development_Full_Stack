I) Index
    1) Overview
        A) This project is based on Folder 06: Lessons 06-13.
        B) Will Create a CRUD app that adds posts
        C) We will create a fake database for this practice project 

    2) Prework 
        A) See references folder for steps on how to create proper folders
        for this project and all of the packages that need to be added.

    3) Index- Start
        A) Create a posts folder that will be under the views folder.
        B) Create an array of objects of fake posts in our index.js

    4) Index - Routes
        A) Add a route to the index.js page that routes your to a post page.
            i) pass in our posts fake data to our route handler 

    5) Index - Views 
        A) Add the index.ejs page to the views/posts folder 
        B) Add an html shell to the  page 
        C) Add ul tags to your page 

II) New 
    1) New - Routes 
        A) Add a route to the index.js page that routes to your posts/new
        page.


    2) New - Views 
        A) Add an new.ejs page to views/posts 
        B) Add an html shell to the page
        C) Create a form for a new post 
        D) Add a anchor tag to send us back to the index pag
        E) Go to localhost3000/posts/new

    3) New - Routes 
        A) Set a route in index.js to tell where to send the submitted form data
            i) Don't forget a redirect

    4) Index- Views
        A) Add an anchor tag that takes us to our new post page

III) Show 
    1) Show - Routes 
        A) add id:number key,value pairs to our post array of objects 
        B) Add a show route the renders us to posts/show 
            i) Makes sure the id of the post matches.

    2) Show- Views
        A) Create a show.ejs with an html shell 
        B) Create an h1 that displays the post id
        C) Create an h2 that displays post and username 

    3) Index - Views
        A) Add a link that takes user back to show page 

IV) Installing uuid 
    1) Update all ids with id: uuidv4()
    2) Change the app.post to use uuidv 
        A) Update the .push line of code
    3) Remove the parseInt of our id number in app.get 

V) Update 
    1) Update - Routes 
        A) Create a new PATCH request route 
       
VI) Edit 
    1) Edit - Routes 
        A) Create an edit  GET route that we will use with an edit form
    2) Edit - Views 
        A) Create an edit.ejs page 
        B) Create a form on the page to submit editing and updates for 
            i) form will be a post method 
            ii) Normallly it will be sent to posts/id:/edit on the action 
            iii) Here form is sent to posts/dynamicid:/?_method=PATCH

    3) Show - Views 
        A) Add an achor tag with a link back to edit post page. 
            i) Dynamic id will be needed.

VII) Delete
    1) Delete - Routes 
        A) Create an app.delete route.
            i) The route will filter based on id, delete, and then redirect 

    2) Show - Views 
        A) Add a form with a delete button
            i) Will be similar to edit page with small change.
            ii) The method at the end of the action will be an override delete.


