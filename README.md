# 🚗 RoadAssist - Roadside Assistance SaaS Platform

A comprehensive multi-sided marketplace platform connecting customers with service providers, tow trucks, and spare parts vendors for automotive services and roadside assistance.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)
- [User Roles](#user-roles)
- [Development](#development)
- [Database Schema](#database-schema)
- [Contributing](#contributing)

## 🎯 Overview

RoadAssist is a production-grade roadside assistance platform designed for the Indian market. It connects three types of users:

1. **Customers** - Users seeking automotive services and roadside assistance
2. **Service Providers** - Mechanics, tow truck operators, mobile service providers
3. **Vendors** - Spare parts sellers with real-time inventory

## ✨ Features

### For Customers
- 🔍 Find nearby service providers
- 📱 Phone-based authentication (OTP-ready)
- 🚗 Manage multiple vehicles
- 📋 Book services and track in real-time
- ⭐ Rate and review service providers
- 💳 Secure payment integration (Stripe-ready)
- 🛒 Browse and purchase spare parts

### For Service Providers
- 📦 Manage service offerings
- 💰 Track earnings and job history
- 📍 Update real-time location
- 🔔 Receive booking notifications
- 👨‍🏫 Mentor/protégé system
- ⚙️ Availability status management

### For Vendors
- 📦 Manage spare parts inventory
- 📊 Real-time stock updates
- 🚚 Order management
- 💵 Revenue tracking

## 🛠 Tech Stack

### Backend
- **Framework**: Django 6.0.4 + Django REST Framework
- **Database**: PostgreSQL (with PostGIS support ready)
- **Authentication**: JWT (djangorestframework-simplejwt)
- **Real-time**: Django Channels + Redis (WebSocket ready)
- **Task Queue**: Celery + Redis (ready for async tasks)
- **API Documentation**: drf-spectacular (Swagger/OpenAPI)
- **Payments**: Stripe integration ready
- **Phone Validation**: django-phonenumber-field

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **HTTP Client**: Axios with interceptors
- **Styling**: Custom CSS with modern design

### Infrastructure (Ready)
- Docker + docker-compose
- AWS S3 for media storage
- Redis for caching and channels
- Celery for background tasks

## 📁 Project Structure

```
MECHANICSOOO/
├── backend/
│   ├── backend/              # Django project settings
│   │   ├── settings.py       # Main configuration
│   │   ├── urls.py          # URL routing
│   │   └── asgi.py          # ASGI config for channels
│   ├── users/               # User authentication & profiles
│   │   ├── models.py        # User, CustomerProfile, OTP
│   │   ├── serializers.py   # API serializers
│   │   ├── views.py         # Auth endpoints
│   │   └── admin.py         # Admin interface
│   ├── providers/           # Service provider management
│   │   ├── models.py        # ProviderProfile, TowTruck, Certification
│   │   ├── serializers.py
│   │   └── views.py
│   ├── vehicles/            # Vehicle management
│   │   ├── models.py        # Vehicle, VehicleModel, VehicleMake
│   │   └── views.py
│   ├── services/            # Service catalog
│   │   ├── models.py        # Service, ServiceCategory
│   │   └── views.py
│   ├── bookings/            # Booking system
│   │   ├── models.py        # Booking with state machine
│   │   └── views.py
│   ├── marketplace/         # Spare parts marketplace
│   ├── reviews/             # Rating & review system
│   ├── payments/            # Payment processing
│   ├── notifications/       # Push notifications
│   ├── maps/                # Route optimization & ETA
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── api/             # API client & services
│   │   │   ├── axios.ts     # Axios instance with interceptors
│   │   │   ├── auth.ts      # Auth API calls
│   │   │   └── services.ts  # Service API calls
│   │   ├── components/      # React components
│   │   │   ├── auth/        # Login, Register
│   │   │   ├── dashboard/   # Dashboard components
│   │   │   └── ProtectedRoute.tsx
│   │   ├── pages/           # Page components
│   │   │   ├── AuthPage.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── styles/          # CSS files
│   │   │   ├── auth.css
│   │   │   └── dashboard.css
│   │   ├── types/           # TypeScript interfaces
│   │   │   └── index.ts
│   │   ├── App.tsx          # Main app component
│   │   └── main.tsx         # Entry point
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── venv/                    # Python virtual environment
├── .gitignore
└── README.md
```

## 🚀 Installation

### Prerequisites
- Python 3.11+
- Node.js 18+
- PostgreSQL 16+
- Redis (optional, for real-time features)

### Backend Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd MECHANICSOOO
```

2. **Create and activate virtual environment**
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate
```

3. **Install Python dependencies**
```bash
cd backend
pip install -r requirements.txt
```

4. **Configure environment variables**
```bash
# Create .env file in backend folder
cp .env.example .env

# Edit .env with your settings
DB_NAME=mechanicsoo
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

5. **Create PostgreSQL database**
```sql
-- In PostgreSQL
CREATE DATABASE mechanicsoo;
```

6. **Run migrations**
```bash
python manage.py migrate
```

7. **Create superuser**
```bash
python manage.py createsuperuser
# Enter phone number in format: +919876543210
```

8. **Start development server**
```bash
python manage.py runserver
```

Backend will be available at: `http://localhost:8000`

### Frontend Setup

1. **Install Node dependencies**
```bash
cd frontend
npm install
```

2. **Start development server**
```bash
npm run dev
```

Frontend will be available at: `http://localhost:3000`

## ⚙️ Configuration

### Backend Configuration

**Database Settings** (`backend/backend/settings.py`):
- PostgreSQL configuration
- Custom User model: `users.User`
- Phone number region: India (IN)

**JWT Settings**:
- Access token lifetime: 24 hours
- Refresh token lifetime: 7 days
- Token rotation enabled

**CORS Settings**:
- Allowed origins: `http://localhost:3000`
- Credentials allowed

### Frontend Configuration

**API Base URL** (`frontend/src/api/axios.ts`):
```typescript
const API_BASE_URL = 'http://localhost:8000/api/v1';
```

**Vite Proxy** (`frontend/vite.config.ts`):
```typescript
server: {
  port: 3000,
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
    }
  }
}
```

## 📚 API Documentation

### Interactive API Docs
- Swagger UI: `http://localhost:8000/api/docs/`
- OpenAPI Schema: `http://localhost:8000/api/schema/`

### Authentication Endpoints

**POST** `/api/v1/auth/register/`
```json
{
  "phone": "+919876543210",
  "password": "password123",
  "email": "user@example.com",
  "role": "CUSTOMER"
}
```

**POST** `/api/v1/auth/login/`
```json
{
  "phone": "+919876543210",
  "password": "password123"
}
```

**POST** `/api/v1/auth/token/refresh/`
```json
{
  "refresh": "refresh_token_here"
}
```

### Service Endpoints

**GET** `/api/v1/services/` - List all services
**GET** `/api/v1/services/categories/` - Service categories
**GET** `/api/v1/services/{id}/` - Service detail

### Vehicle Endpoints

**GET** `/api/v1/vehicles/` - User's vehicles
**POST** `/api/v1/vehicles/` - Add vehicle
**GET** `/api/v1/vehicles/types/` - Vehicle types
**GET** `/api/v1/vehicles/makes/` - Vehicle makes
**GET** `/api/v1/vehicles/models/` - Vehicle models

### Provider Endpoints

**GET** `/api/v1/providers/` - List providers
**GET** `/api/v1/providers/{id}/` - Provider detail
**GET** `/api/v1/providers/tow-trucks/` - Available tow trucks

## 👥 User Roles

### Customer
- Default role for end users
- Can book services
- Manage vehicles
- Purchase spare parts
- Rate providers

### Provider
- Service providers (mechanics, tow operators)
- Manage service offerings
- Accept/reject bookings
- Track earnings
- Update availability

### Vendor
- Spare parts sellers
- Manage inventory
- Process orders
- Track sales

### Admin
- Full system access
- User management
- Content moderation
- Analytics

## 🔧 Development

### Useful Commands

**Backend**:
```bash
# Create new Django app
python manage.py startapp app_name

# Make migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Check users and profiles
python manage.py check_users

# Fix missing profiles
python manage.py fix_profiles

# Run tests
pytest

# Django shell
python manage.py shell
```

**Frontend**:
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
tsc --noEmit
```

### Database Management

**View data in Django Admin**:
1. Go to `http://localhost:8000/admin/`
2. Login with superuser credentials
3. Browse all models

**View data in pgAdmin**:
1. Open pgAdmin
2. Connect to PostgreSQL server
3. Navigate to mechanicsoo database

**Command line (psql)**:
```bash
psql -U postgres -d mechanicsoo

# List tables
\dt

# Query users
SELECT * FROM users;

# Query bookings
SELECT * FROM bookings;
```

## 🗄️ Database Schema

### Core Models

**User** (`users`)
- id (UUID, PK)
- phone (unique)
- email
- role (CUSTOMER/PROVIDER/VENDOR/ADMIN)
- is_verified
- preferred_language

**CustomerProfile** (`customer_profiles`)
- user (OneToOne → User)
- emergency_contact (JSON)
- saved_locations (JSON)
- default_payment_method

**ProviderProfile** (`provider_profiles`)
- user (OneToOne → User)
- bio
- years_experience
- certifications (M2M)
- mentor (Self FK)
- is_mobile
- coverage_radius_km
- latitude, longitude
- availability_status
- rating
- total_jobs

**Vehicle** (`vehicles`)
- id (UUID, PK)
- owner (FK → User)
- model (FK → VehicleModel)
- year
- color
- plate_number
- vin
- is_default

**Service** (`services`)
- id (UUID, PK)
- provider (FK → ProviderProfile)
- category (FK → ServiceCategory)
- title
- description
- base_price, max_price
- is_home_deliverable
- avg_duration_minutes
- rating
- total_bookings

**Booking** (`bookings`)
- id (UUID, PK)
- customer (FK → CustomerProfile)
- provider (FK → ProviderProfile)
- service (FK → Service)
- vehicle (FK → Vehicle)
- status (PENDING/ACCEPTED/EN_ROUTE/IN_PROGRESS/COMPLETED/CANCELLED)
- payment_status
- pickup_latitude, pickup_longitude
- destination_latitude, destination_longitude
- agreed_price
- otp_start, otp_complete

## 🔐 Security Features

- JWT-based authentication
- Password hashing (Django default)
- CORS protection
- Phone number validation
- OTP verification (ready)
- Role-based access control
- Protected routes
- Token refresh mechanism
- Secure password requirements

## 🚀 Deployment (Ready)

### Backend Deployment
- Configure production settings
- Set DEBUG=False
- Use environment variables
- Set up PostgreSQL
- Configure Redis
- Set up Celery workers
- Configure static/media files
- Set up HTTPS

### Frontend Deployment
- Build production bundle: `npm run build`
- Deploy to Vercel/Netlify/AWS
- Configure environment variables
- Set up CDN

## 📝 Environment Variables

### Backend (.env)
```env
DB_NAME=mechanicsoo
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# Optional
REDIS_URL=redis://localhost:6379
CELERY_BROKER_URL=redis://localhost:6379/0
STRIPE_SECRET_KEY=sk_test_...
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👨‍💻 Development Team

- Backend: Django + DRF
- Frontend: React + TypeScript
- Database: PostgreSQL
- Region: India

## 📞 Support

For support, email support@roadassist.com or join our Slack channel.

---

**Built with ❤️ for the Indian automotive service industry**
