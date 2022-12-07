// //Task-1 solve start>>>

// //Letter grade program using if/else if:
// //Task 1 Method 1 start>>>
var mark=(Number(prompt(("Enter your number to see grade: "))));
document.write("<h1>Task-1 answer:</h1>Your mark is: "+mark);
if(mark>=80 && mark<=100){
    document.write("</br>Congratulations! You got A+");
} 
else if(mark>=70){
    document.write("</br>You have got 'A grade'");
}
else if(mark>=60){
    document.write("</br>You have got 'A- grade'");
}
else if(mark>=50){
    document.write("</br>You have got 'B grade'");
}
else if(mark>=40){
    document.write("</br>You have got 'C grade'");
}
else if(mark>=33){
    document.write("</br>You have got 'D grade'");
}
else if(mark<33 && mark>0){ 
    document.write("</br>You have failed");
}
else{
    document.write("</br>Invalid Mark. Try again with valid mark");
}
// //Method 1 end>>>





//******************Sojib Codes*****************//





// //Letter grade program using switch,case:
// //Task 1 Method 2 start>>>
// var mark=(Number(prompt(("Enter your number to see grade: "))));
// document.write("<h1>Task-1 answer:</h1>Your mark is: "+mark);
// var result=(parseInt(mark/10));
// switch(result){
//     case 10:case 9:case 8:
//         document.write("</br>Congratulations! You have got A+");break;
//     case 7:
//         document.write("</br>You have got 'A grade'");break;
//     case 6:
//         document.write("</br>You have got 'A- grade'");break;
//     case 5:
//         document.write("</br>You have got 'B grade'");break;
//     case 4:
//         document.write("</br>You have got 'C grade'");break;
//     case 3:case 2: case 1:
//         document.write("</br>You have failed");break;
//     default:
//         document.write("</br>Invalid Input");break;
// }
// //Method 2 completed>>>

// //Task-1 Completed>>>>>






// //Task-2 Solve Start>>>
// //Task-2 Method 1 start>>> for loop
document.write("<h1>Task-2 answer:</h1>");
document.write("<h3>The multiplication table vertically from 1 to 8 using 'for loop':</h3>");
for(var i=1;i<=10;i++){
    for(j=1;j<=8;j++){
        if(j==8){
            document.write(j+'x'+i+' ='+j*i);
        }
        else{
          document.write(j+'x'+i+' ='+j*i+', ');  
        } 
    }
    document.write('<br>');
}
// //Method 1 completed



// //Task 2 Method 2 start>>> for loop
// document.write("<h1>Task-2 answer:</h1>");
// document.write("<h3>The multiplication table vertically from 1 to 8 using 'for loop':</h3>");
// for(var i=1;i<=8;i++){
//     for(j=1;j<=10;j++)
//     document.write(i+'x'+j+' ='+i*j+'<br>');
// }
// //Method 2 completed>>>


// //Task 2 Method  3 start>>> while loop
// document.write("<h1>Task-2 answer:</h1>");
// document.write("<h3>The multiplication table vertically from 1 to 8 using 'while loop':</h3>");
// var i = 1;
// while(i<=8){
//     var j = 1;
//     while(j<=10){
//         if(j==10)
//         document.write(j+'x'+i+' ='+j*i);
//         else
//         document.write(j+'x'+i+' ='+j*i+', ');
//         j++; 
//     }
//     document.write('<br>');
//     i++;
// }
// //Method 3 close>>>

// //Task 2 Method 4 start>>> do while loop
// document.write("<h1>Task-2 answer:</h1>")
// document.write("<h3>The multiplication table vertically from 1 to 8 using 'do while loop':</h3>");
// var i=1;
// do{
//     var j=1;
//     do{
//         if(j==10)
//         document.write(j+'x'+i+' ='+j*i);
//         else
//         document.write(j+'x'+i+' ='+j*i+', ');
//         j++; 
//     }while(j<=10);
//     document.write('<br>');
//     i++;
// }while(i<=8);
// //Method 4 close>>>

// //Task-2 Completed>>>




// //Task-3 Solve Start>>>
// //Immediately invokeable parameterized function showing addition, subtraction, deletion & multiplication:
var m1=(Number(prompt('Enter 1st number: ')));
var m2=(Number(prompt('Enter 2nd number: ')));
var m3=(Number(prompt('Enter 3rd number: ')));   
function myFunction(){
    var result=document.write('<h1>Task-3 answer:</h1>Your entered numbers: '+m1+','+m2+','+m3+
    '</br>Summation: '+(m1+m2+m3)+
    '</br>Substraction: '+(m1-m2-m3)+
    '</br>Multiplication: '+(m1*m2*m3)+
    '</br>Division: '+((m1/m2)/m3));

    return result;
}

myFunction(m1,m2,m3);
// //Task-3 Completed>>>


// //Assignment completed sucessfully!