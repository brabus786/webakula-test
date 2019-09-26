class Mobmenu{
    constructor(id, id2){
        this.mobMenu = document.querySelector(id2);
        this.buttonMenu = document.querySelector(id);
        this.mobMenuUl =  this.mobMenu.querySelector('.mob-menu-ul');
        this.fleg = 0;
        this.controllEvent();
        console.log(this.mobMenuUl);
    }

    controllEvent(){
        this.buttonMenu.addEventListener('click', this.openClosed.bind(this));
    }

    openClosed(){
        if(this.fleg == 0){
            this.buttonMenu.style.transform = 'rotateZ(' + 90 + 'deg)';
            this.mobMenu.style.transform = 'translate3d(' + 0 + 'px, 0px, 0px)';
            this.mobMenu.style.width = 250 + 'px';
            this.fleg = 1;
        }else if(this.fleg == 1){
            this.buttonMenu.style.transform = 'rotateZ(' + 0 + 'deg)';
            this.mobMenu.style.transform = 'translate3d(' + 250 + 'px, 0px, 0px)';
            this.mobMenu.style.width = 0 + 'px';
            this.fleg = 0;
        }

    }
}

export default Mobmenu;
