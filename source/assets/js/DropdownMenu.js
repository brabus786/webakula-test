class Menu {
    constructor(id) {
        this.obj = document.querySelector(id);
        this.li = this.obj.querySelectorAll('.wrap-menu ul li a');  // node list li
        this.ul = this.obj.querySelector('.wrap-menu ul');  // ul position
        this.wrapMenu = this.obj.querySelector('.drop-down-menu .wrap-menu');
        this.eventInit();
        this.calc();
    }

    calc(){
        this.heightWrap = 0;
        for (let i = 0; i < this.li.length; i++){
            this.heightWrap =  this.heightWrap + this.li[i].clientHeight;
        }
        this.ul.style.transform = 'translate3d(' + 0 + 'px, -' +  this.heightWrap + 'px,' + 0 + 'px)';
    }

    eventInit() {
        this.obj.addEventListener("mouseover", this.open.bind(this));
        this.obj.addEventListener("mouseout", this.close.bind(this));
    }

    open() {
        this.wrapMenu.style.height =  this.heightWrap + 'px';
        this.ul.style.transform = 'translate3d(' + 0 + 'px, -' +  this.heightWrap + 'px,' + 0 + 'px)';
    }

    close() {
        this.wrapMenu.style.height = 0 + 'px';
    }


}


export default Menu;


