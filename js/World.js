class World {

    constructor (width, height, photo) {

            document.querySelector('body').innerHTML = `
            <div class="world">
            
            </div>
        `;

        this.dom = document.querySelector('.world');
        this.dom.style.width = width + 'px';
        this.dom.style.height = height + 'px';
        this.dom.style.backgroundImage = "url('" + photo + "')"

        this.width = width;
        this.height = height;


    }
}