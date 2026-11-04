# Docker Student CRUD Dashboard

A simple Student Management System developed using Docker, Node.js, MySQL, and HTML, CSS, and JavaScript. This project demonstrates CRUD (Create, Read, Update, Delete) operations using a containerized application environment.

## Project Overview

The Docker Student CRUD Dashboard allows users to manage student records through a simple web interface. The application uses Docker Compose to run the frontend, backend, and MySQL database in separate containers.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js
- **Database:** MySQL 8.0
- **Web Server:** Nginx
- **Containerization:** Docker
- **Orchestration:** Docker Compose

## Project Structure

```text
simple_crud_VC/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

*Note: The structure above is illustrative. Adjust filenames to match your actual project.*

## Features

- Add new student records.
- View all student details.
- Update existing student information.
- Delete student records.
- Store student information in a MySQL database.
- Run the application using Docker containers.

## Docker Configuration

The application uses three main services:

| Service | Description | Port |
|---|---|---|
| Frontend | Nginx web server | 8080 |
| Backend | Node.js API | 5000 |
| Database | MySQL | 3307 (host) |

## Installation and Execution

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/docker-student-crud.git
```

### Step 2: Navigate to the Project

```bash
cd docker-student-crud
```

### Step 3: Build and Start Containers

```bash
docker compose up --build -d
```

### Step 4: Check Running Containers

```bash
docker ps
```

### Step 5: Access the Application

Open your browser and visit:

```text
http://localhost:8080
```

## Docker Commands

Stop the containers:

```bash
docker compose stop
```

Stop and remove containers:

```bash
docker compose down
```

View container logs:

```bash
docker compose logs
```

Rebuild the application:

```bash
docker compose up --build -d
```

## Learning Outcomes

- Understanding Docker and containerization.
- Creating and managing Docker containers.
- Using Docker Compose to manage multiple services.
- Connecting a Node.js backend with a MySQL database.
- Implementing CRUD operations.
- Deploying a web application in a containerized environment.

## Author

**Keerthana M**

Master of Computer Applications (MCA)

GitHub: https://github.com/keerthuammu/Student_Management_System

---

⭐ If you find this project useful, feel free to explore the repository!
