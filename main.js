import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";
$(function () {
    const szuloELEM = $(".tarolo");
    new Megjelenit(TODOLIST2, szuloELEM);

/*     $(window).on("torles", (event) => {
       console.log(event.detail);
    }); */


    $(window).on("kesz",(event)=>{
        let objPeldany =event.detail;
        //console.log(objPeldany);
        //console.log("kész esemeny")
        objPeldany.setHatter();
        TODOLIST2[objPeldany.index].kesz=true;
        console.log(TODOLIST2);    
    })
    $(window).on("megse",(event)=>{
        let objPeldany =event.detail;
        console.log(objPeldany);
        //console.log("kész esemeny")
        //objPeldany.setHatter();
        objPeldany.setMegse();
    })

    $(window).on("torol",(event)=>{
        let objPeldany =event.detail;
        TODOLIST2.splice(objPeldany.index,1) // ez töröl a listából 
        console.log(TODOLIST2)
        szuloELEM.empty();  //oldalon az adott elem ürítése 
        new Megjelenit(TODOLIST2,szuloELEM);
        //console.log(objPeldany);
        //console.log("töröl esemeny") 
    })
});
