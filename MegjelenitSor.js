class MegjelenitSor {
    #adat = {};
 
    constructor(adat, szuloElem,index) {
        this.index=index;
        this.#adat = adat;
        this.tablaElem = szuloElem;
        this.#sor();
        /** eseménykezelők a kész és a törlés gombokhoz */
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.megseElem = this.sorElem.children("td").children(".megse");
        this.torolElem = this.sorElem.children("td").children(".torol");
        if (this.#adat.kesz){
        {
            this.setHatter();
        }
     }
      
        //console.log(this.keszElem);
        this.keszElem.on("click", () => {
        this.#esemenyTrigger("kesz")      
        });
        this.megseElem.on("click", () => {
        this.#esemenyTrigger("megse")       
        });
        this.torolElem.on("click", () => {
            this.#esemenyTrigger("torol") 
         });
        
        /**funtinal a this a konkrét html elemet fogja kiírni  */
     /*     this.keszElem.on("click", function() {
          console.log(this) ; 
         }); */

        
       
    }
    setHatter(){
        this.sorElem.css("background-color", "lightgreen");
    }

    setMegse(){
        this.sorElem.css("background-color","white");
        this.keszElem.html("X");
    }

    #sor() {
        let txt = "";
        txt += "<tr>";
        for (const key in this.#adat) {

            if (key!="kesz"){
                txt += `<td>${this.#adat[key]}</td>`;
            }
          }
        
        txt += `<td><span class="kesz">✔️</span><span class="megse">X</span> <span class="torol">🗑</span></td>`;
        txt += "</tr>";

        this.tablaElem.append(txt);
    }
   
    #esemenyTrigger(esemenyNev){
        const e= new CustomEvent(esemenyNev,{detail: this})
        window.dispatchEvent(e);
    }
}
export default MegjelenitSor;
