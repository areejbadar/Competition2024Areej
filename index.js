// question 1

function maxInteger(nums) {
    let maxProduct = Number.NEGATIVE_INFINITY;
    let start = 0;
    let end = 0;

    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = i; j < nums.length; j++) {
            product *= nums[j];
            if (product > maxProduct) {
                maxProduct = product;
                start = i;
                end = j;
            }
        }
    }

    return {
        maxProduct: maxProduct,
        subarray: nums.slice(start, end + 1)
    };
}

// Example Usage
const nums = [-2,0, -1];
const result = maxInteger(nums);
console.log("Maximum Product :", 
        result.maxProduct);
console.log(
    "Subarray with Maximum Product:", 
        result.subarray);


// Ques 2
let num = [2, 7, 11, 15]

var twoSum = function(num, target) {
    for(let i = 0; i <= num.length; i++){
        for(let j = 0; j <= num.length; j++){
            if(num[i] + num[j] == target){
                return [i, j]
            }
        }
    }
};

console.log(twoSum(num, 9));
 



// Input 3 Reverse each word in a given input string.

var str = "Welcome to this Javascript Guide!";

//reverse string
var reverseStr = reverseWord(str,"");

var output = reverseWord(reverseStr," ");
console.log(output);

function reverseWord(str,separator){
  return str.split(separator).reverse().join(separator);
}

//Question 4 Write a JavaScript program to display the reading status (i.e. display
// book name, author name and reading status) of the following books.

var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }
 

//    Question 5: Question # 05:
// Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// You can return the answer in any order.

function amountTocoins(amount, coins) {
    if (amount === 0) {
      return [];
    } else {
      if (amount >= coins[0]) {
        left = (amount - coins[0]);
        
        return [coins[0]].concat(amountTocoins(left, coins));
      } else {
        coins.shift();
        return amountTocoins(amount, coins);
      }
    }
  }
  
  console.log(amountTocoins(46, [25, 10, 5, 2, 1]));


