// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper_share_use', {
    
    breakpoints: { 
      992:{
        // slide 間距
        spaceBetween: 24,
        slidesPerView: 3,
        direction: "horizontal",
        // Scrollbar 滑鼠中鍵滾輪可滑動
        //if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
      },
      372:{
        spaceBetween: 24,
        slidesPerView: 1,
        direction: "vertical",
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: false,
        },
        // grid: {
        //   columns: 4,
        // }
      }
    },
    // 使 swiper 可以使用滑鼠滾輪捲動
    mousewheel: true,
    // slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
 