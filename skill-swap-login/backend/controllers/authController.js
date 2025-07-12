exports.loginUser = (req, res) => {
    const { email, password } = req.body;
  
    if (email === "test@example.com" && password === "123456") {
      return res.status(200).json({
        message: "Login successful",
        token: "fake-jwt-token",
      });
    }
  
    return res.status(401).json({ message: "Invalid credentials" });
  };
  