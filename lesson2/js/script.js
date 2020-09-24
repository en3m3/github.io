var checkboxes = document.querySelectorAll(".accordian-toggle");
checkboxes.forEach(item => {
    item.addEventListener("click",function(){
        checkboxes.forEach(item2 => {
            item2.checked = false;
        });
        item.checked = true;
    })
});

