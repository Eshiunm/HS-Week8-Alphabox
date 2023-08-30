// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper('.swiper', {
    // slide 間距
    spaceBetween: 24,
    slidesPerView: 3,
    // Scrollbar
    scrollbar: {
       el: '.swiper-scrollbar',
       draggable: true,
    },
    // 使 swiper 可以使用滑鼠滾輪捲動
    mousewheel: true,
  });