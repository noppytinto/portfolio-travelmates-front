class Journey {
    #title;
    #starts;
    #ends;
    #events;
    #locations;
    #files;

    constructor(title, starts, ends){
        this.#title = title;
        this.#starts = starts;
        this.#ends = ends;
        this.#events = []
        this.#locations = []
        this.#files = []
    }

}//