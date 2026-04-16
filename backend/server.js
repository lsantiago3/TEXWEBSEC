const express = require('express');
const app = express();
const PORT = 5000;

// Allow JSON in requests
app.use(express.json());

// CONNECT YOUR ROUTES
const testRoutes = require('./routes/testRoutes');
app.use('/api', testRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('TEXWEBSEC backend is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



