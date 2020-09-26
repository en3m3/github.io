var checkboxes = document.querySelectorAll(".accordian-toggle");
checkboxes.forEach(item => {
    item.addEventListener("click",function(e){
        checkboxes.forEach(item2 => {            
            if(item2 === this) {
                console.log(this.checked)
                if(this.checked != true) {
                    this.checked = false;
                } else {
                    this.checked = true;
                }
            } else {
                console.log('false')
                item2.checked = false;
            }
        })

        
    })
});

