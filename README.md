# Revō - Rescue. Revive. Roll.

Revō is a full-stack roadside assistance and vehicle services platform.

It combines:
- emergency breakdown support
- spare parts ordering
- fuel/water and specialist service discovery

## Overview

This repository contains:
- `backend/`: Django + DRF APIs (JWT auth, PostgreSQL, Swagger docs)
- `frontend/`: React + TypeScript + Vite app (landing, auth, directory, role dashboards)

The platform supports multiple user types:
- `CUSTOMER`
- `PROVIDER`
- `VENDOR`
- `ADMIN`

## Implemented Frontend Routes

Main routes currently available:
- `/` - Landing page
- `/login` - Login
- `/register` - Register
- `/directory` - Directory hub
- `/directory/fuel-stations` - Fuel/water discovery
- `/directory/body-shops` - Body shop discovery
- `/dashboard` - Auto-redirect by role
- `/dashboard/customer`
- `/dashboard/provider`
- `/dashboard/vendor`
- `/dashboard/admin`

## Implemented Backend API Base Routes

Mounted in `backend/backend/urls.py`:
- `/api/v1/auth/`
- `/api/v1/vehicles/`
- `/api/v1/services/`
- `/api/v1/providers/`

API docs:
- Swagger UI: `/api/docs/`
- OpenAPI schema: `/api/schema/`

## Tech Stack

### Backend
- Python, Django 6, Django REST Framework
- PostgreSQL
- JWT (`djangorestframework-simplejwt`)
- CORS (`django-cors-headers`)
- Channels + Redis (configured)
- drf-spectacular (OpenAPI/Swagger)

### Frontend
- React 18 + TypeScript
- Vite
- React Router
- Axios
- Custom CSS with glassmorphism and directory UI components

## Project Structure

```text
MECHANICSOOO/
|- backend/
|  |- backend/            # Django settings + root URLs
|  |- users/
|  |- providers/
|  |- services/
|  |- vehicles/
|  |- bookings/
|  |- marketplace/
|  |- reviews/
|  |- payments/
|  |- notifications/
|  |- maps/
|  `- manage.py
|- frontend/
|  |- src/
|  |  |- api/
|  |  |- components/
|  |  |- pages/
|  |  |- styles/
|  |  |- types/
|  |  `- utils/
|  `- package.json
|- docs/
|  `- ROLE_MAPPING.md
`- README.md
```

## Quick Start

### 1) Backend

```bash
cd backend
python -m venv venv
```

Activate virtualenv:
- Windows PowerShell:
  ```powershell
  .\venv\Scripts\Activate.ps1
  ```
- Linux/macOS:
  ```bash
  source venv/bin/activate
  ```

Install dependencies:

```bash
pip install -r requirements.txt
```

Configure `backend/.env`:

```env
DB_NAME=mechanicsoo
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

Run:

```bash
python manage.py migrate
python manage.py runserver
```

Backend: `http://localhost:8000`

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend (Vite): usually `http://localhost:5173` (or your configured port)

## Role Mapping

Role responsibilities are documented in:
- `docs/ROLE_MAPPING.md`

This includes:
- capability boundaries by role
- dashboard route mapping
- signup/auth mapping

## Useful Commands

### Backend

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend

```bash
npm run dev
npm run build
npm run preview
```

## Notes

- Keep secrets in `.env`; do not commit credentials.
- For local cross-origin requests, ensure Django CORS allows your frontend port.
- This repository currently contains active work-in-progress changes across backend and frontend.
# Revō - Rescue. Revive. Roll.

Revō is a full-stack roadside assistance and vehicle services platform.

It combines:
- emergency breakdown support
- spare parts ordering
- fuel/water and specialist service discovery

## Overview

This repository contains:
- `backend/`: Django + DRF APIs (JWT auth, PostgreSQL, Swagger docs)
- `frontend/`: React + TypeScript + Vite app (landing, auth, directory, role dashboards)

The platform supports multiple user types:
- `CUSTOMER`
- `PROVIDER`
- `VENDOR`
- `ADMIN`

## Implemented Frontend Routes

Main routes currently available:
- `/` - Landing page
- `/login` - Login
- `/register` - Register
- `/directory` - Directory hub
- `/directory/fuel-stations` - Fuel/water discovery
- `/directory/body-shops` - Body shop discovery
- `/dashboard` - Auto-redirect by role
- `/dashboard/customer`
- `/dashboard/provider`
- `/dashboard/vendor`
- `/dashboard/admin`

## Implemented Backend API Base Routes

Mounted in `backend/backend/urls.py`:
- `/api/v1/auth/`
- `/api/v1/vehicles/`
- `/api/v1/services/`
- `/api/v1/providers/`

API docs:
- Swagger UI: `/api/docs/`
- OpenAPI schema: `/api/schema/`

## Tech Stack

### Backend
- Python, Django 6, Django REST Framework
- PostgreSQL
- JWT (`djangorestframework-simplejwt`)
- CORS (`django-cors-headers`)
- Channels + Redis (configured)
- drf-spectacular (OpenAPI/Swagger)

