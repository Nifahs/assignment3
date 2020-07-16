//Feet to Mile 
function feetToMile(foot){
    
   
    if(foot>0){
        mile = foot*0.000189394;
        return mile.toFixed(5);
    }
    else if (foot<0){
        var message ='Feet can not be a Negative number!';
        return message;
    }
    else{
        var message ='Wrong input!';
        return message;
    }

}



//Wood calculator
function woodCalculator(chairNo, tableNo, bedNo){
    

    if(chairNo<0 || tableNo<0 || bedNo<0){
        
        var message = 'Amount of Chair or Table or Bed can not be a Negative Number!';
        return message;
    }
    else if (chairNo>=0 && tableNo>=0 && bedNo>=0){
        
        var woodNeeded = (chairNo*1 + tableNo*3 + bedNo*5);
        return woodNeeded;
    }
    else{
        var message ='Wrong input!';
        return message;
    }
}





//Brick Calculator
function brickCalculator(totalFloors){

    if(totalFloors>0){
        var brickAmount =0;
        for(var i =1; i<=totalFloors; i++){

            if(i<=10){
                brickAmount = brickAmount + 15*1000;
            }
            else if (i>10 && i<=20){
                brickAmount = brickAmount + 12*1000;
            }
            else if(i>20){
                brickAmount = brickAmount + 10*1000;
            }
        }
        return brickAmount;
    }
    else if(totalFloors<=0){
        var message = 'Building Height can not be Negative or Zero!';
        return message;
    }
    else{
        var message ='Wrong Input!';
        return message;
    }
    

}




//Tiny Friend

function tinyFriend(names){

    if(names.length<=0){
        var message ='No Friends Name found';
        return message;
    }

    else if (names.length>0){
        var smallName = names[0];

        for(var i = 0; i<names.length; i++){
            if(names[i].length< smallName.length){
                smallName = names[i];
            }
            
        }
        
        if (smallName.length==0){
            var message = 'A name was not inserted';
            return message;
        }
        else{
            return smallName;
        }
    }
    else {
        var message = 'Wrong Input!';
        return message;
    }
    
}


// Feet to mile conversion program
var feet = 5000;

console.log(feetToMile(feet));




//Wood Calculator Program

var chair = 2;
var table = 3;
var bed = 10;

console.log(woodCalculator(chair, table, bed))

//Brick Calculator Program


var buildingHeight = 11;


console.log(brickCalculator(buildingHeight));

//Tiny Friend Name program

var friendNames = ['Shuvam', 'Shafi', 'Adi', 'Mostak', 'Sadia', 'Shanto', 'Turna'];

console.log(tinyFriend(friendNames));






