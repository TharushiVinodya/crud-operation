# Simple CRUD Application
Simple CRUD Operations using REST API by Suneth Udayanga

This is a basic CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and a simple HTML front-end. The app allows you to manage a list of items through a RESTful API.

Features
	Create: Add new items to the list.
	Read: View the list of items.
	Update: Modify existing items.
	Delete: Remove items from the list.

How to Run
Follow these steps to run the application locally:

1. Install Dependencies

Copy code
```bash
npm install
```
2. Run the Server

Copy code
```bash
node app.js
```
This will start the Node.js server at http://localhost:3000.

3. Open the Frontend
Open the index.html file in a web browser. You can do this by either double-clicking the file or using a command like:

Copy code
```bash
open index.html
```
4. Interact with the App
View the list of items.
Add new items using the form.
Delete items using the "Delete" button in each row.
Update items using "Edit" button.

**Important Note on CORS**
If you encounter CORS issues during development, make sure to install the cors middleware:

Copy code
```bash
npm install cors
```
And then, add the following line to the index.js file:

Copy code
```javascript
app.use(cors());
```
Restart the server after making these changes.

*#### Suneth Udayanga*
"# crud-operation" 
