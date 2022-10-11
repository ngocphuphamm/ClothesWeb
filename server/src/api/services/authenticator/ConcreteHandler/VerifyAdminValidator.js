const jwt = require('jsonwebtoken');
const AbtractValidator = require('../../authenticator/AbtractValidator')

class VerifyAdminValidator extends AbtractValidator {
    getAuthorization = (model) => model.authorization;

    isValid(model) {
        const authHeader = this.getAuthorization(model);
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            jwt.verify(token, 'mySecretKey', (err, dataUser) => {
                if (err) {
                    return false;
                } else {
                    return dataUser;
                }
            });
        } else {
            return false;
        }
    }
}
module.exports = VerifyAdminValidator;
