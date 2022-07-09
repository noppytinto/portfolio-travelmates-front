export const EventColor = {
    Default: '',
    Grey: 'grey',
    Blue: 'blue',
    Orange: 'orange',
    Green: 'green',
    Red: 'red',
}

export default class Event {
    id;
    title;
    time;
    color;
    files;
    images;
    isImportant;
    isCompleted;
    revealTime;
    owner;

    constructor (builder) {
        this.id = builder.id;
        this.title = builder.title;
        this.time = builder.time;
        this.color = builder.color;
        this.files = builder.files;
        this.images = builder.images;
        this.isImportant = builder.isImportant;
        this.isCompleted = builder.isCompleted;
        this.revealTime = builder.revealTime;
    }

    // getId() {
    //     return this.#id;
    // }

}// Event