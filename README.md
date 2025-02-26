# budgetplanner-webtrendsWebsite Assignment -
Budget Planner to handle income and expense. Budget Planner is a web-based financial management application that helps users track their income and expenses efficiently. Users can add, edit, delete, and analyze transactions through an intuitive interface. The app uses Firebase for authentication and data storage, ensuring secure access to financial data. Additionally, an AI chatbot provides assistance, answers questions, and offers financial insights.User Authentication: Secure sign-in via Google Single Sign-On (SSO) to protect user data.Income & Expense Tracking: Add, edit, and delete transactions with details like amount, category, and date.Transaction Sorting & Filtering: Sort transactions by date, amount, or name and filter by type.CSV Import & Export: Export transactions as a CSV file for external analysis or import CSV files to bulk-add transactions.Real-Time Balance Calculation: Automatically updates current balance, total income, and total expenses as transactions are added or modified.Responsive Design: Optimized for desktop and mobile viewing.
Steps:
  1. Clone the repository: git clone https://github.com/Gaganmander01/budgetplanner-webtrends
     
  2. Navigate to the project directory

  3. Install dependencies: npm install

  4. Configure Firebase:
        Create a Firebase project.
        create the web app over there .
        Enable Google Authentication and email password properties for the sign in and login.
        Create a Cloud Firestore database.
        Make changes in the rules.
        Copy your Firebase configuration details and paste them into the firebase.js file.

  6. Configure the AI Chatbot (Google Gemini AI):
        Follow the instructions provided by the API provider.
        Add your API key and any required configuration to the appropriate file  or create a new collection in Firestore to store the API key.
                
  7. Running the App Locally
        open the folder of budget planning in the cmd or terminal then give this command: npm start
        Then, open your browser and navigate to the URL provided.
  8. Git hub repositary : in order to make repo remotly available  and pull the code of gitignore (to ignore node modules) and readme file then push my code to the git hub repo .
  9. Building for Production To build your app for production deployment add the yml file in the repo folder (e.g., on GitHub Pages): npm run build
     
Live Site You can view the live version of BudgetPlanning on GitHub Pages at :https://gaganmander01.github.io/budgetplanner-webtrends/
