/**
 * Utility functions
 */

/**
 * Format error response
 */
const formatError = (error) => {
  return {
    error: error.message,
    timestamp: new Date().toISOString()
  };
};

/**
 * Format success response
 */
const formatSuccess = (data, message = 'Success') => {
  return {
    success: true,
    message,
    data,
    timestamp: new Date().toISOString()
  };
};

/**
 * Validate email format
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

module.exports = {
  formatError,
  formatSuccess,
  isValidEmail
};
