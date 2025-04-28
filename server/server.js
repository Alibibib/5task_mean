const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/usersdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err));

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

const User = mongoose.model('User', UserSchema);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;
  if (await User.exists({ email })) return res.sendStatus(400);
  const hashedPassword = await bcrypt.hash(password, 10);
  await new User({ username, email, password: hashedPassword, role }).save();
  res.status(201).json({ message: 'User created successfully' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) return res.sendStatus(400);
  const token = jwt.sign(
    { id: user._id, username: user.username, role: user.role },
    'SECRET_KEY',
    { expiresIn: '1h' }
  );
    res.json({ token });
});

const path = require('path');

app.use(express.static(path.join(__dirname, '../front/angular-app/dist/angular-app')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/angular-app/dist/angular-app/index.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
