const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

// Database configuration
const connectionConfig = {
  host: 'localhost',
  user: 'root',         
  password: 'Sr1shti@', 
  database: 'hackathon',
  port: 3000
};

(async () => {
  let connection;
  
  try {
    // 1. Establish database connection
    connection = await mysql.createConnection(connectionConfig);
    console.log(' Database connection established');

    // 2. Fetch all users (using email as the identifier since there's no id column)
    const [users] = await connection.execute('SELECT name, email, password_hash FROM users');
    console.log(` Found ${users.length} users to process`);

    // 3. Process each user
    for (const user of users) {
      try {
        // Skip if no password exists
        if (!user.password_hash) {
          console.log(` No password for ${user.email}, skipping`);
          continue;
        }

        // Convert to string and trim whitespace
        const rawPassword = String(user.password_hash).trim();

        // Skip if already hashed
        if (rawPassword.startsWith('$2a$') || 
            rawPassword.startsWith('$2b$') || 
            rawPassword.startsWith('$2y$')) {
          console.log(` Password already hashed for ${user.email}, skipping`);
          continue;
        }

        // Skip if password is empty after trim
        if (rawPassword.length === 0) {
          console.log(` Empty password for ${user.email}, skipping`);
          continue;
        }

        // Hash the password
        const hashed = await bcrypt.hash(rawPassword, 10);
        
        // Update using email as the identifier
        await connection.execute(
          'UPDATE users SET password_hash = ? WHERE email = ?',
          [hashed, user.email]
        );

        console.log(` Updated password for ${user.email}`);
      } catch (userError) {
        console.error(` Error processing user ${user.email}:`, userError.message);
      }
    }

    console.log(' All passwords processed successfully!');
  } catch (error) {
    console.error(' Main process error:', error.message);
    
    // Specific error handling
    if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error(' Authentication failed. Please verify:');
      console.error('- MySQL server is running');
      console.error('- Username and password are correct');
      console.error('- Try connecting with MySQL Workbench first');
    } else if (error.code === 'ECONNREFUSED') {
      console.error(' Connection refused. Is MySQL running on port 3306?');
    }
  } finally {
    if (connection) {
      await connection.end();
      console.log(' Database connection closed');
    }
  }
})();