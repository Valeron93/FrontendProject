
export function getPasswordErrors(password) {

    const passwordFilters = {
        digit: {
            exp: /[0-9]/, error: "Password should have at least one digit"
        },
        letter: {
            exp: /[A-Za-z]/, error: "Password should have at least one letter"
        },
        length: {
            func: (p) => p.length >= 5, error: "Password should be at least 5 characters long"
        }
    }
    let errors = [];
    for (let filter of Object.values(passwordFilters)) {
        if (filter.exp !== undefined && !filter.exp.test(password)) {
            errors.push(filter.error);
        }
        else if (filter.func && !filter.func(password)) {
            errors.push(filter.error);
        }
    }
    return errors;
}