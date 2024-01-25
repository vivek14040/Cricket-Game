let computerChoice;
function game(){

     let randumNumber = Math.random()*3;
        
        let resultmsg;
        if(randumNumber > 0 && randumNumber <= 1)
        {
             computerChoice='Bat'; 
            
        }
        else if(randumNumber > 1 && randumNumber <= 2)
        {
             computerChoice='Ball';
            
        }else{
            computerChoice='Stump';
            
        }
    }
    let score={
       win:0,
       lost:0,
       tie:0,
    };