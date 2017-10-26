 
          
require(
    [
        "planete","screen"
    ],
    
    function( Planete,Screen){
                var ModuleJson = (function () {
                             window.tableaujson=[];

                           var objtojson = function (objet) {
                           var valeur = JSON.stringify(objet);
                            tableaujson.push(valeur)
                               console.log(valeur);
                                           };
                              var savejson = function () {
                                localStorage.setItem('planetes',tableaujson) 
                              };
                              return {
                                  //en premier : ce qui sera montré
                                objecttojson: objtojson,
                                savejson: savejson

                              };

                            })();


    var ModulePlanete = (function () {
                              window.tableau=[];
                              var startevent = function () {
                                 start("terre");
                              };

                              var stopevent = function () {
                                 stop();
                              };

                              var start = function (nom) {
                                  var dist=  document.getElementById('distance').value;
                                  var plan= document.getElementById('plan').value;
                                   var nbsat= document.getElementById('nbsatellites').value;
                                  var planete = new Planete(nom,700,250,dist,plan,nbsat);
                                  window.tableau.push(planete);  
                                  planete.init(); 
                               }  ;
                               var stop= function(){
                                 // window.clearInterval(window.inter);
                                 for (var i = 0 ; i< window.tableau.length ; i++){
                                      window.tableau[i].cancelAnim=true;

                                       window.clearInterval(  window.tableau[i].inter);

                                   }
                                  window.compteur=0;
                                  window.tableau=[]; 
                               }  ;
               
                              return {
                                  //en premier : ce qui sera montré
                                startevent: startevent,
                                stopevent: stopevent,
                              
                              };

                            })();
 
                window.sc=new Screen();
                document.getElementById('demarrer').onclick= function(){ModulePlanete.startevent();  };                    
                document.getElementById('arreter').onclick=function(){ModulePlanete.stopevent();}; 
                document.getElementById('savejson').onclick=function(){ModuleJson.savejson();}; 
 
 
       
       
          
       

    }
);
