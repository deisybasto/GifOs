let metaStream = '';
let stylebkg = '';
let txtHeader = document.getElementById('txtHeader');
let camera = document.getElementById('camera');
let record = document.getElementById('record_capturar');
let stopButton=document.getElementById('stop_capturar');
let txtTimer=document.getElementById('timer');
let divUmpload=document.getElementById('section_umpload');
let timerResume=document.getElementById('timer_resume');
let umpload=document.getElementById('umpload_captura');
let repeat=document.getElementById('repeat_captura');
let imgPlay=document.getElementById('img_play');
let imgGlobe=document.getElementById('img-globe');
let txtSubiendo=document.getElementById('texto-subiendo');
let video=document.getElementById('miVideo');
let umploadGif=document.getElementById('upload-bar');
let tiemposubiendo=document.getElementById('tiempo-subiendo');
let record_screen=document.getElementById('record_screen');
let timeFraction=document.getElementById('time-fraction')
let umploadButton=document.getElementById('umpload');
let repeatButton=document.getElementById('repeat');
let cancelUmpload=document.getElementById('cancel_umpload');
let imgElm=document.getElementById('imgElem');
let umploadCount=0;
let statusd='';
let intervalId;
let archivo='';
let form='';
let urlIMG='';
let imgReady=document.getElementById('previewDown');
const localStorageTheme = window.localStorage.getItem('theme') || '';
let idurl='';



let controller=new AbortController();
let signal=controller.signal;

let theme=()=>{
    if(localStorageTheme=='sailorNight'){
     let themeStr=document.getElementById('themeCss');

     return themeStr.href='assets/themes/purple/purple-style.css';
    }
}
let navigatorMedia = navigator.mediaDevices.getUserMedia
        ({
            audio: false,
            video: {
                width: 832,
                height: 434
            }
        });

let buttonRecording = () => {
    txtHeader.textContent = 'Captura Tu Guifo';
    record.style.display='none';
    stopButton.style.display='flex';
    txtTimer.style.display='block';
}

let buttonStopRecording=()=>{
    txtHeader.textContent='Vista Previa'
    stopButton.style.display='none';
    divUmpload.style.display='flex';
    timerResume.style.display='flex';
    imgPlay.style.display='inline';

}

let buttonInitRecord=()=>{
    txtHeader.textContent='Un Chequeo Antes de Empezar';
    divUmpload.style.display='none';
    timerResume.style.display='none';
    record.style.display='flex';
    txtTimer.style.display='none';
}

let loaderUmpload=()=>{
    imgGlobe.style.display='block';
    txtSubiendo.style.display='inline';
    umploadGif.style.display='flex';
    tiemposubiendo.style.display='inline';
    video.style.display='none';
    document.getElementById('imgElem').style.display="none";
    record_screen.style.background='white';
    repeatButton.style.display='none';
    umploadButton.style.display='none';
    timerResume.style.display='none';
    document.getElementById('section-timer').style.display='none';
    cancelUmpload.style.display='inline';

}
let canceling=()=>{
    imgGlobe.style.display='none';
    txtSubiendo.style.display='none';
    umploadGif.style.display='none';
    tiemposubiendo.style.display='none';
    cancelUmpload.style.display='none';
    imgElm.style.display='block';
    timerResume.style.display='flex';
}
 let clearInt= ()=>{
    timeFraction.value=100;
    clearInterval(intervalId);
 }

 let umpForm=()=>{
    document.getElementById('record_div').style.display='none'
    cancelUmpload.style.display='none'
 }

function initRecord() {
    navigatorMedia.then((stream) => {
            video.srcObject = stream;
            metaStream = video.srcObject;
        }).catch((err) =>  alert('No se puede acceder a tu cámara.Recarga la pagina'));

    return navigatorMedia;

};

repeat.addEventListener('click',()=>{
   location.reload();
   buttonInitRecord();
   initRecord();
    
 })

let recording = () => {
    buttonRecording();
     initCrono();
  navigatorMedia.then(async function(stream,recorder){
      recorder= RecordRTC(stream, {
        type: 'gif',
        frameRate: 1,
        quality: 480,
        width: 832,
        height: 434,
        hidden: 240,
    })
    recorder.startRecording();
   
    
    let previosUmpload =()=>{
        buttonStopRecording();
        stopCrono();
        

        recorder.stopRecording(function(){

            archivo= new Blob();
            archivo = recorder.getBlob();
            urlIMG=URL.createObjectURL(archivo);
            document.getElementById('miVideo').style.display="none"; 
            document.getElementById('imgElem').style.display="block";
            document.getElementById('imgElem').setAttribute('src',`${URL.createObjectURL(archivo)}`);

            console.log(urlIMG);

            form = new FormData();
             form.append('file', archivo, 'myGif.gif');
        })
        paints();
    };
    
    stopButton.addEventListener('click',()=>{
        previosUmpload();
    });

    cancelUmpload.addEventListener('click',()=>{
        controller.abort();
        canceling();
        document.getElementById('section-timer').style.display='flex';
        document.getElementById('umpload').style.display='flex';
        document.getElementById('repeat').style.display='flex';
        document.getElementById('imgElem').setAttribute('src',`${urlIMG}`);
        console.log(urlIMG)
        clearInterval(intervalId);
    
      });

            umpload.addEventListener('click',()=>{
            var gifURL = URL.createObjectURL(archivo);
            statusd;
            console.log(statusd);
            intervalId=setInterval(()=>{
                timeFraction.value=umploadCount;
                umploadCount++
                console.log(umploadCount);
            },1000)
            
            loaderUmpload();
            fetch('https://upload.giphy.com/v1/gifs?' + 'api_key=oQ8tvS61Gv8Wgf7zKTKIW06ry9HrANl5' + '&source_image_url=' + gifURL, {       
                method: "POST",
                body: form,
                signal: signal
            })
            .then(Response => {
                
                 return Response.json();

            })
            .then(data => {

                localStorage.setItem(nameLstGif(), JSON.stringify(data));
                
                umpForm();
                clearInt();
                boxFileDownload();
                imgReady.setAttribute('src',`${urlIMG}`);
                imgReady.style.width='365px';
                imgReady.style.height='191px';
                idurl=data.data.id

                
               // sendGifsLocalStr(JSON.stringify(data))
               let reader = new FileReader(); 
               reader.readAsDataURL(archivo); 
               reader.onloadend = function () { 
               let base64String = reader.result;
               let gifString=base64String.substring(22);
               let order = localStorage.length + 1;
               gifOrder = 'gif ' + order;
              localStorage.setItem(gifOrder, gifString);
                }
                let buttonDownload=document.getElementById('buttonDownload')

              buttonDownload.addEventListener('click', ()=>{
               let order=localStorage.length
               let gifOrder = 'gif ' + order
               recorder.save(localStorage.getItem(gifOrder));
  });
                                
            })
            .catch(error => {
                return error
            });
            console.log(statusd);
            
            
        });
       
  })
    
};

window.addEventListener('load', () => {
    initRecord();
    theme();  
    
});
