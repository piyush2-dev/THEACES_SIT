#  AgriChain — AI Farm-to-Market Intelligence Platform

AgriChain is an AI-powered farm intelligence platform designed to help Indian farmers make smarter harvesting, selling, and storage decisions using environmental data, mandi price analytics, and predictive modeling.

This project demonstrates a modern, responsive, multilingual web interface for an explainable agricultural AI system.

---

##  Project Vision

India loses up to 40% of agricultural produce due to:

- Poor harvest timing  
- Incorrect mandi selection  
- Lack of spoilage risk awareness  
- Inadequate storage decisions  

AgriChain transforms weather, soil, and market data into simple, farmer-friendly recommendations.

The system is designed specifically for:
- Farmers using basic Android devices  
- Low data-literacy users  
- Plain-language understanding  
- Transparent AI reasoning  

---

##  Core Features Implemented

### 1️⃣ AI Module System (Tabbed Interface)

Three intelligent modules:

•  Environmental Prediction Module  
•  Mandi Analytics Module  
•  AI Harvest Prediction Module  



---

### 2️⃣ Environmental Intelligence Dashboard

Displays:

- Soil Moisture %
- AQI (Air Quality Index)
- Rain Probability (5-day)
- Temperature Trends
- Humidity Forecast Visualization
- AI Insight Card


---

### 3️⃣ Mandi Intelligence Module

Includes:

- Best Market Identification
- Live Price Indicator
- Price Change Tracking
- Distance & Transport Cost
- Net Profit Estimation
- Price Trend Visualization Placeholder

---

### 4️⃣ AI Harvest Window Prediction

Provides:

- Optimal 48-hour harvest window
- Confidence score
- Historical price spike reasoning
- Weather condition match
- Crop maturity match
- Soil health indicators (Nitrogen, pH)

---

### 5️⃣ Post-Harvest Intelligence System

Includes:

- Spoilage Risk Level
- Safe Storage Duration
- Preservation Recommendations
- Cost Ranking (₹ scale)
- Effectiveness Rating (★ system)


---

### 6️⃣ Multilingual Support

Languages available:

- English
- Hindi
- Marathi


---

### 7️⃣ AI Transparency Section

Displays:

- Accuracy Percentage
- Number of Crops Covered
- Total Data Points
- Mandis Supported
- Farmer Data Privacy Statement

---
# 🏗 System Architecture

AgriChain follows a modern full-stack architecture:

Frontend → Backend API → AI Engine → Database → External Data APIs

---

#  Frontend

Built using:

- HTML5
- Tailwind CSS
- Vanilla JavaScript
- Lucide Icons
- Responsive mobile-first UI
- Multilingual support (EN / HI / MR)

Features:
- AI module switching
- Harvest prediction interface
- Mandi analytics dashboard
- Spoilage intelligence system
- Explainable AI interface

---

#  Backend

Recommended Backend Stack:

- Python (Flask / FastAPI)
- REST API architecture
- Modular AI model structure
- JSON-based communication
- CORS-enabled API

Core API Endpoints:

POST /api/predict  
POST /api/mandi  
POST /api/spoilage  
POST /api/auth/login  
POST /api/auth/register  

Backend Responsibilities:

- Process user crop & location input
- Run harvest prediction models
- Calculate spoilage risk
- Fetch mandi price data
- Store user history
- Handle authentication

---

#  AI & Analytics Layer

Modules:

1. Harvest Window Prediction Model
2. Mandi Profit Optimization Engine
3. Spoilage Risk Estimator
4. Preservation Cost Ranking System
5. Confidence Scoring Algorithm

Future:
- ML model training using scikit-learn
- Time-series forecasting (ARIMA / LSTM)
- Reinforcement learning for price optimization

---

# 🗄 Database Layer

Recommended Database:

PostgreSQL (Production)  
MongoDB (Flexible prototype option)

Core Tables:

Users
- id
- name
- phone
- language
- location
- password_hash
- created_at

Predictions
- id
- user_id (foreign key)
- crop
- location
- harvest_window
- confidence_score
- mandi_selected
- profit_estimate
- spoilage_risk
- created_at

Mandi_Prices
- id
- mandi_name
- crop
- price
- date_recorded

Soil_Health_Data
- id
- location
- nitrogen
- ph_level
- moisture
- timestamp

Purpose:
- Store farmer history
- Improve prediction accuracy
- Enable analytics dashboard
- Track model performance

---

#  Authentication System

Authentication Strategy:

- JWT (JSON Web Token) based authentication
- Password hashing using bcrypt
- Secure session management
- Role-based access (Admin / Farmer)

Auth Flow:

1. User registers
2. Password hashed and stored
3. Login returns JWT token
4. Protected routes require token validation

Security Features:

- Encrypted passwords
- Rate limiting (future)
- Token expiration
- Secure API access

---

#  External API Integrations

Planned Integrations:

- OpenWeather API (weather forecast)
- Government Mandi API (price data)
- Soil health dataset integration
- AQI public API

---


#  Scalability Design

- Stateless backend API
- Cloud database support
- Modular AI models
- Microservice-ready structure
- Horizontal scaling compatible

---

#  User-Centric System Design

Built for:

- Basic Android smartphones
- Low internet bandwidth
- Minimal technical literacy
- Clear AI explanations
- Regional language adaptability


---

#  Impact

AgriChain aims to:

- Reduce post-harvest losses
- Increase farmer income
- Improve supply chain efficiency
- Promote data-driven agriculture
- Build trust through explainable AI

---