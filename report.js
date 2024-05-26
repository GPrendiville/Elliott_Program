
// import { motorCoordString } from "../beeryVMI";
// import { dkefsToString } from "../dkefs";
// import { wramlToString, fingersToString, scaledFingersToString } from "../wraml";

import { lateralizationOnLoad } from "./lateralization.js";
import { cogFunctionOnLoad } from "./cognitiveFunctioning.js";
import { beeryOnLoad } from "./beeryVMI.js";
import { dkefsOnLoad } from "./dkefs.js";
import { wramlOnLoad } from "./wraml.js";
import { validityOnLoad } from "./validityMeasures.js";

export function jspdfDownload() {
    //window.html2canvas = html2canvas;
    window.jsPDF = window.jspdf.jsPDF;
    const doc = new jsPDF('p', 'pt', 'letter');
    const forpdf = document.getElementById('reportforpdf')
    const opt = {
        callback: function (doc) {
            doc.save("jspdf-test.pdf");
        },
        margin: [72, 72, 72, 72],
        autoPaging: 'text',
        //innerWidth: 10,
        html2canvas: {
            allowTaint: true,
            dpi: 300,
            //width: 10,
            letterRendering: true,
            logging: false,
            scale: .8
        }
        // margins: [25, 0, 25, 0],
        // width: 170,
        // x: 2,
        // y: 2,
        // callback: function (doc) {
        //     doc.save('jspdf_test.pdf');
        // },
        // autopaging: 'text'
    }
    doc.html(forpdf, opt)

    sessionStorage.clear();
}

export function replaceOnLoad() {

    basicInformation();
    validityOnLoad();
    lateralizationOnLoad();
    cogFunctionOnLoad();
    wramlOnLoad();
    dkefsOnLoad();
    beeryOnLoad();
}

function basicInformation() {

    document.querySelectorAll(".fname").forEach(element => element.innerText = sessionStorage.getItem("fname"));

    // var fnameElements = document.getElementsByClassName('fname');
    // console.log(fnameElements.length)
    // for (let i=0; i< fnameElements.length; i++) {
    //     fnameElements[i].innerText = sessionStorage.getItem("fname");
    // }

    document.querySelectorAll(".lname").forEach(element => element.innerText = sessionStorage.getItem("lname"));

    // var lnameElements = document.getElementsByClassName('lname');
    // console.log(lnameElements.length)
    // for (let i=0; i< fnameElements.length; i++) {
    //     lnameElements[i].innerText = sessionStorage.getItem("lname");
    // }

    document.getElementsByClassName('dob')[0].innerText = sessionStorage.getItem("dateofbirth");

    document.getElementsByClassName('age')[0].innerText = sessionStorage.getItem("age");

    document.getElementsByClassName('reportdate')[0].innerText = sessionStorage.getItem("reportdate");

    document.getElementsByClassName('gender')[0].innerText = sessionStorage.getItem("gender");

    document.querySelectorAll(".title").forEach(element => element.innerText = sessionStorage.getItem("title"));

    // var titleElements = document.getElementsByClassName('title');
    // for (let i=0; i< fnameElements.length; i++) {
    //     titleElements[i].innerText = sessionStorage.getItem("title");
    // }

    document.querySelectorAll(".pronoun").forEach(element => element.innerText = sessionStorage.getItem("pronoun"));
    
}