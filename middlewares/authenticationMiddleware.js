const jwt = require('jsonwebtoken');

const authenticationMiddleware = (req, res, next) => {
	const authToken = req.headers.authorization;

	if (!authToken) {
		return res
			.status(401)
			.json({ error: 'Unauthorized: Missing authentication token' });
	}

	const token = authToken.split(' ')[1];

	try {
		const secretKey = process.env.JWT_SECRET || 'your_fallback_secret_key';
		const decoded = jwt.verify(token, secretKey);
		req.user = decoded;
		next();
	} catch (error) {
		return res
			.status(401)
			.json({ error: 'Unauthorized: Invalid authentication token' });
	}
};

module.exports = authenticationMiddleware;
