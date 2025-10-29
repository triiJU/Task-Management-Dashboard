# Task Management Dashboard

A simple full-stack web app built with **React**, **FastAPI**, and **PostgreSQL**.  
It lets you create, view, and track tasks from a clean, minimal dashboard.  
Everything runs in containers with **Docker Compose**, so setup is quick and consistent.

## Features
- Add, view, and update tasks  
- REST API built using FastAPI  
- PostgreSQL database for persistent storage  
- React frontend with Axios for API communication  
- Docker Compose for one-command setup  

## Tech Stack
- **Frontend:** React (Vite), Axios  
- **Backend:** FastAPI (Python)  
- **Database:** PostgreSQL  
- **DevOps:** Docker, Docker Compose  

## Run with Docker
```bash
git clone https://github.com/triiJU/Task-Management-Dashboard.git
cd Task-Management-Dashboard
docker compose up --build
