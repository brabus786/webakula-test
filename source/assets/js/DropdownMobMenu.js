class DropdownMobMenu {
    constructor(id){
        this.id = id;
        this.obj = document.querySelector(id);
        this.menumob = this.obj.querySelector('.menu-mob');
        this.eventControll();
        this.reset();
    }

    reset(){

        // for (let i = 0; i < this.menumobAll.length; i++){
        //     console.log(this.menumobAll[i]);
        // }
    }

    eventControll(){
        console.log(this.obj);
        this.obj.addEventListener('click',this.open.bind(this));
        document.addEventListener('click', (e) => {
            if (!this.obj.contains(e.target)){
            console.log(this.obj.contains(e.target));
                this.cloced()
            }
        });
    }

    evenClick(e){
        console.dir(e.target.parentElement.querySelector('.menu-mob'));
    }

    open(){
        console.log(this.menumob);
        this.menumob.style.height = this.menumob.querySelector("ul").clientHeight + 'px';
    }
    cloced(){
        this.menumob.style.height = 0 + 'px';
    }
}

export default DropdownMobMenu;

