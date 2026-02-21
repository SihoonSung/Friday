/**
 * User Model
 * Define your user schema/model here
 */

class User {
  constructor(data) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.createdAt = data.createdAt || new Date();
  }

  // Add model methods here
  static async findById(id) {
    // TODO: Implement database query
    return null;
  }

  static async findByEmail(email) {
    // TODO: Implement database query
    return null;
  }

  static async create(userData) {
    // TODO: Implement user creation
    return new User(userData);
  }

  async save() {
    // TODO: Implement save logic
    return this;
  }
}

module.exports = User;
