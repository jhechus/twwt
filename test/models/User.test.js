const User = require('./../../app/models/User')

describe('Unit test for User class', () => { 

    test('Create aun User object', () => { 
        //codigo para usar en la app 
    const user = new User(1, 'jechus', 'jesus', 'Bio', 'datecreated', 'lastupdated')

        expect(user.id).toBe(1)
        expect(user.usarname).toBe('jechus')
        expect(user.name).toBe('jesus')
        expect(user.Bio).toBe('Bio')
        expect(user.datecreated).not.toBeUndefined()
        expect(user.lastupdated).not.toBeUndefined()
    })

    test('add getters', () => {
        const user = new User (1,'jechus', 'jesus', 'Bio')
        
        expect(user.getUsarname).toBe('jechus')
        expect(user.getBio).toBe('Bio')
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getDateCreated).not.toBeUndefined()
    })

    test('add setters', () => {
        const user = new User (1,'jechus', 'jesus', 'Bio')
        user.setUsarname = "Rosas"
        expect(user.usarname).toBe('Rosas')

        user.setBio = "new bio"
        expect(user.bio).toBe('new bio')
    })

})