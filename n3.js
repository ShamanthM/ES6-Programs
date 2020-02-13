var num=10
function te()
{
    var num=100
    console.log("value of num in te():"+num);
    {
        console.log("inner block begins")
        let num=200
        console.log("value of num:"+num);
    }
}
console.log("value outside:"+num);
te()