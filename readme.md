# Project Setup Instructions

Follow these steps to set up and run the project on your local machine:

## Step 1: Clone the Repository

Open your terminal and run the following command to clone the repository:

```bash
git clone "https://github.com/buariful/qustion_pro.git"
```

## Step:2 Navigate to the project directory and create a .env file. Add the following environment variables:

```javascript
PORT=5000
DB_DATABASE=mysql
DB_USERNAME=root
DB_PASSWORD=<>password<>
DB_ADAPTER=mysql
DB_NAME=question_pro
DB_HOSTNAME=localhost
DB_PORT=3306
JWT_SECRET=S54SDF654W8E51FS23DF16584EW83DFD56565
```

## Step 3: Install Dependencies

Install the required Node.js dependencies by running:

```bash
npm install
```

## Step 4: Start the Server

```bash
npm start
```
