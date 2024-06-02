
export function validityOnLoad() {

    document.querySelectorAll(".traila").forEach(element => element.textContent = sessionStorage.getItem("traila"));

    document.querySelectorAll(".trailb").forEach(element => element.textContent = sessionStorage.getItem("trailb"));

    document.querySelectorAll(".recognition").forEach(element => element.textContent = sessionStorage.getItem("recognition"));

    document.querySelectorAll(".digitspan").forEach(element => element.textContent = sessionStorage.getItem("digitspan"));

    document.querySelectorAll(".coding").forEach(element => element.textContent = sessionStorage.getItem("coding"));

}