// Expands an iterable (array,str,ect) into list of arguments

const nums = [9, 3, 2, 8];

Math.max(nums); // NaN)

Math.max(...nums); //67
// Same as calling:
// Math.max(9,3,2,8)
