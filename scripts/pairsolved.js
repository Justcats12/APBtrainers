//solution global variables
var solution = "skip";

function scramble(){
    //correct oriented blocks array (UF UR UB UL FR DR)
    correct = Array(true, true, true, true, true, true);
    var scramble = "x2_";
    // checks for the user's preferences
    let neutralBox = document.getElementById("colorneutral").checked;
    // orientations according to the user's input
    var orients = Array("y_", "y-_", "y2_", "");
    if (neutralBox){
        let orientPossibilities = Array('x_', 'y_', 'z_', "");
        orients = Array(orientPossibilities[Math.floor(Math.random()*orientPossibilities.length)]+orientPossibilities[Math.floor(Math.random()*orientPossibilities.length)]+orientPossibilities[Math.floor(Math.random()*orientPossibilities.length)]);
    };
    // finalize the first part of the alg
    let first ='x2_' + orients[Math.floor(Math.random()*orients.length)];
    //random moves that don't tamper with EO
    let confunsions = Array('U_', 'R_U_R-_', 'R_U-_R-_', 'U-_', "R-_U2_R-_U2_R_");
    //finalize..
    var second = confunsions[Math.floor(Math.random()*confunsions.length)]
    for (let i = 0; i<10; i++){
        second += confunsions[Math.floor(Math.random()*confunsions.length)]
        }
    // reverse algs
    let algs  = Array("R-_F_R_F-_", "F_U_R_U-_R-_F-_U-_","F_R-_F-_R_", "f-_U_f_U2_", "S-_U_R_U_R-_S_", "M-_U-_M_U2_r_U-_r-_", "S_R-_U-_R-_U_R_S-_U-_", "S-_U_S_", "S-_R_U2_R-_U-_S_U_", "S-_U_S_R_U-_R-_", "S-_U_S_U-_R-_F_R_F-_", "");
    //select random case
    var third = "";
    for (let i = 0; i < 1; i++) {
        let random = Math.floor(Math.random()*algs.length);
        solution = random
        third += algs[random];
        //updates the correct list
        for(let i= 0; i<3; i++){
            if (Math.random() >0.6){
            correct = Array(correct[3], correct[0], correct[1], correct[2], correct[4], correct[5])
            third += 'U_'
        }
        }


    }
    let sequence = first + second + third;
    //console.log(sequence);
    //my best attemts at simplifying the viewable sequence
    var optimizedSeqence = sequence;
    var optimizedSeqence = optimizedSeqence.replaceAll('_',' ', ).replaceAll('-', "'");
    let checkList = ["U", "D", "L", "R", "F", "B", "S"];
    for (let i=0; i < checkList.length ; i++){
        let l = checkList[i];
        let lo = checkList[i] + "'";
        console.log(l + " "+ lo);
        for (let i=0; i < 4 ; i++){
        var optimizedSeqence = optimizedSeqence.replaceAll(l + " "+ lo, "");
        var optimizedSeqence = optimizedSeqence.replaceAll(lo + " "+ l +" ", " ");
        var optimizedSeqence = optimizedSeqence.replaceAll(l +" "+ l +" "+l + " ", lo + " ");
        var optimizedSeqence = optimizedSeqence.replaceAll(lo +" "+ lo +" "+lo, l);
        var optimizedSeqence = optimizedSeqence.replaceAll(l +" "+l + " ", l+"2 ");
        var optimizedSeqence = optimizedSeqence.replaceAll(lo +" "+lo, l+"2");
        console.log(optimizedSeqence);
        }
    
    }

    //powered by alg.cubing.net
    document.getElementById("seq").innerHTML = optimizedSeqence;
    let link = "https://alg.cubing.net/?setup=";
    document.getElementById("showcase").src = link + sequence;
}   
function submit(answer){
    if (answer == solution){
        console.log('correct');
        scramble()
        document.activeElement.style.backgroundColor = 'green';
        document.activeElement.style.backgroundColor = '';
        document.getElementById('feedback').style.backgroundColor = 'white';
    } else{
        document.getElementById('feedback').style.backgroundColor = 'red';
    }


}