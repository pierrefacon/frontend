define([ ],function(){
function Screen (){
       window.plan=[];
        return( this );
}
 
//            var afficheplanete= function()
//                            {
//                                        for (var i=0;i<window.tableau.length;i++)
//                                        {
//
//                                        if (window.tableau[i].inconstruction===false)
//                                        {  
//                                        ModuleJson.objecttojson(window.tableau[i].elem);   
//                                        console.log(window.tableau[i].nom,window.tableau[i].x, window.tableau[i].y);
//                                        document.getElementById('x').value=window.tableau[i].x;
//                                        document.getElementById('y').value=window.tableau[i].y;    
//                                        }
//                                        }
           //                     }
 Screen.prototype.affiche=function(){
        var gc=getCx();
        gc.clearRect(0, 0, canvas.width, canvas.height);
//      this.affiche=function(){
//        var sol = new Image();
//        sol.src="soleil.gif";
//        this.getCx().drawImage( sol,document.getElementById("canvas").width/2+200, document.getElementById("canvas").height/2);
         for (var i=0;i<window.tableau.length;i++){
            if (window.tableau[i].inconstruction===false){  
               
       
          gc.drawImage( window.tableau[i].aspect.imag,window.tableau[i].x+50, window.tableau[i].y+50);
        }
        }   
    
        }
    var getCx=function(){
       //   document.getElementById("valeur").innerHTML= document.getElementById("valeur").innerHTML+"getcx"+i;
            var canvas = document.getElementById("canvas");
            return  canvas.getContext("2d");
      };
 return( Screen);
}     
            )
 