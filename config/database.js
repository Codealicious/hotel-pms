const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  const db = mongoose.connection;

  db.on('connected', function() {
      console.log(`connected to ${db.name} @ ${db.host}:${db.port}`);
  }
  );