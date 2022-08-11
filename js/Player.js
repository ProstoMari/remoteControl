class Player {

    constructor(race, name ) {

        document.querySelector('.world').innerHTML += `
            <div class="player">
            
            </div>
        `;

        this.dom = document.querySelector('.player');
        this.race = race;
        this.name = name;
        this.left = 0;
        this.top = 0;

    }

    goLeft() {
        
        if (this.left - 100 >= 0) {
            this.left = this.left - 100;
            this.dom.style.left = this.left + 'px';
            this.dom.style.backgroundImage = 'url("https://stickers.wiki/static/stickers/naturochibis/file_198840.webp")';
        }

    }
    goRight() {
      
        if (this.left + 100 < parseInt(document.querySelector(".world").style.width)) {
            this.left = this.left + 100;
            this.dom.style.left = this.left + 'px';
            this.dom.style.backgroundImage = 'url("https://stickers.wiki/static/stickers/naturochibis/file_198844.webp")';
        }

    }
    goUp() {

        if (this.top - 100 >= 0) {
            this.top = this.top - 100;
            this.dom.style.top = this.top + 'px';
            this.dom.style.backgroundImage = 'url("https://stickers.wiki/static/stickers/naturochibis/file_198843.webp")';

        }

    }
    goDown() {
        if (this.top + 100 < parseInt(document.querySelector(".world").style.height)) {
        this.top = this.top + 100;
        this.dom.style.top = this.top + 'px';
        this.dom.style.backgroundImage = 'url("https://stickers.wiki/static/stickers/naturochibis/file_198842.webp")';
        }
    }
    goSus() {
        if (this.left + 100 < parseInt(document.querySelector(".world").style.width)) {
            this.left = this.left + 100;
            this.dom.style.left = this.left + 'px';
            this.dom.style.backgroundImage = 'url("https://i.pinimg.com/originals/c0/d9/c2/c0d9c2558cb83c2b5beba118f0a13e5f.png")';
        }
    }

}

