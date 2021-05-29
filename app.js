// chapter 17 to 20

// Q.1

// var arr = [[],[],[]]
// console.log(arr)

// Q.2

// var arr = [["0 1 2 3"],["1 0 1 2"],["2 1 0 1"]]


// document.write(arr[0]  + "<br>" +arr[1] + "<br>" +arr[2]);

// Q.3

// for(var i=0; i<=10; i++){
// document.write([i] + "<br>")
// }

// Q.4

// var a = +prompt("enter number")
// var c = +prompt("enter length")
//  for(var i=1; i<=c; i++){
//      b=a*i
//      document.write(a +" "+ " " + "x" + " "+ i +" "+ "="+ " " + b + "<br>")

//  }

// Q.5

// var fruits = ["apple", "banana", "mango", "orange", 
//     "strawberry"]


//     for(i=0;i<fruits.length; i++){
//         document.write(fruits[i]+ "<br>")
//     }

// var fruits = ["apple", "banana", "mango", "orange", 
//     "strawberry"]


//     for(i=0;i<fruits.length; i++){
//         document.write("Element at index"+" " + i+" " +fruits[i]+ "<br>")
//     }
    

// var index = ["Element at index 0 is Apple","Element at index 1 is banana","Element at index 2 is mango","Element at index 3 is orange","Element at index 4 is strawberry"]
// for(i=0;i<index.length; i++){
//     document.write(index[i] +"<br>")
// }

// Q.6

// a.

// for(var i=0; i<=15; i++){
// document.write([i] + "<br>")
// }

// b.

// for(var i=10; i>=1; i--){
//     document.write([i] + "<br>")
//     }

// c.

// for(var i=1; i<=20; i++){
//     if((i % 2) == 0){
//         document.write([i] + "<br>")
//     }
// }

// d.

// for(var i=1; i<=20; i++){
//     if((i % 2) != 0){
//         document.write([i] + "<br>")
//     }
// }

// e.

// for(var i=1; i<=20; i++){
//         if((i % 2) == 0){
//             document.write([i]+"k" + "<br>")
//         }
//     }


// 7.

// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var b = prompt("Enter item to search");
// var flag = true

// for(var i=0; i<a.length; i++){
//     if(b == a[i]){
//         flag = false
//         document.write(a[i] +" "+ "is avaliable at index"+" " + i)
//     }
// }

// if (flag){
//     document.write("we are sorry"+" " +b+ " " + "is not avaliable in our bakery")
// }

// Q.8


// var array = [24 , 53, 78, 91, 12];
// var max= array[0];

// for (i=0; i<array.length;i++){
//     if (array[i]>=max) {
//         max=array[i];
//     }
// }
// document.write("Array items: " + array + "<br>")
// document.write("the largest number is "+ " " +max);


// Q.9

// var array = [24 , 53, 78, 91, 12];
// var min= array[0];

// for (i=0; i<min;i++){
//     if (array[i]<min) {
//          min=array[i];
//     }
// }
// document.write("Array items: " + array + "<br>")
// document.write("the smallest number is "+min);

// Q.10

// for(var i=1; i<=100; i++){
//     if((i % 5) == 0){
//         document.write(i + "<br>")
//     }
// }

// chapter 21 to 25

// Q.1

//  var a = prompt("enter first name");
//  var b = prompt("enter first last name");

//  var fullname = a + b ;

//  document.write("welcome to my website"+" "+fullname)

// Q.2

// var a = prompt("enter your fav mobile name")

// document.write("my fav mobile is : " + a + "<br>" + "length of the string : " + a.length)

// Q.3

// var str = "pakistan";
// var n = str.indexOf("n");

// document.write("string : "+ str+ "<br>" + "index of 'n' : " + n)

// Q.4

// var str = "Hello World";
// var n = str.lastIndexOf("l");

// document.write("string : "+ str+ "<br>" + "index of 'l' : " + n)

// Q.5


// var str = "pakistan";
// var n = str.charAt(3);

// document.write("string : "+ str+ "<br>" + "character at index 3 is : " + n)


// Q.6

// var a = "Q1";
// var b = a.repeat(4)
// document.write(b)

// Q.7

// var a = "hyderabard";

// for( var i = 0 ; i <a.length ; i ++){
//     if(a.slice(i,i+5) === "hyder"){
//         a = a.slice(0,i) + "islam" +a.slice(i+5);
//     }
// }

// document.write(a)

// Q.8

// var a = "Ali and Sami are best friends. They play cricket and football together."

// for( var i = 0 ; i <a.length ; i ++){
//     if(a.slice(i,i+3) === "and"){
//         a = a.slice(0,i) + "&" +a.slice(i+3);
//     }
// }

// document.write(a)


// Q.9

// var a = "472"
// var b =parseInt(a);
// document.write("value: "+ a +"<br>"+"Type: "+ typeof a + "<br>" )
// document.write("value: "+ b +"<br>"+"Type: "+ typeof b )


// Q.10


// var cap = prompt ( "Enter a letter" ); 
// document . write ( cap . toUpperCase ());

// Q.11


// var a = prompt("enter your name")

// document.write("user input: " + a + "<br>")
// document.write("Title case: " + a[0].toUpperCase() + a.slice(1).toLowerCase())


// Q.12

// var d = "35.36";
// var s = d + '';
// s =s.replace('.', '');
// s = parseInt(s);
// document.write("Number: "+ d + "<br>" + "Result: " + s )

// Q.13


// var str = prompt("Enter your password");
// var numChars = str.length;
// var flag = true
// for (var i = 0; i < numChars; i++) {
// if (str.slice(i, i + 1) == "!" || str.slice(i, i + 1) == "@" || str.slice(i, i + 1) == "," || str.slice(i, i + 1) == ".")  {
//     var flag = false

// document.write("your password should not contail !,@,,,.")
// break;
// }
// }

// if(flag){
//     document.write("correct password has been enter");
// }


// Q.14

// var a = prompt("enter your fav cookie")
// var arr = ["Cake", "Apple pie", "Cookie"," Chips", "Patties"]
// var flag = true

// var firstletter = a.slice(0,1)
// firstletter = firstletter.toUpperCase()
// var otherletter = a.slice(1)
// otherletter = otherletter.toLowerCase()

// var fullletter = firstletter + otherletter

// for(i=0; i<arr.length; i++){
// if(fullletter === arr[i]){
//     flag = false
//     document.write(fullletter +" "+ "is avaliable at index " + i + " in our bakery")
// }
// }
// if(flag){
//     document.write("We are sorry " + fullletter + " is not avaliable in out bakery")
// }

// Q.16

// var university = "University of Karachi";
// var b = university.split("")
// for (i=0; i<b.length ; i++)
// {document.write(b[i] + "<br>")}


// Q.17

// var a = prompt("enter your country name")

// var b = a.charAt(a.length -1)
// document.write("User input: " + a + "<br>")
// document.write("Last character of input: " + b)

// Q.18

// var a =  "The quick brown fox jumps over the lazy dog";
// var b = a.match(/the|The/g  || []).length;
// document.write("Text: The quick brown fox jumps over the lazy dog " + "<br>")
// document.write("there are "+b+"  occurrence(s) of words 'the'" );




