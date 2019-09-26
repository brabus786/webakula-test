'use strict';
import lozad from 'lozad';
import FormValidator from './FormValidator';
import Dropdown from './Dropdown';
import Mobmenu from './MobMenu';
import Menu from './DropdownMenu';
import DropdownMobMenu from "./DropdownMobMenu";
import Tab from "./Tab";


(function () {
    $(document).ready(function(){
        //Drop downs and mobile menu
        let mobmenu = new Mobmenu('#button-menu','#mob-menu');
        let menu = new Menu('#d1');
        let menu2 = new Menu('#d2');
        let dropdown = new Dropdown('#dd1');

        let dropdownmobmenu = new DropdownMobMenu('#mob1');
        let dropdownmobmenu2 = new DropdownMobMenu('#mob22');

        let tab = new Tab('#screen2');

        //Form Validation
        let form = document.querySelector("#dd1");
        let formValidator = new FormValidator(form, () => {
            alert("Success, Create lead with Ajax :)")
        });

        //Owl carousel init

        $('.owl-carousel').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:2,
                    nav:false,
                    margin:7
                },
                450:{
                    items:2,
                    margin:15,
                    nav:false
                },
                768:{
                    items:1,
                    nav:false
                },
                991:{
                    items:2,
                    margin:15,
                    nav:false
                },
                1685:{
                    items:3,
                    margin:15
                }
            }
        })



        $('.owl-carousel2').owlCarousel({
            loop:true,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:2,
                    nav:false,
                    margin:7
                },
                450:{
                    items:2,
                    margin:15,
                    nav:false
                },
                768:{
                    items:1,
                    nav:false
                },
                991:{
                    items:2,
                    margin:15,
                    nav:false
                },
                1685:{
                    items:3,
                    margin:15
                }
            }
        })



        $('.owl-carousel-top').owlCarousel({
            loop:true,
            lazyLoadEager: 1,
            nav:false,
            dots:true,
            autoplay:true,
            lazyLoad: true,
            smartSpeed:1000,
            autoplayTimeout:8000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

        //Lazy load
        const observer = lozad();
        observer.observe();
        document.querySelectorAll("img.lozad").forEach(img => {
            observer.triggerLoad(img);
        });
    });
}());

