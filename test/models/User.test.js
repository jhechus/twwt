const User = require('./../../app/models/User')

describe('Unit test for User class', () => { 

    test('Create aun User object', () => { 
        //codigo para usar en la app 
    const user = new User(1, 'jechus', 'jesus', 'Bio', 'datecreated', 'lastupdate')



        expect(user.id).toBe(1)
        expect(user.usarname).toBe('jechus')
        expect(user.name).toBe('jesus')
        expect(user.Bio).toBe('Bio')
        expect(user.datecreated).toBe('datecreated')
        expect(user.lastupdate).toBe('lastupdate')
    });

})