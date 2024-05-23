
var fname;
var lname;
var age;
var dateofbirth;
var reportdate;
var title;
var pronoun;
var traila;
var trailb;
var recognition;
var digitspan;
var coding;
var crin;
var wrin;
var trin;
var f;
var fp;
var fs;
var fbs;
var rbs;
var l;
var k;
var vocab;
var blockpatterns;
var absreasoning;
var aqimpair;
var bqimpair;
var totalscore;
var orientationSubtest;
var presidentialSubtest;
var namingSubtest;
var comprehensionSubtest;
var praxisSubtest;
var shifitingsetSubtest;
var incompletepicsSubtest;
var similaritiesSubtest;
var attentionSubtest;
var memorySubtest;
var fingers;
var trialscore;
var recall;
var deviations;
var letterfluency;
var categoryfluency;
var categoryswitching;
var colornaming;
var wordreading;
var inhibition;
var inhibswitch;
var motorcoord;
var diagnoses = [];

// const init = function(){
     
// }

export function toPDF() {
    console.log("Entered function.");
    // ev.preventDefault();

    // Basic Information
    fname = document.getElementById('fname').value;
    sessionStorage.setItem("fname", document.getElementById('fname').value)
    lname = document.getElementById('lname').value;
    age = document.getElementById('age').value;
    dateofbirth = document.getElementById('dateofbirth').value;

    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    reportdate = `${day}-${month}-${year}`;
    title = document.getElementById('gender').value.toUpperCase() === "MALE" ? "Mr." : "Ms.";
    pronoun = document.getElementById('gender').value.toUpperCase() === "MALE" ? "his" : "her";

    //Validity Measures - Waiting on meeting with Dr. Elliott
    traila = document.getElementById('traila').value;
    trailb = document.getElementById('trailb').value;
    recognition = document.getElementById('recognition').value;
    digitspan = document.getElementById('digitspan').value;
    coding = document.getElementById('coding').value;
    crin = document.getElementById('crin').value;
    wrin = document.getElementById('wrin').value;
    trin = document.getElementById('trin').value;
    f = document.getElementById('f').value;
    fp = document.getElementById('fp').value;
    fs = document.getElementById('fs').value;
    fbs = document.getElementById('fbs').value;
    rbs = document.getElementById('rbs').value;
    l = document.getElementById('l').value;
    k = document.getElementById('k').value;

    //Lateralization
    vocab = document.getElementById('vocab').value;
    blockpatterns = document.getElementById('blockpatterns').value;
    absreasoning = document.getElementById('absreasoning').value;
    aqimpair = document.getElementById('aqimpair').value;
    bqimpair = document.getElementById('bqimpair').value;

    //Cognitive Functioning
    totalscore = document.getElementById('totalscore').value;
    orientationSubtest = document.getElementById('orientation').value;
    presidentialSubtest = document.getElementById('presidential').value;
    namingSubtest = document.getElementById('naming').value;
    comprehensionSubtest = document.getElementById('comprehension').value;
    praxisSubtest = document.getElementById('praxis').value;
    // shifitingsetSubtest = document.getElementById('shifitingset').value;
    incompletepicsSubtest = document.getElementById('incompletepics').value;
    similaritiesSubtest = document.getElementById('similarities').value;
    attentionSubtest = document.getElementById('attention').value;
    memorySubtest = document.getElementById('memory').value;

    //WRAML
    fingers = document.getElementById('fingers').value;
    trialscore = document.getElementById('trialscore').value;
    recall = document.getElementById('recall').value;
    //recognition used here as well

    //SDMT
    deviations = document.getElementById('deviations').value;

    //D-KEFS
    letterfluency = document.getElementById('letterfluency').value;
    categoryfluency = document.getElementById('categoryfluency').value;
    categoryswitching = document.getElementById('categoryswitching').value;
    colornaming = document.getElementById('colornaming').value;
    wordreading = document.getElementById('wordreading').value;
    inhibition = document.getElementById('inhibition').value;
    inhibswitch = document.getElementById('inhib-switch').value;

    //Beery VMI
    motorcoord = document.getElementById('motorcoord').value;

    //Diagnoses
    let checkboxes = document.getElementsByName('diagnoses').value;
    for (let condition in checkboxes) {
        if (condition.checked) {
            diagnoses.push(condition.value);
        }
    }

    console.log(fname);
    console.log(age);
    console.log(dateofbirth)
    window.location="report.html"
}

export { fname, lname, age, dateofbirth, reportdate, title, pronoun, traila, trailb, recognition, digitspan, coding, crin, wrin, trin, 
    f, fp, fs, fbs, rbs, l, k, vocab, blockpatterns, absreasoning, aqimpair, bqimpair, totalscore, orientationSubtest, 
    presidentialSubtest, namingSubtest, comprehensionSubtest, praxisSubtest, shifitingsetSubtest, incompletepicsSubtest, similaritiesSubtest, 
    attentionSubtest, memorySubtest, fingers, trialscore, recall, deviations, letterfluency, categoryfluency, categoryswitching, colornaming,
    wordreading, inhibition, inhibswitch, motorcoord //diagnoses
}

// document.addEventListener('DOMContentLoaded', init);