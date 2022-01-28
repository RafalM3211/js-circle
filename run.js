{
const run_container=document.querySelector(".run-section");
const run_div=document.querySelector(".running-block");

let posX=0;
let posY=0;
const element_width=70;
const element_height=70;
run_div.addEventListener("mouseenter", e =>{
    const Xp=e.offsetX;
    const Yp=e.offsetY;
    if(Xp<element_width/2) posX += get_vector(Xp, Yp, 150)[0]; //pozniej bedzie sie przekazywac losowa wartosc
    else posX += get_vector(Xp, Yp, 150)[0];
    if(Yp>element_height/2) posY += get_vector(Xp, Yp, 150)[1];
    else posY -= get_vector(Xp, Yp, 150)[1];
    run_div.style.left=posX+"px";
    run_div.style.top=posY+"px";
})  

function rand(spread, add){
    return Math.floor( Math.random()*spread + add );
}


/* 
   Xp - wspolzedna x miejsca kontaktu kursora z okregiem
   Yp - wspolzedna y miejsca kontaktu kursora z okregiem
*/

function get_vector(Xp, Yp, distance){
    const Xq=element_width-Xp;
    const Yq=element_height-Yp;
    const triangle_x=Xq-Xp;
    const triangle_y=Math.abs(Yq-Yp);
    const tg=triangle_y/triangle_x;
    const multiplier=distance/Math.sqrt( (triangle_x+triangle_y)*(triangle_x+triangle_y)-2*triangle_x*triangle_y );
    /* ^ to wyszlo ze skomplikowanych obliczen ze wzoru pitagorasa, gdzie: distance^2=(x*multiplier)^2 + (y*multiplier)^2
    mozna tez by policzyc za pomoca tg. tg=sin/cos       */
    const vector_x=multiplier*triangle_x;
    const vector_y=multiplier*triangle_y;
    //console.log("Xp:", Xp, "Yp:", Yp, "Xq:", Xq, "Yq:", Yq, "triangle_x:", triangle_x, "triangle_y:", triangle_y, "tg:", tg, "multiplier:", multiplier, vector_x, vector_y);
    return [vector_x, -vector_y];
}

}