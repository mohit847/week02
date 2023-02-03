const EMAIL_REG_EX = /^(([A-Za-z0-9]*\.+*_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\+)|([A-Za-z0-9]+\+))*[A-Z‌​a-z0-9]+@{1}((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,4}$/

export const isEmail = (email) => {
    if (typeof email !== "string") {
        return false;
    }
    return EMAIL_REG_EX.test(email)
}

export const isValidUser = (user) => isEmail(user.email) && user.password && user.firstName && user.lastName;
