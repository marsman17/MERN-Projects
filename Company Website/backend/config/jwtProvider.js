jwt.sign(
  payload,
  process.env.JWT_SECRET,
  { expiresIn: "15m" },
  (err, token) => {
    if (err) throw err;
    res.json({ token });
  }
);
