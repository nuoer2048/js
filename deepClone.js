function deepClone(target) {
    let dataType=Object.prototype.toString.call(target);
    let res;
    if(dataType===['object Array']){
        res=[];
        for(let j=0,len=target.length;j<len;j++){
            res[j]=Object.prototype.toString.call(target[j])===['object Array']?deepClone(target[j]):target[j]
        }
    }
    else if(dataType===['object object']){
        res={}
        for(let j=0,len=target.length;j<len;j++){
            res[j]=Object.prototype.toString.call(target[j])===['object object']?deepClone(target[j]):target[j]
        }
    }
    else {
        res=target;
    }
    return res;

}
var arr={
    "name":"jone",
    "sex":"male",
    "test":{
        "name":"lily",
        "sex":"female",
        "last":{
            "age":29
        }
    }
};
console.log(deepClone(arr));