export function Lesson(nepali, english, sound, picture, description) {
    this.nepali = nepali
    this.english = english
    this.sound = sound
    this.picture = picture
    this.description = description
    this.itemIndex = 0;

    this.getItem = function (id) {
        let itemBox = document.getElementById(id);
        let item = `
        <div class="nepali">${this.nepali[this.itemIndex]}</div>
        <div class="english">${this.english[this.itemIndex]}</div>
        <audio controls class="sound">
        <source src="${this.sound[this.itemIndex]}" type="audio/ogg"/>
        </audio>
        <div class="picture">${this.picture[this.itemIndex]}</div>
        `
        itemBox.innerHTML = item
    }
    this.getDescription = function (id) {
        let descriptionBox = document.getElementById(id)

        descriptionBox.innerHTML += `<p>${this.description}</p>`
    }

    this.getNextItem = function (id) {
        this.itemIndex++

        if (this.itemIndex === this.nepali.length) {
            this.itemIndex = 0
        }
        this.getItem((id = id))
    };

    this.getPreviousItem = function (id) {
        this.itemIndex--
        if (this.itemIndex < 0) {
            this.itemIndex = this.nepali.length - 1
        }
        this.getItem((id = id))
    };
}
