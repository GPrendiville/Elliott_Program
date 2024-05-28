
// var fname;
// var lname;
// var age;
// var dateofbirth;
// var reportdate;
// var title;
// var pronoun;
// var traila;
// var trailb;
// var recognition;
// var digitspan;
// var coding;
// var crin;
// var wrin;
// var trin;
// var f;
// var fp;
// var fs;
// var fbs;
// var rbs;
// var l;
// var k;
// var vocab;
// var blockpatterns;
// var absreasoning;
// var aqimpair;
// var bqimpair;
// var totalscore;
// var orientationSubtest;
// var presidentialSubtest;
// var namingSubtest;
// var comprehensionSubtest;
// var praxisSubtest;
// var shifitingsetSubtest;
// var incompletepicsSubtest;
// var similaritiesSubtest;
// var attentionSubtest;
// var memorySubtest;
// var fingers;
// var trialscore;
// var recall;
// var deviations;
// var letterfluency;
// var categoryfluency;
// var categoryswitching;
// var colornaming;
// var wordreading;
// var inhibition;
// var inhibswitch;
// var motorcoord;
// var diagnoses = [];

function toPDF() {

    // Basic Information
    //fname = document.getElementById('fname').value;
    sessionStorage.setItem("fname", document.getElementById('fname').value);
    //lname = document.getElementById('lname').value;
    sessionStorage.setItem("lname", document.getElementById('lname').value);
    //age = document.getElementById('age').value;
    sessionStorage.setItem("age", document.getElementById('age').value);
    //dateofbirth = document.getElementById('dateofbirth').value;
    sessionStorage.setItem("dateofbirth", document.getElementById('dateofbirth').value);

    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    reportdate = `${day}-${month}-${year}`;
    sessionStorage.setItem("reportdate", `${year}-${day}-${month}`);
    title = document.getElementById('gender').value.toUpperCase() === "MALE" ? "Mr." : "Ms.";
    sessionStorage.setItem("title", title);
    pronoun = document.getElementById('gender').value.toUpperCase() === "MALE" ? "his" : "her";
    sessionStorage.setItem("pronoun", pronoun);
    sessionStorage.setItem("gender", document.getElementById('gender').value.toUpperCase());

    //Validity Measures - Waiting on meeting with Dr. Elliott
    sessionStorage.setItem("traila", document.getElementById('traila').value);
    sessionStorage.setItem("trailb", document.getElementById('trailb').value);
    sessionStorage.setItem("recognition", document.getElementById('recognition').value);
    sessionStorage.setItem("digitspan", document.getElementById('digitspan').value);
    sessionStorage.setItem("coding", document.getElementById('coding').value);

    //Lateralization
    sessionStorage.setItem("vocab", document.getElementById('vocab').value);
    sessionStorage.setItem("blockpatterns", document.getElementById('blockpatterns').value);
    sessionStorage.setItem("absreasoning", document.getElementById('absreasoning').value);
    sessionStorage.setItem("aqimpair", document.getElementById('aqimpair').value);
    sessionStorage.setItem("bqimpair", document.getElementById('bqimpair').value);

    //Cognitive Functioning
    // totalscore = document.getElementById('totalscore').value;
    sessionStorage.setItem("totalscore", document.getElementById('totalscore').value);
    // orientationSubtest = document.getElementById('orientation').value;
    sessionStorage.setItem("orientation", document.getElementById('orientation').value);
    // presidentialSubtest = document.getElementById('presidential').value;
    sessionStorage.setItem("presidential", document.getElementById('presidential').value);
    // namingSubtest = document.getElementById('naming').value;
    sessionStorage.setItem("naming", document.getElementById('naming').value);
    // comprehensionSubtest = document.getElementById('comprehension').value;
    sessionStorage.setItem("comprehension", document.getElementById('comprehension').value);
    // praxisSubtest = document.getElementById('praxis').value;
    sessionStorage.setItem("praxis", document.getElementById('praxis').value);
    // shifitingsetSubtest = document.getElementById('shifitingset').value;
    sessionStorage.setItem("shiftingset", document.getElementById('shiftingset').value);
    // incompletepicsSubtest = document.getElementById('incompletepics').value;
    sessionStorage.setItem("incompletepics", document.getElementById('incompletepics').value);
    // similaritiesSubtest = document.getElementById('similarities').value;
    sessionStorage.setItem("similarities", document.getElementById('similarities').value);
    // attentionSubtest = document.getElementById('attention').value;
    sessionStorage.setItem("attention", document.getElementById('attention').value);
    // memorySubtest = document.getElementById('memory').value;
    sessionStorage.setItem("memory", document.getElementById('memory').value);

    //WRAML
    // fingers = document.getElementById('fingers').value;
    sessionStorage.setItem("fingers", document.getElementById('fingers').value);
    // trialscore = document.getElementById('trialscore').value;
    sessionStorage.setItem("trialscore", document.getElementById('trialscore').value);
    // recall = document.getElementById('recall').value;
    sessionStorage.setItem("recall", document.getElementById('recall').value);
    //recognition used here as well

    //SDMT
    // deviations = document.getElementById('deviations').value;
    sessionStorage.setItem("sdmt", document.getElementById('sdmt').value);

    //D-KEFS
    // letterfluency = document.getElementById('letterfluency').value;
    sessionStorage.setItem("letterfluency", document.getElementById('letterfluency').value);
    // categoryfluency = document.getElementById('categoryfluency').value;
    sessionStorage.setItem("categoryfluency", document.getElementById('categoryfluency').value);
    // categoryswitching = document.getElementById('categoryswitching').value;
    sessionStorage.setItem("categoryswitching", document.getElementById('categoryswitching').value);
    // colornaming = document.getElementById('colornaming').value;
    sessionStorage.setItem("colornaming", document.getElementById('colornaming').value);
    // wordreading = document.getElementById('wordreading').value;
    sessionStorage.setItem("wordreading", document.getElementById('wordreading').value);
    // inhibition = document.getElementById('inhibition').value;
    sessionStorage.setItem("inhibition", document.getElementById('inhibition').value);
    // inhibswitch = document.getElementById('inhib-switch').value;
    sessionStorage.setItem("inhibswitch", document.getElementById('inhibswitch').value);

    //Beery VMI
    // motorcoord = document.getElementById('motorcoord').value;
    sessionStorage.setItem("motorcoord", document.getElementById('motorcoord').value);

    //Diagnoses
    let checkboxes = document.getElementsByName('diagnoses').value;
    let diagnoses = []
    for (let condition in checkboxes) {
        if (condition.checked) {
            diagnoses.push(condition.value);
        }
    }
    sessionStorage.setItem("diagnoses", diagnoses);
}

// document.addEventListener('DOMContentLoaded', init);