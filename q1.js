//Write a program to find nth number of arithmetic progression(AP). Push your code on Github and share that link here.
const x=5,y=6;
const n=8;
const apro =(first,second,n)=>{
    const dif=second-first;
    const factorial=(n-1)*dif;
    const term = first+factorial;
    return term;
};
console.log(apro(x,y,n));