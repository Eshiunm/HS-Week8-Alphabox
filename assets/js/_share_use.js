// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper_share_use', {
    
    breakpoints: { 
      1920:{
        slidesPerView: 3,
        width: 1320
      },
      992:{
        // slide 間距
        spaceBetween: 24,
        slidesPerView: 3,
        direction: "horizontal",
        width: 980
      }
      ,
      784:{
        // slide 間距
        spaceBetween: 24,
        slidesPerView: 3,
        direction: "horizontal",
        width: 772
      },
      576:{
        // slide 間距
        spaceBetween: 24,
        slidesPerView: 3,
        direction: "horizontal",
        width: 564
      }
    },
    // Scrollbar 滑鼠中鍵滾輪可滑動
    //if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    // 使 swiper 可以使用滑鼠滾輪捲動
    mousewheel: true,
    // slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
 