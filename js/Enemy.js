class Enemy {

    constructor(race, name ) {

            document.querySelector('.world').innerHTML = `
            <div class="peyne">
            <img src="https://stickers.wiki/static/stickers/naturochibis/file_198858.webp">
            </div>
            <div class="kirāBī">
            <img src="https://stickers.wiki/static/stickers/naturochibis/file_198857.webp">
            </div>
            <div class="hidan">
            <img src="https://stickers.wiki/static/stickers/naturochibis/file_198859.webp">
            </div>
        `;

        this.dom = document.querySelector('.peyne');
        this.dom = document.querySelector('.kirāBī');
        this.dom = document.querySelector('.hidan');
        this.race = race;
        this.name = name;

    }


}

  


