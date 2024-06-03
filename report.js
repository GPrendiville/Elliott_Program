
import { lateralizationOnLoad } from "./lateralization.js";
import { cogFunctionOnLoad } from "./cognitiveFunctioning.js";
import { beeryOnLoad } from "./beeryVMI.js";
import { dkefsOnLoad } from "./dkefs.js";
import { wramlOnLoad } from "./wraml.js";
import { validityOnLoad } from "./validityMeasures.js";
import { sdmtToString } from "./sdmt.js";

export function jspdfDownload() {
    window.jsPDF = window.jspdf.jsPDF;
    const doc = new jsPDF('p', 'pt', 'letter');
    const forpdf = document.getElementById('reportforpdf')
    const opt = {
        callback: function (doc) {
            doc.save(`${sessionStorage.getItem("lname")}.pdf`);
        },
        margin: [72, 72, 72, 72],
        autoPaging: 'text',
        html2canvas: {
            allowTaint: true,
            dpi: 300,
            letterRendering: true,
            logging: false,
            scale: .8
        }
    }
    doc.html(forpdf, opt)
}

export function replaceOnLoad() {

    basicInformation();
    validityOnLoad();
    lateralizationOnLoad();
    cogFunctionOnLoad();
    sdmtToString(sessionStorage.getItem('sdmt'));
    wramlOnLoad();
    dkefsOnLoad();
    beeryOnLoad();
}

function basicInformation() {

    document.querySelectorAll(".fname").forEach(element => element.textContent = sessionStorage.getItem("fname"));

    document.querySelectorAll(".lname").forEach(element => element.textContent = sessionStorage.getItem("lname"));

    document.querySelectorAll(".dob").forEach(element => element.textContent = sessionStorage.getItem("dateofbirth"));

    document.querySelectorAll(".age").forEach(element => element.textContent = sessionStorage.getItem("age"));

    document.querySelectorAll(".reportdate").forEach(element => element.textContent = sessionStorage.getItem("reportdate"));

    document.querySelectorAll(".gender").forEach(element => element.textContent = sessionStorage.getItem("gender"));

    document.querySelectorAll(".title").forEach(element => element.textContent = sessionStorage.getItem("title"));

    document.querySelectorAll(".pronoun").forEach(element => element.textContent = sessionStorage.getItem("pronoun"));
    
}