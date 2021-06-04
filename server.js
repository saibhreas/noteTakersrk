const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = procecss.env.PORT || 3000;

// sets up body parsing to route our middleware

app.use(express.json());
app.use(express.urlencoded({ extend: true}));
app.use(express.static('public'));
app.use('/api', htmlRoutes);
app.use('./', apiRoutes);

app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));