### Frontend
- React 18 + TypeScript
- Vite
- React Router
- Axios
- Custom CSS with glassmorphism and directory UI components

## Project Structure

```text
MECHANICSOOO/
|- backend/
|  |- backend/            # Django settings + root URLs
|  |- users/
|  |- providers/
|  |- services/
|  |- vehicles/
|  |- bookings/
|  |- marketplace/
|  |- reviews/
|  |- payments/
|  |- notifications/
|  |- maps/
|  `- manage.py
|- frontend/
|  |- src/
|  |  |- api/
|  |  |- components/
|  |  |- pages/
|  |  |- styles/
|  |  |- types/
|  |  `- utils/
|  `- package.json
|- docs/
|  `- ROLE_MAPPING.md
`- README.md
```

## Quick Start

### 1) Backend

```bash
cd backend
python -m venv venv
```

Activate virtualenv:
- Windows PowerShell:
  ```powershell
  .\venv\Scripts\Activate.ps1
  ```
- Linux/macOS:
  ```bash
  source venv/bin/activate
  ```

Install dependencies:

```bash
pip install -r requirements.txt
```

Configure `backend/.env`:

```env
DB_NAME=mechanicsoo
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

Run:

```bash
python manage.py migrate
python manage.py runserver
```

Backend: `http://localhost:8000`

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend (Vite): usually `http://localhost:5173` (or your configured port)

## Role Mapping

Role responsibilities are documented in:
- `docs/ROLE_MAPPING.md`

This includes:
- capability boundaries by role
- dashboard route mapping
- signup/auth mapping

## Useful Commands

### Backend

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Frontend

```bash
npm run dev
npm run build
npm run preview
```

## Notes

- Keep secrets in `.env`; do not commit credentials.
- For local cross-origin requests, ensure Django CORS allows your frontend port.
- This repository currently contains active work-in-progress changes across backend and frontend.
# MECHANICSOOO

Roadside assistance platform with a Django REST backend and a React + TypeScript frontend.

## What this project is

This repository is a full-stack app for connecting users with automotive service providers.

- **Backend**: Django + DRF APIs with JWT authentication, PostgreSQL, and Swagger docs.
- **Frontend**: React + Vite SPA with pages for landing, auth, dashboard, and provider directory.
- **Domain focus**: vehicles, providers, services, bookings, and related marketplace flows.

## Current app flow (implemented)

### Frontend routes

In `frontend/src/App.tsx`, these routes are configured:

- `/` -> landing page
- `/login` and `/register` -> auth page
- `/directory` -> directory hub
- `/dashboard` -> protected dashboard route

### Backend API base

Backend URLs are mounted in `backend/backend/urls.py` under:

- `/api/v1/auth/`
- `/api/v1/vehicles/`
- `/api/v1/services/`
- `/api/v1/providers/`

Also available:

- `/api/docs/` for Swagger UI
- `/api/schema/` for OpenAPI schema

## Tech stack

### Backend

- Python, Django 6, Django REST Framework
- PostgreSQL
- JWT via `djangorestframework-simplejwt`
- Channels + Redis (configured)
- drf-spectacular for API docs

### Frontend

- React 18 + TypeScript
- Vite
- React Router
- Axios
- Tailwind CSS and custom CSS
- Framer Motion + Three.js related UI libraries

## Project structure

```text
MECHANICSOOO/
|- backend/
|  |- backend/            # Django settings and root URLs
|  |- users/              # auth/user models and APIs
|  |- vehicles/
|  |- services/
|  |- providers/
|  |- bookings/
|  |- marketplace/
|  |- reviews/
|  |- payments/
|  |- notifications/
|  |- maps/
|  |- manage.py
|  `- requirements.txt
|- frontend/
|  |- src/
|  |  |- pages/
|  |  |- components/
|  |  |- api/
|  |  |- styles/
|  |  `- App.tsx
|  `- package.json
`- README.md
```

## Local setup

## 1) Backend setup

From repository root:

```bash
cd backend
python -m venv venv
```

Activate virtualenv:

- **Windows (PowerShell)**:
  ```powershell
  .\venv\Scripts\Activate.ps1
  ```
- **Linux/macOS**:
  ```bash
  source venv/bin/activate
  ```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create `.env` in `backend/` (or copy from `.env.example`) and set at least:

```env
DB_NAME=mechanicsoo
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

Run migrations and server:

```bash
python manage.py migrate
python manage.py runserver
```

Backend runs at `http://localhost:8000`.

## 2) Frontend setup

From repository root:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on the Vite dev server (commonly `http://localhost:5173` unless configured otherwise).

## Useful commands

### Backend

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py check_users
python manage.py fix_profiles
```

### Frontend

```bash
npm run dev
npm run build
npm run preview
```

## Notes

- Keep secrets in environment variables; do not hardcode credentials.
- API docs are easiest entry point for understanding available backend endpoints.
- If you want, the next step can be adding architecture diagrams and API examples per module.
