
define ([ "aspect"],function(Aspect){
function Corpsspatial (planete,x,y,dist,planorb,nbsat){
       this.avancejour=1;
        this.nom=planete;
        this.x=x;
        this.y=y;
        this.nbsat=nbsat;
        this.distance=dist;
        this.plan=planorb;
        //a remettre
        this.aspect= new Aspect(this.nom);
        return( this );
}
  Corpsspatial.prototype.draw=function(){
     
        
            window.sc.affiche();
     //   afficheplanete();
     //   window.publish.getCx().drawImage(this.img, this.x, this.y);
      
      
    }
             return( Corpsspatial );} 
            )

 