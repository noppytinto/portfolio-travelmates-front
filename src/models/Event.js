export const EventColor = {
    Default: 'default',
    Grey: 'grey',
    Blue: 'blue',
    Orange: 'orange',
    Green: 'green',
    Red: 'red',
}

export default class Event {
    title;
    starts;
    ends;
    color;
    children;
    isImportant;

    constructor (builder) {
        this.title = builder.title;
        this.starts = builder.starts;
        this.ends = builder.ends;
        this.color = builder.color;
        this.children = builder.children;
        this.isImportant = builder.isImportant;
    }

}// Event