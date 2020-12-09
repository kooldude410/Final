const displayimg = document.getElementById('displayed-img');
const thumbimg = document.getElementsByClassName('thumb-img');
const thumbbar = document.getElementById('thumb-bar');
const button = document.getElementsByTagName('button');
const effect = document.getElementById('effect');


function loadpics(){
    var tempimg;
    for(var i = 1; i<6; i++){
        var tempimg = document.createElement('img');
        tempimg.class = 'thumb-img'
        tempimg.src = 'images/pic' + i + '.jpg';
        thumbbar.appendChild(tempimg);
    }

}

function mouseover(filepath){

    var splitpath = filepath.split('/');
    console.log(splitpath[splitpath.length - 1]);
    displayimg.src = 'images/' + splitpath[splitpath.length - 1];
}

function submit(){

    if (effect.value == 'blur'){
        var splitblur = displayimg.src.split('.');
        displayimg.src = splitblur[0]+'B.'+splitblur[1];
    }else{

        window.alert("Invalid entry:\nOnly valid input is 'blur'");

    }
    
    effect.value = '';
    console.log('test');

}


function main(){
    loadpics();

    button[0].addEventListener('click', submit);

    thumbbar.addEventListener('mouseover', function(e){
        const target = e.target;
        if(target.matches('img')){
            mouseover(target.src);
        }
    });

    

}

main();