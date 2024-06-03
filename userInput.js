
function toPDF() {

    // Basic Information
    sessionStorage.setItem("fname", document.getElementById('fname').value);
    sessionStorage.setItem("lname", document.getElementById('lname').value);
    sessionStorage.setItem("age", document.getElementById('age').value);
    sessionStorage.setItem("dateofbirth", document.getElementById('dateofbirth').value);

    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let reportdate = `${year}-${day}-${month}`;
    sessionStorage.setItem("reportdate", reportdate);
    let title = document.getElementById('gender').value.toUpperCase() === "MALE" ? "Mr." : "Ms.";
    sessionStorage.setItem("title", title);
    let pronoun = document.getElementById('gender').value.toUpperCase() === "MALE" ? "his" : "her";
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
    sessionStorage.setItem("totalscore", document.getElementById('totalscore').value);
    sessionStorage.setItem("orientation", document.getElementById('orientation').value);
    sessionStorage.setItem("presidential", document.getElementById('presidential').value);
    sessionStorage.setItem("naming", document.getElementById('naming').value);
    sessionStorage.setItem("comprehension", document.getElementById('comprehension').value);
    sessionStorage.setItem("praxis", document.getElementById('praxis').value);
    sessionStorage.setItem("shiftingset", document.getElementById('shiftingset').value);
    sessionStorage.setItem("incompletepics", document.getElementById('incompletepics').value);
    sessionStorage.setItem("similarities", document.getElementById('similarities').value);
    sessionStorage.setItem("attention", document.getElementById('attention').value);
    sessionStorage.setItem("memory", document.getElementById('memory').value);

    //WRAML
    sessionStorage.setItem("fingers", document.getElementById('fingers').value);
    sessionStorage.setItem("trialscore", document.getElementById('trialscore').value);
    sessionStorage.setItem("recall", document.getElementById('recall').value);

    //SDMT
    sessionStorage.setItem("sdmt", document.getElementById('sdmt').value);

    //D-KEFS
    sessionStorage.setItem("letterfluency", document.getElementById('letterfluency').value);
    sessionStorage.setItem("categoryfluency", document.getElementById('categoryfluency').value);
    sessionStorage.setItem("categoryswitching", document.getElementById('categoryswitching').value);
    sessionStorage.setItem("colornaming", document.getElementById('colornaming').value);
    sessionStorage.setItem("wordreading", document.getElementById('wordreading').value);
    sessionStorage.setItem("inhibition", document.getElementById('inhibition').value);
    sessionStorage.setItem("inhibswitch", document.getElementById('inhibswitch').value);

    //Beery VMI
    sessionStorage.setItem("motorcoord", document.getElementById('motorcoord').value);

}
