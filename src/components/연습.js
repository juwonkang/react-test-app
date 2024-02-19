// ---------------------map()-------------------------

// const strings = ['1', '2', '3', '4']

// const change = (string) => Number(string)

// const stringNumber1 = strings.map((string) => Number(string))

// console.log(stringNumber1)
// console.log(strings[0])
// console.log(typeof strings[0])
// console.log(stringNumber1[0])
// console.log(typeof stringNumber1[0])

// console.log(strings !== stringNumber1)

//---------------------map()-------------------------

//---------------------filter()-------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// const evennumbers1 = numbers.filter((num) => num % 2 === 0)
// console.log(evennumbers1)

//---------------------filter()-------------------------

//구조 분해 할당-----------------------

// const nums = [1, 2, 3, 4, 5, 6]
// const one = nums[0]
// const two = nums[1]
// const three = nums[2]
// const four = nums[3]

//->
const nums1 = [1, 2, 3, 4, 5, 6]
const [one, two, three, four, five] = nums1

console.log(one, two, five)
//구조 분해 할당-----------------------
