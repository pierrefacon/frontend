define([],function(){
function Aspect (nom)   {
            this.compteurimages=0;
            this.tableauim = [];
            for (var i = 0 ; i< 17 ; i++){
           
                this.tableauim.push(new Image());     
           
                this.tableauim[i].src=nom+"/"+nom+i+".gif";   
            }
            
            Object.defineProperty(this,'imag',
            {
                get :function() {              
                    if (this.compteurimages > 15)
                    {  
                        this.compteurimages=0;
                        this.compteurimages=-1;
                     }
                        this.compteurimages++;
                         return this.tableauim[this.compteurimages]; 
                    }
            }
               )
          //  return (this);
    }       
             return( Aspect );   
}
)
