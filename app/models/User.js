class User {
    constructor (id, usarname, name, Bio, datecreated, lastupdate){
        this.id = id
        this.usarname = usarname
        this.name = name
        this.Bio = Bio
        this.datecreated = new Date()
        this.lastupdated = new Date()
    }

get getUsarname(){
    return this.usarname
}

get getBio(){
    return this.Bio
}

get getDateCreated(){
    return this.datecreated
}

get getLastUpdated(){
    return this.getlastupdated
}

set setUsarname(newusarname){
    this.usarname = newusarname
}

set setBio(newBio){
    this.bio = newBio
}

}

module.exports= User