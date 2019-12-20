/**
 * 归并排序
 * @param {*} arr 
 */
function mergeSort(arr){
    if(arr.length===1){
        return arr;
    }
    let len = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,len));
    let right = mergeSort(arr.slice(len));
    let res =[];
    let l=0, r=0;
    while(l<left.length&&r<right.length){
        if(left[l]>right[r]){
            res.push(right[r]);
            r++;
        }else{
            res.push(left[l])
            l++;
        }
        
    }
    while(l<left.length){
        res.push(left[l++])
    }
    while(r<right.length){
        res.push(right[r++])
    }
    return res;
  }
  let arr =[8,1,4,5,2,10,11,15];
  merge(arr);
  function merge (arr){
     let res = mergeSort(arr);
     console.log(res);
  }
  
  /*
   * 插入排序：就是在以及排好序的数组里面插入一个值，最后输出一个有序数组
   * @param {\} arr 
   */
  function insertSort1 (arr){
    for(let i =1;i<arr.length;i++){
        let item = arr[i];
      let j;
      for(j=i-1;j>=0&&arr[j]>item;j--){
          arr[j+1]=arr[j];
      }
      arr[j+1]=item;
       
    }
    console.log(arr);
  }
  function insertSort2(arr){
         let res =[];
         for(let i = 0;i<arr.length;i++){
               if(!res.length){
                   res.push(arr[i]);
               }
               else{ 
                   let item = arr[i];
                   for(var j=0;j<res.length;j++){
                       if(res[j]>item){
                         res.splice(j,0,item); 
                         item = false;
                         break;
                       } 
                   }
                   if(item){
                       res.push(item);
                   }
               }
         }
         console.log(res);
  }
  
  /**
   * 选择排序。选出数组中一个最小或者是是最大的数插入的序列里面，一次类推一直到数组长度为0
   * @param {*} arr 
   */
  function searchSort(arr){
    let res = [];
    while(arr.length){
        let min= Math.min(...arr);
    let index = arr.indexOf(min);
    res.push(min);
    arr.splice(index,1)
    }
    console.log(res);
  }
  /**
   * 快速排序：选取一个中间值，申请两个数组控件，用来分别存放比中间值小的元素以及比中间值大的元素。
   * @param {*} arr 
   */
  function quickSort(arr){
    if(arr.length<2){
        return arr;
    }
    let len = Math.floor(arr.length/2);
    let middle = arr.splice(len,1)[0];
    let left =[];
    let right =[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<middle){
            left.push(arr[i])
        }else{
         right.push(arr[i])
  
        }
    }
    return quickSort(left).concat([middle],quickSort(right))
  }