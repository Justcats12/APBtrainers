// algorithms
const UFR = [
  "(U2) R U R2 U' R' U R",
  "(U) R U2 R2 U' R' U R",
  "(U') R U R U' R2 U' R2 U R2",
  "(U2) R D' R U R' D R'",
  "(U) R' U2 R U2 R",
  "R' U' R U' R U2 R",
  "R' U2 R2 U R' U R2 U R'",
  "R U' R2 U' R U R U2 R U R'",
  "R2 U' R2 U2 R2 U R2",
  "R U' R' U R U' R2 U' R U R",
  "(U') R' U' R U' R' U R2 U R",
  "R U' R2 U2 R U2 R2 U' R'",
  "R U2 R' U R' U2 R U2 R2 U' R'",
  "(U2) R' U' R U R2 U R' U R U' R'",
  "R U' R' U R U2 R2 U' R U R",
  "R U R' U R' U' R U R2 U R'",
  "(U2) R U R' U R' U' R2 U R",
  "(U) R U2 R' U R' U' R2 U R",
  "(U2) R' U2 R U2 R U' R U R'",
  "R U' R' U R' U' R U R",
  "(U') R U R' U R' U' R U' R U2 R",
  "(U2) R U R2 U' R U R2 U' R'",
  "(U) R U2 R' U2 R' U2 R2 U2 R",
  "(U) R' U' R U' R U R' U' R U2 R",
  "(U') R U' R' U R U' R' U R' U' R U R",
  "(U2) R2 U2 R' U' R U' R2",
  "(U2) R U R' U R U' R'",
  "(U) R U2 R' U R U' R'",
  "R U2 R' U' R U R'",
  "(U) R U' R' U R U' R' U R U' R'"
    ];

const RFU = [
      "(U') S' R U R' U R U R' S",
      "R U R' S R2 S' R2",
      "(U) R' U' R2 U' R' U R U' R' U R U R",
      "R' U' R U R U' R U R'",
      "R' U' R U D' R U' R' D R",
      "R' U2 R U2 R U2 R U R'",
      "(U') R' U2 R U R U R",
      "(U') R' U R U2 R2 U2 R' U' R",
      "(U') R' U2 R' U R U R",
      "(U') R' U' R U R",
      "(U') R' U2 R2 U R' U R2 U' R'",
      "(U2) R' U' R U R U2 R U R'",
      "(U') R U' R2 U2 R U R U R",
      "(U2) R' U' R U R2 U' R' U' R U R'",
      "(U') R U' R2 U' R U R",
      "R' U2 R2 U2 R2 U' R'",
      "(U2) R U' R' U R' U2 R U2 R2 U' R'",
      "R U R' S' U2 S",
      "(U) R' U' R2 U' R' U2 R2 U' R'",
      "(U') R U2 R2 U' R U R",
      "(U2) R' U2 R' U2 R2 U R'",
      "(U') R U R2 U2 R U R U R",
      "R U R' U' S' U2 S",
      "(U2) R' U2 R U R U' R' U R U R",
      "(U') R U R2 U' R U R",
      "R2 D R' U2 R D' R' U R'",
      "(U2) R U' R' U' R U R'",
      "R U R'",
      "(U') R U' R' U R U R'",
      "(U') R U2 R' U R U R'"
    ];
const FUR = [
      "(U') R U2 R' U R' U' R U R2 U' R'",
      "(U') R U R' U R' U' R U R2 U' R'",
      "R' U' R U R2 U' R'",
      "D' R' D R2 U' R2 D' R D",
      "(U') R' U2 R U R' U' R U2 R",
      "(U') R' U' R U R U' R U' R' U R U' R'",
      "(U') R U R' U2 R' U' R2 U R",
      "(U2) R' U2 R2 U2 R",
      "(U') R D' R U' R' D R'",
      "S R2' S' R2 U R U' R'",
      "(U) R' U' R U' R U R U R",
      "(U') R U2 R' U R' U' R' U R",
      "(U) R' U' R2 U R",
      "(U') R' U' R' U' R U2 R",
      "(U2) R U R' U' R' U' R U R",
      "(U) R' U' R U R U R U R'",
      "(U2) S R2' S' R3 U2' R'",
      "(U') R U R' U R' U' R' U R",
      "(U') R U' R' U2 R' U' R2 U R",
      "(U) R' U' R U D' R U R' D R",
      "R' U' R2 U' R' U R U R",
      "(U') R U2 R' U2 R' U' R2 U R",
      "R' D' R2 U R U' R2 D",
      "R' U' R' U R",
      "R U2 R2 U2 R U2 R",
      "(U) R' F R U R U' R' F' R U2 R'",
      "(U') R U2 R' U2 R U' R'",
      "(U') R U R' U2 R U' R'",
      "(U) R U' R'",
      "(U') R U' R' U2 R U' R'"
    ];
const DFR = [
      "(U) R U' R2 U' R U R U' R U R'",
      "(U) S R2' S' R2",
      "(U) R U' D' R U' R' U D R'",
      "(U2) R U2 R' U R D' R U' R' D R'",
      "(U2) R U R' U2 R D' R U' R' D R'",
      "(U) R' U' R' U R U R U R'",
      "R U' R' U R U R' U R' U' R U R",
      "(U2) F' R U R' U' R' F R"
    ];
    
