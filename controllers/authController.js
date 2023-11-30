const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = process.env.JWT_SECRET || 'your_fallback_secret_key';

const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		res.json(users);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};


const register = async (req, res) => {
	try {
		const { name, username, password } = req.body;

		// Generate salt
		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);

		// Hash password using generated salt
		const hashedPassword = await bcrypt.hash(password, salt);

		// Buat user baru
		const newUser = await User.create({
			name,
			username,
			password: hashedPassword,
		});

		res
			.status(201)
			.json({ message: 'User registered successfully', user: newUser });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to register user' });
	}
};

const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		const user = await User.findOne({
			where: {
				username,
			},
		});

		if (!user) {
			return res.status(401).json({ error: 'Invalid username or password' });
		}

		const passwordMatch = await bcrypt.compare(password, user.password);

		if (!passwordMatch) {
			return res.status(401).json({ error: 'Invalid username or password' });
		}

		const token = jwt.sign({ userId: user.id }, 'your_secret_key', {
			expiresIn: '1h',
		});
		res.json({ token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

module.exports = {
	getAllUsers,
	login,
	register,
};
