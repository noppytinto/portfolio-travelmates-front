import Event, {EventColor} from "./Event";

export default class EventBuilder {
    title;
    starts;
    ends;
    color;
    children;
    isImportant;

    constructor (title) {
        this.title = title;
        this.starts = null;
        this.ends = null;
        this.color = EventColor.Default;
        this.children = null;
        this.isImportant = false;
    }

    setStarts(value = null) {
        this.starts = value;
        return this;
    }

    setEnds(value = null) {
        this.ends = value;
        return this;
    }

    setColor(value = EventColor.Default) {
        this.color = value;
        return this;
    }

    setChildren(children = null) {
        this.children = children;
        return this;
    }

    setIsImportant(value = false) {
        this.isImportant = value;
        return this;
    }

    build() {
        return new Event(this);
    }
}// EventBuilder