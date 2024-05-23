// import { lateralizationToString } from "../lateralization";
// import { motorCoordString } from "../beeryVMI";
// import { totalScoreString, subsetScoreToString } from "../cognitiveFunctioning";
// import { dkefsToString } from "../dkefs";
// import { wramlToString, fingersToString, scaledFingersToString } from "../wraml";
import {fname, lname, dateofbirth} from './userInput.js';

export function jspdfDownload() {
    let firstName = sessionStorage.getItem("fname");
    console.log(firstName)
    fnameOnLoad();
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
}

export function fnameOnLoad() {
    console.log(sessionStorage.getItem("fname"));
    var fnameElements = document.getElementsByClassName('fname');
    for (let i=0; i<fnameElements.length; i++) {
        fnameElements[i].innerText = sessionStorage.getItem("fname")
    }
}