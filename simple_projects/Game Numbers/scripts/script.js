let bgWidth = 40;
let nElemsInLine = 3;
let elemsWidth = (100/nElemsInLine - 0.75) + "%";
let borderR = 0.1 + "%";

let mainDiv = document.createElement("div");

let arrRand = [];

mainDiv.style.borderRadius = borderR;
mainDiv.style.width = bgWidth + "vw";
mainDiv.style.height = bgWidth + "vw";
mainDiv.classList.add("bgDiv");

document.body.append(mainDiv);



let tmpDiv;
for(let i = 0; i<nElemsInLine; i++){
    for(let j = 0; j<nElemsInLine; j++){
        tmpDiv = document.createElement("div");
        mainDiv.append(tmpDiv);

        tmpDiv.style.width = elemsWidth;
        tmpDiv.style.height = elemsWidth;
        tmpDiv.style.borderRadius = borderR;
        tmpDiv.style.fontSize = 0.7*bgWidth/nElemsInLine + "vw";
        tmpDiv.classList.add("divElements");

        tmpDiv.innerText = randNum(nElemsInLine);
        tmpDiv.id = "element" + (i+j);
    }
}

let arrSelect = [];
let index = 0;
mainDiv.addEventListener("click", function(event){
    let selectElem = event.target;
    if(!event.target.dataset.param){
        arrSelect[index] = +event.target.innerText;
        index++;
        event.target.dataset.param = true;
        selectElem.classList.add("divElClk");
    }
    if(arrSelect.length>=(nElemsInLine*nElemsInLine)){
        if(isSorted(arrSelect)) returnOK();
        else returnErr();

        setTimeout(function(){location.reload();}, 1000);
    };
});


function returnOK(){
    let elems = document.getElementsByClassName("divElClk");
    for(let el of elems) el.style.backgroundColor = "green";
};

function returnErr(){
    let elems = document.getElementsByClassName("divElClk");
    for(let el of elems) el.style.backgroundColor = "red";

};

function isSorted(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i]<arr[i-1]) return false;
    };
    return true;
};

function isUniq(srch, arr){
    for(let elem of arr){
        if(srch == elem) return false;
    }
    return true;
}

function randNum(nElem){
    let rand;
    do{
        rand = Math.floor(Math.random()*nElem*nElem*3+1);        
        if(isUniq(rand, arrRand)){
            arrRand.push(rand);
            return rand;
        }
    } while(true);
}