const RDF = [
      "(U) R' U' R U R U' R' U' R U R",
      "(U') R U2 R' U R' U' R U R",
      "R' U' R U R U' R U' R' U R U R'",
      "(U') R' U' R U R2 U R'",
      "(U2) R' U2 R U2 R2 U R'",
      "R' U2 R' U2 R2 U' R'",
      "R U R' U' R U R'",
      "R U' R' U R U2 R' U R U' R'"
    ];
    
const FRD = [
      "R U' R2 U' R' U R",
      "R U R2 U2 R U2 R",
      "R U' R2 D' R2 U R U' R2 D",
      "R U' R2 U' R U R2 U' R'",
      "(U') R' D' R U R' U' D R2 U R",
      "(U') R U' R' U R' U' R2 U R",
      "R U R' U' R U' R' U R' U' R U R",
      "(U') R U' R' U R U' R'",
      "R U' R' U' R U R' U2 R U' R'"

    ];
// algs that cannot be picked go in here
var forbiddenalgs = [];
// this variable sets the current case
var currentcase = "none";

function scramble(){
    // fetches the preferences of the user
    let colorneutral = document.getElementById("colorneutral").checked;
    // normal orientation
    var orients = Array("y", "y'", "y2", "");
    // advanced orientation
    if (colorneutral){
        let orientPossibilities = Array('x', 'y', 'z', "");
        orients = Array(orientPossibilities[Math.floor(Math.random()*orientPossibilities.length)]+orientPossibilities[Math.floor(Math.random()*orientPossibilities.length)]+orientPossibilities[Math.floor(Math.random()*orientPossibilities.length)]);
    };
    // finishing up orientation in the algorithm
    let first = orients[Math.floor(Math.random()*orients.length)];


    // usefull lists
      var totlist = [];
      let alglists = [UFR, RFU, FUR, DFR, RDF, FRD];
      let idlist = ["ufr", "rfu", "fur", "rdf", "frd"];
    //for loop
      for (let i = 0; i < idlist.length; i++) {
        // finds every checked alg set and adds it to the list of possible algs
        let check = document.getElementById(idlist[i]).checked;
        if (check){
            totlist.push.apply(totlist, alglists[i]);
          }
      }
      // removes the forbidden algs from the list
      for (let i = 0; i < totlist.length; i++) {
        const alg = totlist[i];
        if (forbiddenalgs.includes(alg)){
          delete totlist[i]
          /*console.log(totlist)*/ //for debugging
        }
        
      }
      // to be honest I have no idea what this does
      totlist = totlist.filter(elm => elm);
      //console.log(totlist) //debug
      //finishes up the actual algorithm
      var second = totlist[Math.floor(Math.random()*totlist.length)];
     
      //stitches the algorithm
      let alg =  second + " " + first
      // viewable answer
      document.getElementById("seq").innerHTML = second;
      //fetches the case
      currentcase = second;
      //this program is powered by visualcube
    let link = "https://visualcube.api.cubing.net/?fmt=svg&size=200&case=";
    // user preferences and display of the cube
    let stagemask = document.getElementById("stagemask").checked;
    if (stagemask){
    document.getElementById("showcase").src = link + alg + "&stage=f2l";
    }else{document.getElementById("showcase").src = link + alg}
}
// visualisation of the selected algs
function caseclick(id){
  const target = document.getElementById(id);
  if (target.style.backgroundColor == 'green'){
    target.style.backgroundColor = 'none';
  }else{
    target.style.backgroundColor = 'green';
  }
}

// fetches the new and forbidden algs
function caseupdate(){
  //reset forbiddenalgs andthe html
  forbiddenalgs = []
  const container = document.getElementById("caseselect");
  container.innerHTML = '';
  //usefull lists
  let activelist = []
  let alglists = [UFR, RFU, FUR, DFR, RDF, FRD];
  let idlist = ["ufr", "rfu", "fur", "rdf", "frd"];
  // adds the prefered lists to the activelist
  for (let i = 0; i < idlist.length; i++) {
    let check = document.getElementById(idlist[i]).checked;
    if (check){
      activelist.push.apply(activelist, alglists[i]);
    }
  }
  //displays every case
  for (let i = 0; i < activelist.length; i++) {
    const element = activelist[i];
    const casedisplay = document.createElement("iframe");
    casedisplay.height = 50;
    casedisplay.width = 50;
    casedisplay.src = "https://visualcube.api.cubing.net/?fmt=svg&size=50&stage=f2l&case=" + element;

    casedisplay.style.borderBottom = 'lime 1em solid';


    casedisplay.id = element;
    casedisplay.active = true
    casedisplay.addEventListener("mouseenter", shiftfunc);
    casedisplay.addEventListener("click", select);
    //select and deselect algs
    function select(){
    const target = document.getElementById(element);
    if (target.active){
      target.style.borderBottom = 'red 1em solid'
      target.active = false;
      forbiddenalgs.push(element);

    }else{
      target.style.borderBottom = 'lime 1em solid'
      target.active = true;
      let index = forbiddenalgs.indexOf(element);
      forbiddenalgs.splice(index, 1)
    }}
    //mulitiple slelect
    function shiftfunc(event){
        if (event.shiftKey){
          select();
      }
      }
      
      


    container.appendChild(casedisplay);
    
  }
}
function cuttentToggle(){
  const target = document.getElementById(currentcase);
    if (target.active){
      target.style.borderBottom = 'red 1em solid'
      target.active = false;
      forbiddenalgs.push(currentcase);

    }else{
      target.style.borderBottom = 'lime 1em solid'
      target.active = true;
      let index = forbiddenalgs.indexOf(currentcase);
      forbiddenalgs.splice(index, 1)
    }}