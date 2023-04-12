const sqlForPartialUpdate = require('./partialUpdate');

describe('sqlForPartialUpdate', () => {
    test('1 item', () => {
        const update = sqlForPartialUpdate('users', {email: 'lmao@email.com'}, 'username', 'koda');
        expect(update).toEqual({
            query: "UPDATE users SET email=$1 WHERE username=$2 RETURNING *",
            values: ['lmao@email.com', 'koda']
        });
    });
    test('2 items', () => {
        const update = sqlForPartialUpdate('users', {email: 'lmao@email.com', first_name: 'peter'}, 'username', 'koda');
        expect(update).toEqual({
            query: "UPDATE users SET email=$1, first_name=$2 WHERE username=$3 RETURNING *",
            values: ['lmao@email.com', 'peter', 'koda']
        });
    });
});