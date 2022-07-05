import Event, {EventColor} from "./Event";

export default class EventBuilder {
    id;
    yIndex;
    title;
    time;
    color;
    files;
    images;
    isImportant;
    isCompleted;

    constructor (id, title) {
        this.id = id;
        this.yIndex = Infinity;
        this.title = title;
        this.time = 0;
        this.color = EventColor.Default;
        this.files = [];
        this.images = [];
        this.isImportant = false;
        this.isCompleted = false;
    }

    setYindex(value = Infinity) {
        this.yIndex = value;
        return this;
    }

    setTime(time = 0) {
        this.time = time;
        return this;
    }

    setColor(value = EventColor.Default) {
        this.color = value;
        return this;
    }

    setFiles(files = []) {
        this.files = files;
        return this;
    }

    setImages(images = []) {
        this.images = images;
        return this;
    }

    setIsImportant(value = false) {
        this.isImportant = value;
        return this;
    }

    setIsCompleted(value = false) {
        this.isCompleted = value;
        return this;
    }

    build() {
        return new Event(this);
    }
}// EventBuilder