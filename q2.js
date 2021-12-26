//Write a program to find nth number of geometric progression(GP). 
var a = 5; 
a=parseInt(a);
var r = 8; 
r=parseInt(r);
var n = 9;
n=parseInt(n);

var curr;
    for (var i = 0; i < n; i++) {
        curr = a * Math.pow(r, i);
        console.log(curr + " ");
    }