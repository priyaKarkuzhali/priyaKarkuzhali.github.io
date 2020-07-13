const tiles = document.querySelectorAll(".title");
const movescontent = document.querySelector(".moves");
const reload = document.querySelector(".refresh");
const playButton = document.querySelector(".play");
var moves=0;

// refreshing the page 
reload.addEventListener('click',()=>{
   history.go(0);
 })
// playButton.addEventListener('click',()=>{
//   history.go(0);
// })

// for moves in puzzle like up , down,left,right
tiles.forEach(move);

function move(tile){
  tile.addEventListener('click',(e)=>{
      moves= moves + 1;
      html = `<p class="moves">MOVES : ${moves}</p>`;
      movescontent.innerHTML=html;
      pos = e.target.dataset.pos;
      let posRow = parseInt(pos.split(',')[1]);
      let posCol = parseInt(pos.split(',')[0]);
      console.log(posRow,posCol);
      const emptytile = document.querySelector('.empty');
      console.log(emptytile);
      emptypos = emptytile.dataset.pos;
      let emptyposRow = parseInt(emptypos.split(',')[1]);
      let emptyposCol = parseInt(emptypos.split(',')[0]);
      console.log(emptyposRow,emptyposCol);
      // up move
      if(emptyposCol == posCol&& posRow == emptyposRow+1){
        let num = e.target.innerHTML;
        e.target.classList.add("empty");
        e.target.innerHTML ="";
        //e.target.setAttribute("data-pos",posCol +","+(posRow-1));
        console.log(e.target.dataset);//tile movs up
        emptyposRow= emptyposRow +1;
        emptytile.classList.remove("empty");
        emptytile.innerHTML = num;
        //emptytile.setAttribute("data-pos",emptyposCol +","+(emptyposRow));
        console.log(emptytile.dataset);// empty moves down
       }

       // right move
       if( posCol==emptyposCol-1 && posRow == emptyposRow){
        let num = e.target.innerHTML;
        console.log(num);
        e.target.classList.add("empty");
        e.target.innerHTML ="";
        //e.target.setAttribute("data-pos",posRow +","+(posCol-1));
        console.log(e.target.dataset);//tile moves right
        emptyposCol= emptyposCol -1;
        emptytile.classList.remove("empty");
        emptytile.innerHTML = num;
        //emptytile.setAttribute("data-pos",emptyposRow +","+(emptyposRow));
        console.log(emptytile.dataset);// empty moves left

       }
         // down move
       if(emptyposCol == posCol&& posRow == emptyposRow-1){
        let num = e.target.innerHTML;
        e.target.classList.add("empty");
        e.target.innerHTML ="";
        //e.target.setAttribute("data-pos",posCol +","+(posRow-1));
        console.log(e.target.dataset);//tile movs down
        emptyposRow= emptyposRow -1;
        emptytile.classList.remove("empty");
        emptytile.innerHTML = num;
        //emptytile.setAttribute("data-pos",emptyposCol +","+(emptyposRow));
        console.log(emptytile.dataset);// empty moves up
       }

        // left move
        if( posCol==emptyposCol+1 && posRow == emptyposRow){
          let num = e.target.innerHTML;
          console.log(num);
          e.target.classList.add("empty");
          e.target.innerHTML ="";
          //e.target.setAttribute("data-pos",posRow +","+(posCol-1));
          console.log(e.target.dataset);//tile moves left
          emptyposCol= emptyposCol +1;
          emptytile.classList.remove("empty");
          emptytile.innerHTML = num;
          //emptytile.setAttribute("data-pos",emptyposRow +","+(emptyposRow));
          console.log(emptytile.dataset);// empty moves right
  
         }
       
     })
}
