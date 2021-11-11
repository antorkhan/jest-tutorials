const functions = {
    add: (a, b) => a + b,
    isNull: () => null,
    checkValue: (a) => a,
    createUser: () => {
        const user = { firstName: 'John' };
        user['lastName'] = 'Doe';
        return user;
    },
    fetchUser: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ firstName: 'John' });
            }, 2000);
        });
    }
}

module.exports = functions;