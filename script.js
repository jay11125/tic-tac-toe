var current_player = "O"
var h = document.getElementById("winner");
var box = document.getElementsByClassName("box");
var x = Array.from(box);
var g = 0;
h.innerHTML="It is Player O's turn"

function check(player,a,b,c){
    if (x[a].innerText === player && x[b].innerText === player && x[c].innerText === player) {
        h.innerHTML = `Player ${player} wins!!!`;
        current_player=""
        x[a].className="done"
        x[b].className = "done"
        x[c].className = "done"
        g=1;
    }
    
    
}
x.forEach(element => {
   element.addEventListener("click", function1);
       function function1() {
        if (element.innerText === "") {

            if (current_player === "O") {
                element.innerText = current_player;
                current_player = "X";
            }
            else if(current_player==="X"){
                element.innerText = current_player;
                current_player = "O"
            }
        }
        if(current_player==="O"){
            h.innerHTML=`It is Player O's turn`
        }
        else if(current_player==="X"){
            h.innerHTML=`It is Player X's turn`
        }
        if (element.innerHTML !== null || element.innerHTML !== "") {

            element.addEventListener("mouseover", function () {
                element.setAttribute("style", "background-color:red")
            })
            element.addEventListener("mouseout", function () {
                element.setAttribute("style", "background-color:white")
            })

            check("O", 0, 3, 6)
            check("X", 0, 3, 6)
            check("O", 1, 4, 7)
            check("X", 1, 4, 7)
            check("O", 2, 5, 8)
            check("X", 2, 5, 8)

            check("O", 0, 1, 2)
            check("X", 0, 1, 2)
            check("O", 3, 4, 5)
            check("X", 3, 4, 5)
            check("O", 6, 7, 8)
            check("X", 6, 7, 8)

            check("O", 0, 4, 8)
            check("X", 0, 4, 8)
            check("O", 2, 4, 6)
            check("X", 2, 4, 6)
            
            if (x.every(i => i.innerText != "")===true){
               if(g===0){ 
                h.innerHTML="DRAW!"
               }
            }
        }
    }
});
    
