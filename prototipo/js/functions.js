
function include(arquivo, id){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', arquivo);
    xhr.send();
    xhr.onreadystatechange = () => {
        document.getElementById(id).innerHTML = xhr.responseText;
    };   
}

function enviarMsg(){
    let message = document.getElementById("message");
    let chat = document.getElementById("chat");
    chat.innerHTML += "<div class='col-12'><small><strong>Você</strong> </small> <br> <small>"+ message.value +"</small> </div>";
    message.value = null;
}
function changeStatus(){
    let object = document.getElementById('titleChat');
    if(object.classList.contains("text-success")){
        object.classList.remove("text-success");
        object.classList.add("text-danger");
        object.setAttribute("title", "Desconectado");
    }else{
        object.classList.remove("text-danger");
        object.classList.add("text-success");
        object.setAttribute("title", "Conectado");
    }
}

totalToast = 0;
function toast(mensagem){
    let areaToast = document.getElementById('areaToast');
    areaToast.innerHTML += "<div id='toast"+ totalToast +"' class='toast align-items-center' role='alert' aria-live='assertive' aria-atomic='true'> <div class='d-flex'> <div class='toast-body'>" +
        mensagem +
    " </div> <button type='button' class='btn-close me-2 m-auto' data-bs-dismiss='toast' aria-label='Close'></button> </div> </div>";
    myToast = new bootstrap.Toast(document.getElementById('toast' + totalToast));
    myToast.show();
    totalToast++;
    console.log(totalToast);
}