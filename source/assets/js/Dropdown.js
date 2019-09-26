class Dropdown{
    constructor(id){
        this.obj = document.querySelector(id);
        this.dropdown = this.obj.querySelector('.dropdown');
        this.selectTur = this.obj.querySelector('.select-tur');
        this.dropdownUl = this.obj.querySelector('.dropdown-ul');
        this.dropdownLiHeith = this.obj.querySelectorAll('.dropdown li');
        this.heightLiAll = 0;
        this.controlEvents();
        this.computation();
        this.fleg = 0;
        this.start();
    }

    start(){
        this.dropdownUl.style.transform = 'translate3d('+ 0 +'px, -' + 0 + 'px, '+ 0 +'px)';
    }

    computation(){
        for(let i = 0; i < this.dropdownLiHeith.length; i++ ){
            this.heightLiAll = this.heightLiAll + this.dropdownLiHeith[i].clientHeight;
        }
    }

    controlEvents(){
        this.obj.addEventListener('click',this.rout.bind(this));
    }

    rout(e){
        console.log(e.target.getAttribute('data-metka'));

      if (e.target.getAttribute('data-metka') == 'strelka' && this.fleg == 0 || e.target.getAttribute('data-metka') == 'tur' && this.fleg == 0){
          this.fleg = 1;
          this.open();
      }else if (e.target.getAttribute('data-metka') == 'strelka' && this.fleg == 1 || e.target.getAttribute('data-metka') == 'tur' && this.fleg == 1){
            this.fleg = 0;
            this.closed();
      }else if(e.target.getAttribute('data-metka') == 'nav'){
          this.fleg = 0;
          this.chenger(e.target);
          this.closed();
          console.log('net');
      }

    }

    closed(){
        this.dropdown.style.height = 0 + 'px';
        this.dropdownUl.style.transform = 'translate3d('+ 0 +'px, -' + this.heightLiAll + 'px, '+ 0 +'px)';
        console.log(this.fleg);
    }

    open(){
        this.dropdown.style.height = this.heightLiAll + 'px';
        this.dropdownUl.style.transform = 'translate3d('+ 0 +'px, -' + 0 + 'px, '+ 0 +'px)';
        console.log(this.fleg);
    }

    chenger(e){
        let text = e.innerText;
        this.selectTur.innerText = text;
        console.log(e.innerText);
        console.log(this.selectTur);
    }
}

export default Dropdown;