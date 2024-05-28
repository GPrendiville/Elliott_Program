
export function validityOnLoad() {

    document.querySelectorAll(".traila").forEach(element => element.innerText = sessionStorage.getItem("traila"));

    document.querySelectorAll(".trailb").forEach(element => element.innerText = sessionStorage.getItem("trailb"));

    document.querySelectorAll(".recognition").forEach(element => element.innerText = sessionStorage.getItem("recognition"));

    document.querySelectorAll(".digitspan").forEach(element => element.innerText = sessionStorage.getItem("digitspan"));

    document.querySelectorAll(".coding").forEach(element => element.innerText = sessionStorage.getItem("coding"));

}