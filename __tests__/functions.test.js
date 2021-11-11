const functions = require('../functions');
test('adds 1 + 2 to equal 3', () => {
    expect(functions.add(1, 2)).toBe(3);
});
test('adds 1 + 2 to NOT equal 4', () => {
    expect(functions.add(1, 2)).not.toBe(6);
});
test('adds 1 + 2 to be greater than 2', () => {
    expect(functions.add(1, 2)).toBeGreaterThan(2);
});
test('adds 1 + 2 to be less than 10', () => {
    expect(functions.add(1, 2)).toBeLessThan(10);
});


test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
} );
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
} );
test('Should be truthy', () => {
    expect(functions.checkValue(1)).toBeTruthy();
} );

test('User should be John', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'John',
        lastName: 'Doe'
    });
});

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});
// Promise
test('User fetched first name should be John with Promise', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.firstName).toEqual('John');
    });
});
// Async Await
test('User fetched first name should be John with Async Await', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.firstName).toEqual('John');
});