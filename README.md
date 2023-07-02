Todo-List
This is a simple todo-list application written in JavaScript using the React library. The application allows adding, deleting, and marking tasks as completed. Additionally, the application implements saving the state of the application in the browser's local storage using localStorage.

Features
Adding a New Task
To add a new task, enter the title and description of the task in the respective text fields at the top of the application, and then click the "Add" button. The new task will be added to the list of tasks to be done.

Deleting a Task
To delete a task from the list, simply click the trash icon next to the task. The task will be immediately removed from both the list of tasks to be done and the list of completed tasks (if it has been marked as completed).

Marking a Task as Completed
To mark a task as completed, click the checkmark icon next to the task. The task will be moved from the list of tasks to be done to the list of completed tasks. The completion time of the task will also be displayed.

Deleting a Task from the Completed List
Completed tasks are displayed in a separate section below the list of tasks to be done. To delete a task from the completed list, simply click the trash icon next to the task. The task will be immediately removed from the completed list.

Switching between Todo and Completed View
At the bottom of the application, there is a section of buttons that allow switching between the view of tasks to be done and the view of completed tasks. Clicking the "Todo" button will display the tasks to be done, and clicking the "Completed" button will display the completed tasks.

Validation of Title and Description Fields
If either the title or description field of a task is empty when trying to add the task, a warning message in red color will appear, indicating the need to enter both values.

Technologies Used
React
JavaScript
CSS
Running the Application
Clone this repository to your device.
Open the project folder in your code editor.
In the terminal, navigate to the project folder.
Run the command npm install to install the dependencies.
Once the installation is complete, run the command npm start to start the application in development mode.
The application will run in your browser at http://localhost:3000.
This is a basic README for this todo-list code. You can customize it by adding more information about installation, testing, and any other details you find relevant.