const init = function(){
    document.getElementById('topdf').addEventListener('click', toPDF);
}

const toPDF = function(ev) {
    ev.preventDefault();

    //Basic Information
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let age = document.getElementById('age').value;
    let dateofbirth = document.getElementById('dateofbirth').value;

    const today = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let reportdate = `${day}-${month}-${year}`;
    let title = document.getElementById('gender').value.toUpperCase() === "MALE" ? "Mr." : "Ms.";
    let pronoun = document.getElementById('gender').value.toUpperCase() === "MALE" ? "his" : "her";

    //Validity Measures - Waiting on meeting with Dr. Elliott
    let traila = document.getElementById('traila').value;
    let trailb = document.getElementById('trailb').value;
    let recognition = document.getElementById('recognition').value;
    let digitspan = document.getElementById('digitspan').value;
    let coding = document.getElementById('coding').value;
    let crin = document.getElementById('crin').value;
    let wrin = document.getElementById('wrin').value;
    let trin = document.getElementById('trin').value;
    let f = document.getElementById('f').value;
    let fp = document.getElementById('fp').value;
    let fs = document.getElementById('fs').value;
    let fbs = document.getElementById('fbs').value;
    let rbs = document.getElementById('rbs').value;
    let l = document.getElementById('l').value;
    let k = document.getElementById('k').value;

    //Lateralization
    let vocab = document.getElementById('vocab').value;
    let blockpatterns = document.getElementById('blockpatterns').value;
    let absreasoning = document.getElementById('absreasoning').value;
    let aqimpair = document.getElementById('aqimpair').value;
    let bqimpair = document.getElementById('bqimpair').value;

    //Cognitive Functioning
    let totalscore = document.getElementById('totalscore').value;
    let orientation = document.getElementById('orientation').value;
    let presidential = document.getElementById('presidential').value;
    let naming = document.getElementById('naming').value;
    let comprehension = document.getElementById('comprehension').value;
    let praxis = document.getElementById('praxis').value;
    let shifitingset = document.getElementById('shifitingset').value;
    let incompletepics = document.getElementById('incompletepics').value;
    let similarities = document.getElementById('similarities').value;
    let attention = document.getElementById('attention').value;
    let memory = document.getElementById('memory').value;

    //WRAML
    let fingers = document.getElementById('fingers').value;
    let trialscore = document.getElementById('trialscore').value;
    let recall = document.getElementById('recall').value;

    //SDMT
    let deviations = document.getElementById('deviations').value;

    //D-KEFS
    let letterfluency = document.getElementById('letterfluency').value;
    let categoryfluency = document.getElementById('categoryfluency').value;
    let categoryswitching = document.getElementById('categoryswitching').value;
    let colornaming = document.getElementById('colornaming').value;
    let wordreading = document.getElementById('wordreading').value;
    let inhibition = document.getElementById('inhibition').value;
    let inhibswitch = document.getElementById('inhib-switch').value;

    //Beery VMI
    let motorcoord = document.getElementById('motorcoord').value;

    //Diagnoses
    let checkboxes = document.getElementsByName('diagnoses').value;
    let diagnoses = [];
    for (let condition in checkboxes) {
        if (condition.checked) {
            diagnoses.push(condition.value);
        }
    }
}

document.addEventListener('DOMContentLoaded', init);