const jwt = require('jsonwebtoken');

const authGuard = (deps) => {
    return (req, res, next) => {
        const path = req.href().slice(1, 6);
        if (!deps.exclusions.includes(req.href())) {
            const token = req.headers['x-access-token'];
            if (!token) {
                res.send(403, { error: 'Token não fornecido.' });
                return false;
            }
            try {
                req.decoded = jwt.verify(token, process.env.JWT_secret);
                if (path === 'admin') {
                    if (req.decoded.role !== 'admin') {
                        res.send(401, { error: 'Não autorizado.' });
                        return false;
                    }
                }
            } catch (error) {
                res.send(403, { error: 'Token inválido.' });
                return false;
            }
        }

        next();
    }
}

module.exports = authGuard;
