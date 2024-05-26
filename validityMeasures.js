
export function validityOnLoad() {

    document.getElementsByClassName('traila')[0].innerText = sessionStorage.getItem("traila");

    document.getElementsByClassName('trailb')[0].innerText = sessionStorage.getItem("trailb");

    document.querySelectorAll(".recogniton").forEach(element => element.innerText = sessionStorage.getItem("recognition"));

    document.getElementsByClassName('digitspan')[0].innerText = sessionStorage.getItem("digitspan");

    document.getElementsByClassName('coding')[0].innerText = sessionStorage.getItem("coding");

}