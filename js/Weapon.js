class Weapon {

    constructor(race) {

            document.querySelector('.world').innerHTML += `
            <div class="shuriken">
            <img src="img/1.png">
            </div>
            <div class="kunai">
            <img src="img/2.png">
            </div>
            <div class="sword">
            <img src="img/3.png">
            </div>
        `;

        this.dom = document.querySelector('.shuriken');
        this.dom = document.querySelector('.kunai');
        this.dom = document.querySelector('.sword');
        this.race = race;

    }

  
}
