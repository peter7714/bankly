const jwt = require("jsonwebtoken");
const createToken = require("./createToken");
const { SECRET_KEY } = require("../config");

describe('create Token', () => {
    // test('testing function', () => {
    //     console.log(createToken);
    //     const token = createToken('testUser', false);
    //     const payload = jwt.verify(token, SECRET_KEY);
    //     expect(payload).toEqual({
    //         iat: expect.any(Number),
    //         username: 'testUser',
    //         admin: false
    //     });
    // })
    test('Works: not admin', () => {
        const token = createToken('testUser', false);
        const payload =jwt.verify(token, SECRET_KEY);
        expect(payload).toEqual({
            iat: expect.any(Number),
            username: 'testUser',
            admin: false
        });
    });
    test('Works: admin', () => {
        const token = createToken('testUser', true);
        const payload = jwt.verify(token, SECRET_KEY);
        expect(payload).toEqual({
            iat: expect.any(Number),
            username: 'testUser',
            admin: true
        });
    });
    test('Works: default', () => {
        const token = createToken('testUser');
        const payload = jwt.verify(token, SECRET_KEY);
        expect(payload).toEqual({
            iat: expect.any(Number),
            username: 'testUser',
            admin: false
        });
    });
});