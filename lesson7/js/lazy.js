"using strict"

const imageNodeList = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
    src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
    img.removeAttribute("data-src");
}

const options = {
    threshold: 0.5
};


const imgObserver = new IntersectionObserver ((items, imgObserver) => {
    items.forEach(item => {
        if(!item.isIntersecting) {
            return;
        } else {
            preloadImage(item.target);
            imgObserver.unobserve(item.target);
        }
    });
}, options);


imageNodeList.forEach(image => {
    imgObserver.observe(image);
});