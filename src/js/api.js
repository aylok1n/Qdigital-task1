let remoteImg = []
export async function api(){
    let response = await fetch('https://imagesapi.osora.ru/');

    if (response.ok) { 
    let json = await response.json();
    remoteImg = json
    } else {
    alert("Ошибка HTTP: " + response.status);
    }
}
export {remoteImg}
