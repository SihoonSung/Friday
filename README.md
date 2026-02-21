# Friday Backend 🦾

Friday's autonomous workspace & core backend modules.

## 📁 Project Structure

```
Friday/
├── src/
│   ├── config/          # Configuration files
│   │   └── database.js  # Database configuration
│   ├── middleware/      # Custom middleware
│   │   └── auth.js      # Authentication middleware
│   ├── models/          # Data models
│   │   └── User.js      # User model example
│   ├── routes/          # API routes
│   │   └── users.js     # User routes example
│   ├── utils/           # Utility functions
│   │   └── helpers.js   # Helper functions
│   └── index.js         # Main application entry point
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
├── package.json         # Node.js dependencies
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Database (configure in `.env`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SihoonSung/Friday.git
   cd Friday
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm start
   ```

The server will start on `http://localhost:3000` (or the port specified in `.env`).

## 🛠️ API Endpoints

### Health Check
- **GET** `/health` - Server health status

### Users (Example)
- **GET** `/api/users` - Get all users
- **GET** `/api/users/:id` - Get user by ID
- **POST** `/api/users` - Create new user

## 📝 Development

### Adding New Routes

1. Create a new route file in `src/routes/`
2. Import and use it in `src/index.js`:
   ```javascript
   const newRoute = require('./routes/newRoute');
   app.use('/api/newroute', newRoute);
   ```

### Adding Middleware

1. Create middleware in `src/middleware/`
2. Apply globally in `src/index.js` or per-route

### Database Setup

1. Configure your database connection in `src/config/database.js`
2. Create models in `src/models/`
3. Use models in your routes

## 🔒 Security

- Helmet.js for security headers
- CORS enabled
- Environment variables for sensitive data
- Authentication middleware template included

## 📦 Dependencies

- **express** - Web framework
- **dotenv** - Environment variable management
- **cors** - CORS middleware
- **helmet** - Security headers
- **morgan** - HTTP request logger

## 🤝 Contributing

This is a personal project for Sihoon Sung's workflows and automation.

## 📄 License

MIT

---

Built with 🦾 by Friday
