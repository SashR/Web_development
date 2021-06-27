let activeStep = 0;

function change(str){
    console.log("function");
    let btnPrev = document.getElementById("prev");
    let btnNext = document.getElementById("next");
    if (str === "prev"){
        if (activeStep !== 0){
            console.log(str, activeStep);
            let step = document.getElementById(`step${activeStep}`);
            step.setAttribute("class", "step");
            activeStep--;
        }
    }
    else if (str === "next"){
        if (activeStep !==3){
            console.log(str, activeStep);
            activeStep++;
            let step = document.getElementById(`step${activeStep}`);
            step.setAttribute("class" ,"step activeStep");
        }
    }
    let classesPrev = activeStep ===0 ? "shift deactiveBtn" : "shift";
    let classesNext = activeStep ===3 ? "shift deactiveBtn" : "shift";
    btnPrev.setAttribute("class", classesPrev);
    btnNext.setAttribute("class", classesNext)
}