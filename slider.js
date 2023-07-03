
/*Author: JOTA DÍAZ;*/

window.addEventListener('load', (event)=>{
    slider();
    tactil();
});

function slider(){
    const next = document.getElementById('next'); 
    const previous = document.getElementById('previous');

    next.onclick = (move) => {

        document.querySelectorAll('.wrap').forEach(function(wrap){

            if(wrap.classList.contains('place2')){
                wrap.classList.add('place1');
                wrap.classList.remove('place2');
            }else if(wrap.classList.contains('place1')){
                wrap.classList.add('place3');
                wrap.classList.remove('place1');
            }else{
                wrap.classList.add('place2');
                wrap.classList.remove('place3');
            }
        });
    }

    previous.onclick = (previous) => {

        document.querySelectorAll('.wrap').forEach(function(wrap){

            if(wrap.classList.contains('place2')){
                wrap.classList.add('place3');
                wrap.classList.remove('place2');
            }else if(wrap.classList.contains('place1')){
                wrap.classList.add('place2');
                wrap.classList.remove('place1');
            }else{
                wrap.classList.add('place1');
                wrap.classList.remove('place3');
            }
        });
    }
}

function tactil(){
    const slider = document.getElementById('move');

    let touchstartX = 0;
    let touchendX = 0;

    slider.addEventListener('touchstart', (event) => {
        touchstartX = event.changedTouches[0].screenX;
    }, false);

    slider.addEventListener('touchend', (event) => {
        touchendX = event.changedTouches[0].screenX;
        swipe();
    }, false);

    function swipe() {
        if (touchendX < touchstartX) {
            document.querySelectorAll('.wrap').forEach(function(wrap){

                if(wrap.classList.contains('place2')){
                    wrap.classList.add('place1');
                    wrap.classList.remove('place2');
                }else if(wrap.classList.contains('place1')){
                    wrap.classList.add('place3');
                    wrap.classList.remove('place1');
                }else{
                    wrap.classList.add('place2');
                    wrap.classList.remove('place3');
                }
            });
        }
        
        if (touchendX > touchstartX) {
            document.querySelectorAll('.wrap').forEach(function(wrap){

                if(wrap.classList.contains('place2')){
                    wrap.classList.add('place3');
                    wrap.classList.remove('place2');
                }else if(wrap.classList.contains('place1')){
                    wrap.classList.add('place2');
                    wrap.classList.remove('place1');
                }else{
                    wrap.classList.add('place1');
                    wrap.classList.remove('place3');
                }
            });
        }
    }
}