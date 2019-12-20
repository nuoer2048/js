/**
 * 剑值offer里面的连续子数组求和
 * @param {} arr 
 */
function add(arr){
    const res = [];
    while(arr.length>1){
      let ans = getMaxSum(arr);
       console.log(ans);
      arr.splice(0,1);
      res.push(ans);
    }
   return Math.max.apply(null,res);
    
  }
  function getMaxSum(arr){
    const res = [];
    let ans = arr.reduce(function(prev,cur){
      res.push(prev);
      return prev+=cur;
    })
    res.push(ans);
  return Math.max.apply(null,res);
  }
/**
 * 整数中1出现的次数
 * @param {*} m 
 */
  function findNum(m){
    let num =0;
  
     if(m<10){
       num= 1;
     }
     while(m>=1){
       let str = ''+m;
       let  index = str.indexOf('1');
       while(index!==-1){
         num++;
         index= str.indexOf('1',index+1)
       }
       m--;
     }
    return num;
  }
/**
 * 丑数
 * 
 * @param {丑数的指定个数} index 
 */
  function GetUglyNumber_Solution(index)
{
    let ugly =[];
    const nums=[2,3,5];
      let pre = 2;
      let flag = pre;
      while(pre <= index){
          flag = pre;
          while(flag>=2){
              if(flag%2===0){
                  flag = flag/2;   
              }else if(flag%3===0){
                  flag=flag/3;
              }else if(flag%5===0){
                  flag=flag/5;
              }else {
                  index++;
                  break;
              }

              if(nums.indexOf(flag)>=0||flag===1){
                      ugly.push(pre);
                      break;
                  }
          }
          pre++;

            
}
}
/**
 * 第一个只出现一次的字符
 * @param {*} str 
 */
function FirstNotRepeatingChar(str)
{
    let res = [];
    for(let i=0,len= str.length;i<len;i++){
        let item = str[i];
        let lastIndex = str.lastIndexOf(item);
        if(lastIndex === i&&res.indexOf(item)< 0){
            return i;
        }
        else{
            if(res.indexOf(item)<0){
                res.push(item);
            }
        }
    }
    return -1;
}
/**
 * 不用四则运算实现两个数相加
 * @param {*} num1 
 * @param {*} num2 
 */
function getSum(num1,num2){
  let sum = 0;
  do{
    sum = num1^num2;
    let res = (num1&num2)<<1 ;
    num1= sum
    num2=res;
  }while(num2!==0)
  console.log(sum);
}
/**
 * 找到递增序列里面两个数和为sum的数字，如果有多对就输出积最小的两个数
 * @param {递增序列} array 
 * @param {和} sum 
 */
function FindNumbersWithSum(array, sum)
{
    // write code here
  
     for(var i=0;i<array.length;i++){
         let oth = sum - array[i];
         let index = array.indexOf(oth,i+1);
         if(index>-1){
            return [array[i],array[index]]
         }
     }
  

}
/**
 * 排序
 */
function sort(){

if(numbers.length===0){
  return '';
}
numbers.sort(function(a,b){
 const str1 = a+''+b;
 const str2 = b+''+a;
 for(let i =0;i<str1.length;i++){
     if(str1.charAt(i)>str2.charAt(i)){
        return 1;
     }
     if(str1.charAt(i)<str2.charAt(i)){
         return -1;
     }
 }
})
let str = ''
for(let i =0;i<numbers.length;i++){
   str+=numbers[i];
}
return Number(str);
}
/**
 * 大数相加
 * @param {*} a 
 * @param {*} b 
 */
function getsum(a,b){
  /**字符串自动补全*/
   let len1 = a.length;
   let len2 = b.length;
   let max = Math.max(len1,len2);
  let dis = len1-len2;
  if(dis>0){
     for(var i=0;i<dis;i++){
        b='0'+b;
     }
  }
  if(dis<0){
     for(var i=0;i<-dis;i++){
        a='0'+a;
     }
  }
  let res = [];
 let flag = 0;
 for(var i=max-1;i>=0;i--){
   let str1 = a.charAt(i)||0;
   let str2 = b.charAt(i)||0;
   let sum = str2+str1+flag;
   if(sum>=10){
      res.unshift(sum-10);
      flag=1;
   }else{
      res.unshift(sum);
      flag=0;
   }

 }
 if(flag===1){
    res.unshift(flag);
 }
 console.log(res.join(''))

}
