// Define the Friend model class. This extends the core Model.
define(
    [
        "corpsspatial","satellite"
    ],
    function( Corpsspatial, Satellite){
 
 
        // I return an initialized object.
        function Planete( planete,x,y,dist,planorb,nbsat ){
 
            // Call the super constructor.
        Corpsspatial.call(this,planete,x,y,dist,planorb,nbsat);
 
            // Store the name.
        this.inconstruction=true;   
        this.centresolairex=x;
        this.centresolairey=y/2;
        this.cancelAnim=false;    
        this.indice=0;
        var id=50;
      this.satellites =[];
              for (var s = 0;s<this.nbsat;s++)
        {
            //ici in ajoute un 0 pour nb de satellites, peu importe !!
            var sat = new Satellite(this,"satellite",0,0,0,0,id);
            id=id+250;
            this.satellites.push(sat);
            window.tableau.push(sat);     
          
        }
 
            // Return this object reference.
        //    return( this );
 
        }
        Planete.prototype = new Corpsspatial();
   //     Planete.prototype.constructor = Planete;   


   
       Planete.prototype.init=function(){
        // "var self=this" makes Planete available in the img.onload function
        // otherwise "this" inside img.onload refers to the img
      // var a=10;
       var self=this;  
       this.inter= setInterval(function (){
           
           self.loop();
       
       },10);
   //    return this;
     //   this.img.src = planete+".gif";  
      };
      // x,y need to be this.x and this.y  
    Planete.prototype.loop = function () {        
         if (this.cancelAnim===true){
           //     window.getCx().clearRect(0, 0, canvas.width, canvas.height);
                this.inconstruction=true;
                return;
                }
   //   window.requestAnimationFrame(this.loop.bind(this));  
    // window.getCx().clearRect(0, 0, canvas.width, canvas.height);    
      //calcul coordonnees      
      	var avancejour=this.avancejour;      
        var excentricite=0;        
        this.indice = this.indice + avancejour;
  	var sinx=Math.sin(this.indice*(3.1415926/180));
	var cosx=Math.cos(this.indice*(3.1415926/180));
        //attention, this.distance sinon il prend distance qui est l'id d'u ne zone text
	sinx=sinx*this.distance;	
	cosx=cosx*this.plan;
	var m_coordx=this.centresolairex+excentricite+sinx;	
	var m_coordy=this.centresolairey+cosx;
        this.x=m_coordx;
        this.y=m_coordy;
        if (this.inconstruction===true){
            this.inconstruction=false;
            //lancement des satellites
      
            this.satellites.forEach(function(satellite) {
                    satellite.distance=this.distance;	
                    satellite.plan=this.plan;
                    satellite.x=this.x;
                    satellite.y=this.y;
                    satellite.init();
                //sans le bind, le this à l'intérieur du foreach réfère au contexte global.
              }.bind(this));
        }
         Planete.prototype.draw.call();
    }
               return( Planete );
 
 
    }
);
        
