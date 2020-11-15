let boxViewCreate=()=>{
    let boxView=document.getElementById('createBox');
    
    boxView.style.display='flex';
    boxView.innerHTML=
    `<section class='create-gif-section'>
    <p class='create-gif-title'>Crear Guifos</p>
    <div class="create-gif-window">
        <div class="window-img"><img src="assets/images/window img.png" alt=""></div>
        <div>
            <p class="subtitle-window"><strong>Aquí podrás crear tus propios guifos</strong></p>
            <div class="create-gif-text">
                <p>Crear tu<span class="it-bld"> guifo </span>es muy fácil, graba cualquier imagen con tu cámara y
                    obtén guifos
                    personalizados.
                    Los pasos para crear tu guifo son:</p>
                
                <p>
                    <p><b>1)</b> Dar permisos de acceso a la cámara (sólo por el tiempo de uso)</p>
                    
                    <p><b>2)</b> Capturar tu momento guifo</p>
                    
                    <p><b>3)</b> Revisar el momento</p>
                    
                    <p><b>4)</b> Listo para subir y compartir!</p>
                    
                    <p>¿Quieres comenzar a crear tu <span class="it-bld">guifo</span> ahora?</p>
                </p>
                <div class="create-gif-btns">
                <button class="btn-create-gif confirm" onclick="grabar()"><span>Comenzar</span></button>
                    <a href="index.html">
                    <button  class="btn-create-gif cancel"><span>Cancelar</span></button></a>

                </div>
            </div>
        </div>
    </div>
</section>`

}