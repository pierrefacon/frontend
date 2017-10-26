// Define the Friend model class. This extends the core Model.
define(
    [
        "corpsspatial"
    ],
    function( Corpsspatial){
    function Satellite (adressesat,satellite,x,y,dist,planorb,idsat){
   //    Planete.prototype = inherit(Corpsspatial.prototype)        
        Corpsspatial.call(this,satellite,x,y,dist,planorb,idsat);
  //       document.getElementById("valeur").innerHTML=window.compteur+" / ";
    //sert à ne pas afficher des planètes non construites 
        this.adressesat=adressesat;
        this.inconstruction=true;  
        this.cancelAnim=false    
        this.indice=0;
    }
       Satellite.prototype = new Corpsspatial();
       Satellite.prototype.constructor = Satellite;
       // this.img=new Image();   
    //  this.self=this; 
       Satellite.prototype.init=function(){
        // "var self=this" makes Planete available in the img.onload function
        // otherwise "this" inside img.onload refers to the img
       var self=this;
       this.inter= setInterval(function (){
           
       self.loop();
       
       },10);
     //   this.img.src = planete+".gif";  
      };
      // x,y need to be this.x and this.y
    Satellite.prototype.loop = function () {       
         if (this.cancelAnim===true){
         //   window.getCx().clearRect(0, 0, canvas.width, canvas.height);
                this.inconstruction=true;
                return;
                }
  //   window.requestAnimationFrame(this.loop.bind(this));  
    //  window.getCx().clearRect(0, 0, canvas.width, canvas.height);
     
      //calcul coordonnees       
      	var avancejour=this.avancejour;;      
       var centreplanetairex=this.adressesat.x;
        var centreplanetairey=this.adressesat.y;
        //ici on utilise nbsat pour montrer le satellite
        var distance = parseInt(this.adressesat.distance);//+this.nbsat;
       
        distance=distance+parseInt(this.nbsat);
        var plan = this.adressesat.plan;
        var excentricite=10;        
        this.indice = this.indice + avancejour+3;
  	var sinx=Math.sin(this.indice*(3.1415926/180));
	var cosx=Math.cos(this.indice*(3.1415926/180));
        //attention, this.distance sinon il prend distance qui est l'id d'u ne zone text
	sinx=sinx*distance/2;	
	cosx=cosx*plan;
	var m_coordx=centreplanetairex+excentricite+sinx;	
	var m_coordy=centreplanetairey+cosx;
        this.x=m_coordx;
        this.y=m_coordy;
        // a faire
        this.inconstruction=false;
         Corpsspatial.prototype.draw.call();
    };
    
 
               return( Satellite );
 
 
    }
);
        
