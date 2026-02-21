/**
 * Database configuration
 * Configure your database connection here
 */

const dbConfig = {
  development: {
    url: process.env.DATABASE_URL || 'your_dev_database_url',
    options: {
      // Add your database-specific options here
    }
  },
  production: {
    url: process.env.DATABASE_URL,
    options: {
      // Add your production database options here
    }
  }
};

const env = process.env.NODE_ENV || 'development';

module.exports = dbConfig[env];
