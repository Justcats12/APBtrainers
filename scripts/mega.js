//solution global variables
var solution = "A";
const aplha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function scramble(){
    //Picks a random case
    var randomNumber = Math.floor(Math.random()*152) + 1
    // checks for the user's preferences
    const maxOf = [4, 8, 20, 22, 25, 35, 39, 43, 55, 61, 65, 75, 76, 80, 81, 89, 93, 101, 113, 120, 124, 132, 133, 143, 149, 152]
    for (i =  0; i < 26; i++){
        if (randomNumber <= maxOf[i]){
            solution = aplha.charAt(i).toString();
            break;
        }
    }

    

    //powered by Reinier Schippers (sorrie da ik uw fototjes heb gestolen)
    let link = "https://reinierschippers.nl/pll-trainer-master/pic/" + randomNumber.toString() + ".png";
    document.getElementById("showcase").src = link;
}   
function loadButtons(){
    const container = document.getElementById("feedback");
    for (i =  0; i < 26; i++){
        var newButton = document.createElement("button");
        newButton.innerHTML = aplha.charAt(i);
        newButton.style.width = "12%";
        newButton.style.margin = "5px";
        newButton.style.fontSize = "3em";
        newButton.addEventListener("click", function(e) {
            submit(document.activeElement.innerHTML);
        }, false)
        container.appendChild(newButton);
    }
}
loadButtons()
function submit(answer){
    console.log(answer);
    if (answer == solution){
        
        scramble()
        document.activeElement.style.backgroundColor = 'green';
        document.activeElement.style.backgroundColor = '';
        document.getElementById('feedback').style.backgroundColor = 'transparent';
    } else{
        document.getElementById('feedback').style.backgroundColor = 'red';
    }


}