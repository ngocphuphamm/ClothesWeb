const EmailValidator = require('./ConcreteHandler/EmailValidator');
const IsEmptyValidator = require('./ConcreteHandler/IsEmptyValidator');
const PasswordValidator = require('./ConcreteHandler/PasswordValidator');
const ValidatorChainBuilder = require('./ValidatorChainBuilder');
const IsEmptyValidatorToken = require('./ConcreteHandler/IsEmptyValidatorToken');
class ValidatorService {
    constructor() {
        this.switch = {
            VALIDATE_LOGIN: async () => {
                const validators = new ValidatorChainBuilder();
                await validators.add(new IsEmptyValidator());
                await validators.add(new EmailValidator());
                await validators.add(new PasswordValidator());
                return (this.validators = validators.getFirst());
            },
            VALIDATE_REQUEST: async () => {
                const validators = new ValidatorChainBuilder();
                await validators.add(new IsEmptyValidatorToken());
                return (this.validators = validators.getFirst());
            },
        };
    }
    async performValidation(model) {
        const step = model.currentStep.toString();
        await this.switch[step]();
        return await this.validators.isValid(model);
    }
}
module.exports = ValidatorService;
