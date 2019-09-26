class Tab {
    constructor(id){
        this.obj = document.querySelector(id);
        this.HotTours = this.obj.querySelector('.Hot-tours');

        this.PopularTours = this.obj.querySelector('.Popular-tours');
        this.owlcarousel2 = this.obj.querySelector('.owl-carousel2');
        this.owlcarousel = this.obj.querySelector('.owl-carousel');
        this.controllEvent();
    }

    controllEvent(){
        this.obj.addEventListener('click',this.target.bind(this));
    }

    target(e){

        if(e.target == this.HotTours || e.target ==  this.PopularTours){
            console.log('da');

            this.HotTours.classList.remove('active');
            this.PopularTours.classList.remove('active');

            let owlcarousel2 = this.owlcarousel2;
            let owlcarousel = this.owlcarousel;


            if(e.target.classList.contains('active') == false){
                e.target.classList.add('active');
                console.log('active');
                if(e.target.classList.contains('Hot-tours') == true){
                    this.owlcarousel.style.display = 'block';
                    this.owlcarousel2.style.display = 'none';

                    setTimeout(function () {
                        owlcarousel.style.opacity = '1';
                    },500);

                    setTimeout(function () {
                        owlcarousel2.style.opacity = '0';
                    },500);

                }else if(e.target.classList.contains('Popular-tours') == true){
                    this.owlcarousel.style.display = 'none';
                    this.owlcarousel2.style.display = 'block';

                    setTimeout(function () {
                        owlcarousel.style.opacity = '0';
                    },500);

                    setTimeout(function () {
                        owlcarousel2.style.opacity = '1';
                    },500);

                }
            }
        }



    }
}



export default Tab;