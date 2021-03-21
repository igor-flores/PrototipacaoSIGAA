
function include(arquivo, id){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', arquivo);
    xhr.send();
    xhr.onreadystatechange = () => {
        document.getElementById(id).innerHTML = xhr.responseText;
    };   
}