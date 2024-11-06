/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



  


  // 回到頂部按鈕
  document.addEventListener('DOMContentLoaded', (event) => {
    // 返回顶部功能的JavaScript实现
    const goTopBtn = document.querySelector('.goTopBtn');
    const goTopContainer = document.querySelector('.goTop');
    
    goTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 显示/隐藏按钮的逻辑
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        goTopContainer.style.display = 'block';
      } else {
        goTopContainer.style.display = 'none';
      }
    });
  });


 // 自介照片幻燈片
  const slideshow = document.querySelector('.slideshow');
  const images = slideshow.querySelectorAll('img');
  let currentIndex = 0;
  
  function showImage(index) {
    images.forEach((img, i) => {
      if (i === index) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  setInterval(nextImage, 2500); // 每 2.5 秒切換一次圖片



// 滑鼠lottie
window.addEventListener('scroll', function() {
  const scrollDownElement = document.querySelector('.scroll_down');
  if (window.scrollY > 100) { // 當滾動超過 100 像素時
      scrollDownElement.classList.add('hidden');
      
      // 延遲一段時間以確保過渡效果完成
      setTimeout(function() {
          scrollDownElement.remove(); // 永久移除元素
      }, 100); // 100 毫秒，與 CSS 中的過渡時間相同
  }
});


  