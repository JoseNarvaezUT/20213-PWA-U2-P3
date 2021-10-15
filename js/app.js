
let pathSw = '/20213-PWA-U2-P3/sw.js';
let url = window.location.href;
if(navigator.serviceWorker){
    if(url.includes('localhost')){
        pathSw='/sw.js';
    }
    navigator.serviceWorker.register(pathSw);
}

let principal =  $('#principal');
let notice = $('#notice');

$('.btn-seguir').on('click',function(e){
    e.preventDefault();
    console.log('Pulsaste el btn-seguir');
    principal.fadeOut(function(){
        notice.slideDown(1000);
    });
    // notice.fadeIn('slow',function(){
    //     principal.slideUp(1000)
    // });
});
$('.btn-regresar').on('click',function(){
    notice.fadeOut(function(){
        principal.slideDown(1000);
    });
});