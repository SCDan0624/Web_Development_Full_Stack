const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

[...nums1, ...nums2]; //[1,2,3,4,5,6]
["a", "b", ...nums2]; // ['a','b',4,5,6]
