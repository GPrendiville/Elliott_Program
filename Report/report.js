

function download() {
    var element = document.getElementById('reportforpdf');
    var opt = {
        filename: 'test.pdf',
        margin: [20, 0, 30, 0],
        //pagebreak: { mode: 'css' },
        html2canvas: { backgroundColor: null},
        jsPDF: {
            unit: 'mm'
        }
    }
    html2pdf().set(opt).from(element).save();
}

function jspdfDownload() {
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