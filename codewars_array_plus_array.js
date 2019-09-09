/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help. */

function arrayPlusArray(arr1, arr2) {
  let arr = arr1.concat(arr2) 
  return arr.reduce((acc,val) => acc+ val)
}
