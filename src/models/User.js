class User {
    id;
    username;
    email;
    firstName;
    lastName;
    events;
    checklists;
    friends;

    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.firstName = '';
        this.events = [];
        this.checklists = [];
        this.friends = [];
    }

    setFirstName(value) {
        this.firstName = value;
    }

    setLastName(value) {
        this.lastName = value;
    }
}//

export default User;