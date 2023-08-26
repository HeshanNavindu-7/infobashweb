var times=0;
var container=document.querySelector('.container')

console.log(times)
function times1(){
    times+=1;
    console.log(times)

    if(times==13){
        clearInterval(timesCount)
        container.classList.add('v1')



    }

}
var timesCount=setInterval(times1,1000)