
const tilesBox = document.querySelectorAll(".shuffleTile");
const shuffleButton = document.querySelector(".shuffle");
console.log(shuffleButton);
var tilesContent = [1,2,3,4,5,6,7,8];
var checkTilesContent = [0];
var i =0 ;
const buildPuzzle = (tile)=>{
    
    var index =Math.floor( Math.random()*tilesContent.length);
    console.log(tilesContent[index]);
    // to check whther a number repeats or not
    checkTilesContent.push(tilesContent[index]);
    tile.innerHTML = tilesContent[index];
    i=i+1;
    tilesContent = tilesContent.filter( item => item!== tilesContent[index]);// delete the number to avoid repetition
    
    if (tile.classList.contains("empty")){
        //console.log("has empty");
        tile.classList.remove("empty")
    }
    // console.log(tilesContent);
    // console.log(checkTilesContent);
    console.log(tile);
    if(i===9){
        // check whether the tile empty to addd class empty
    if (Array.isArray(tilesContent) && tilesContent.length) {
        // array exists and is not empty
    }
    else{
  
       // console.log("success");
        tile.innerHTML = "";
        tile.classList.add("empty");
        //console.log(tile);
        //buildPuzzle(tile);
    }
}
    
};
// to enable next click of shuffle button 
const resetfunction = ()=>{
     tilesContent = [1,2,3,4,5,6,7,8];
     checkTilesContent = [0];
     i =0 ;
};

shuffleButton.addEventListener('click',()=>{
    tilesBox.forEach(buildPuzzle);
    resetfunction();
});

