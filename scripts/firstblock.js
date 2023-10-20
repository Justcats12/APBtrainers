var solution = [];



function scramble(){
    var scramble = "x2_";
    let neutralBox = document.getElementById("colorneutral").checked;
    var orients = Array("y_", "y-_", "y2_", "");
    if (neutralBox){
        let orientPossibilities = Array('x_', 'y_', 'z_', "");
        orients = Array(orientPossibilities[Math.floor(Math.random()*orientPossibilities.length)]+orientPossibilities[Math.floor(Math.random()*orientPossibilities.length)]+orientPossibilities[Math.floor(Math.random()*orientPossibilities.length)]);
    };
    let first ='x2_' + orients[Math.floor(Math.random()*orients.length)];

    let confunsions = Array('U_', 'U-_', 'R_', 'R-_', "r_U_r-", "r-_U_r_", "M_U_M-_", "M-_U_M", "r_U-_r-_", "r-_U-_r_", "M_U-_M-_", "M-_U-_M_");
    var second = confunsions[Math.floor(Math.random()*confunsions.length)]
    for (let i = 0; i<16; i++){
        second += confunsions[Math.floor(Math.random()*confunsions.length)]
        }
    let scrambles  = Array("R", "L", "U", "D", "F", "B");
    var useds = []

    let moves = document.getElementById("moves").value;
    var third = "";
    for (let i = 0; i < moves; i++) {
        if (useds.length = 2){
        var possibles =  Array("R", "L", "U", "D", "F", "B");
            possibles.splice(useds[0], 1).splice(useds[1], 1);
        }
        let random = Math.floor(Math.random()*possibles.length);
        let a = Math.floor(Math.random()*2);
        let move = possibles[random] + ["-", "_"][a];
        solution.push(possibles[random] + ["_", "-"][a]);
        if ((Math.floor(random/2))*2 == random){          
            useds = [random, random + 1];
        } else {
            useds = [random, random - 1];
        }
        
        third += move;


    }
    let sequence = first + second + third;
    //console.log(sequence);

    document.getElementById("seq").innerHTML = sequence;
    let link = "https://alg.cubing.net/?setup=";
    document.getElementById("showcase").src = link + sequence;
}
function submit(answer){
    if (answer == solution[solution.length - 1]){
        console.log('correct');
        solution.pop();
        let link = document.getElementById("showcase").src;
        document.getElementById("showcase").src = link.slice(0,link.length-2);
        if (answer.length == 0){
            scramble();
        }
    } else{
        document.getElementById('feedback').style.backgroundColor = 'red';
    }


}