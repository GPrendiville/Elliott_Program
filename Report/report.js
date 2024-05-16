function download() {
    var element = document.getElementById('reportforpdf');
    var opt = {
        margin: 1,
        filename: 'test.pdf',
        html2canvas: { backgroundColor: null}
    }
    html2pdf().set(opt).from(element).save();
}