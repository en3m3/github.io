var checkboxes = document.querySelectorAll(".accordian-toggle");
checkboxes.forEach(item => {
    item.addEventListener("click",function(e){
        checkboxes.forEach(item2 => {
            if(this != e.path[0]) {
                item2.checked = false;
            } else{
                if(!e.checked) {
                    e.checked = false;
                } 
                if(e.checked) {
                    e.checked = true;
                }
            }
        })
    })
});

