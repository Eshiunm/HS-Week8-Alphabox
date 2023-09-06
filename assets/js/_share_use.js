// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper_share_use', {
    // slide 間距
    spaceBetween: 24,
    slidesPerView: 3,
    // Scrollbar 滑鼠中鍵滾輪可滑動
    //if we need scrollbar
    scrollbar: {
       el: '.swiper-scrollbar',
       draggable: true,
    },
    // 使 swiper 可以使用滑鼠滾輪捲動
    mousewheel: true,
   //  slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
 