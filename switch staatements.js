// Mon - 7am
// Tue - Thurs - 4am
// Fri - 9am
// Sat - Sun - 8am

let day = "Holiday"

switch(day){
    case 'Monday':
        console.log("7am")
        break; // jump out of the block
    case 'Tuesday':
    case 'Wednesday':    
    case 'Thursday':
        console.log("4am")
        break;
    case 'Friday':
        console.log("9am")
        break;
    case 'Sat':
    case 'Sunday': 
        console.log("8am") 
        break;
    default :   
        console.log("Visit a friend")
}
console.log("Time to Work")