
# Student Management System

A simple web-based application for managing student records. This application allows users to add, view, update, delete, and search student details. All data is stored locally using `localStorage`, so the information persists even after refreshing the page.

## Features

- **Add Student**: Easily add new student records by entering details like Grid, Name, Email, and Mobile Number.
- **View Students**: All records are displayed in a table format, allowing quick access to student data.
- **Edit and Update**: Make changes to any student’s information directly from the table.
- **Delete Student**: Remove records with a single click.
- **Search Functionality**: Quickly find specific students using the search bar.
- **LocalStorage Persistence**: All data is stored in `localStorage`, ensuring it remains available even after a page reload.

## Technologies Used

- **HTML/CSS**: For basic page structure and styling.
- **JavaScript**: Handles the CRUD operations, form validation, and search functionality.
- **LocalStorage**: Stores data locally on the user’s browser.

## How to Use

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Open `index.html`** in a browser to start the application.

3. **Add New Entry**:
   - Click on the `ADD+` button to open the form.
   - Enter details for Grid, Name, Email, and Mobile Number, then click **Submit**.

4. **Edit Entry**:
   - Click directly on the text fields in the table to update the student details.

5. **Delete Entry**:
   - Use the **Delete** button in the Actions column to remove a record.

6. **Search Entries**:
   - Type in the **search bar** to filter and display only matching entries.


### Main Dashboard
![Screenshot 2024-11-07 074435](https://github.com/user-attachments/assets/8a468feb-7646-417d-a9ca-f4129aa976a0)


### Add Student Form
![Screenshot 2024-11-07 074501](https://github.com/user-attachments/assets/118f9438-17a3-42b5-ad69-aec98462446b)


### Search Functionality
![Screenshot 2024-11-07 075756](https://github.com/user-attachments/assets/41af409c-c827-4eff-b4f9-473b2349cb5b)




## Project Structure

- **index.html**: The main HTML structure of the page.
- **assets/css/style.css**: Contains all the styling for the application.
- **assets/js/main.js**: Main JavaScript file handling all application logic.
- **assets/images/**: Contains screenshots and other images for the README.
- **assets/videos/**: Contains demo videos for showcasing the application.

## Future Improvements

- **Backend Integration**: Connecting to a database for persistent storage beyond the browser.
- **Additional Fields**: Add more fields, such as address, age, or course.
- **Pagination**: For handling large numbers of entries.
- **Form Validation**: Enhanced validation for better data integrity.

## License

This project is licensed under the MIT License. 

---
