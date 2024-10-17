document.addEventListener('DOMContentLoaded', (event) => {  
    const images = document.querySelectorAll('.animatable-image');  
    let currentIndex = 0;  
  
    function animateImage() {  
        if (currentIndex < images.length) {  
            const image = images[currentIndex];  
            image.style.transform = 'rotate(360deg) scale(0)'; // 图片旋转360度后缩放至消失  
            image.style.opacity = '0'; // 同时将透明度设置为0，使图片在旋转后消失  
  
            // 监听动画结束事件  
            image.addEventListener('transitionend', (event) => {  
                if (event.propertyName === 'transform') {  
                    currentIndex++; // 移动到下一个图片  
                    if (currentIndex < images.length) {  
                        animateImage(); // 继续下一个动画  
                    }  
                }  
                // 移除事件监听器以避免重复触发  
                image.removeEventListener('transitionend', arguments.callee);  
            }, { once: true }); // 使用{ once: true }选项确保事件监听器只触发一次  
        }  
    }  
  
    // 两秒后开始动画  
    setTimeout(() => {  
        animateImage(); // 开始第一个动画  
    }, 1000); // 延迟一秒  
});