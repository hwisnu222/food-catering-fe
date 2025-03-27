# Food Catering FE

This is the front-end for the Food Catering website, built using React and Vite.

## Prerequisites

- Docker
- Docker Compose
- Node.js (version 18 or later) - optional for local development
- Git

## Installation

Before running the project, first clone the repository using the following command:

```bash
git clone https://github.com/hwisnu222/food-catering-fe.git
cd food-catering-fe
```

Next, copy the `.env.example` file to create your `.env` file:

```bash
cp .env.example .env
```

## Running the Project

After installing the necessary packages, the next step is to run the project. To do this, use the following command:

```bash
docker compose up -d
```

Then, access the application in your browser at [http://localhost:5173](http://localhost:5173).

## Run the Backend

To run the backend project alongside the frontend, you also need to clone and run the backend repository. Use the following commands:

```bash
git clone https://github.com/hwisnu222/food-catering-be.git
cd food-catering-be
docker compose up -d
```

This will start the backend project, and both front-end and back-end will run simultaneously.
