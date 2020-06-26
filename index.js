function uncrossedLines(A, B) {
    let topPointer=0;
    let bottomPointer=0;
    return iterate(A,B,topPointer,bottomPointer);
}
function iterate(A,B,topPointer,bottomPointer){
    let result=[];
    for(let i=topPointer;i<A.length;i++){
        for(let j=bottomPointer;j<B.length;j++){
            if(A[i]===B[j]){
                let x=1+iterate(A,B,i+1,j+1);
                let y=iterate(A,B,i,j+1);
                result.push(Math.max(x,y));
            }
        }
    }
    return result.length===0?0:result.reduce((a,b)=>Math.max(a,b));
}
console.log(uncrossedLines([1,4,2],[1,2,4]));
console.log(uncrossedLines([2,5,1,2,5],[10,5,2,1,5,2]));
console.log(uncrossedLines([1,3,7,1,7,5],[1,9,2,5,1]));