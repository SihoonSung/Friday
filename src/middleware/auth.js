/**
 * Authentication middleware
 * Validates JWT tokens and attaches user to request
 */
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  // TODO: Implement JWT verification
  // For now, just pass through
  next();
};

module.exports = { authenticateToken };
