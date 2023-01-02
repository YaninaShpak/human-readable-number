module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const specialNums = {
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'
    };
    const hundred = 'hundred';
    const thousand = 'thousand';
  
    let newArr = [];
    let newNum = '';
  
    if (number > 9 && number < 20) {
        for (let value in specialNums) {
            if (+value === number) {
                newNum += specialNums[number];
            }
        }
    } else {
        let arr = Math.abs(number).toString().split('');
  
        for (let i = 0; i < arr.length; i++) {
            if (arr.length > 1 && arr[i] === '0') {
                newArr.push('');
            } else {
                if (i === arr.length - 2) {
                    if (+arr[i] === 1 && +arr[i + 1] <= 9) {
                        let x = `${arr[i]}${arr[i + 1]}`;
                        for (let value in specialNums) {
                            if (value === x) {
                                newArr.push(specialNums[x]);
                            }
                        }
                        break
                    } else {
                        newArr.push(tens[+arr[i]]);
                    }
               
                } else {
                    newArr.push(ones[+arr[i]]);
                }
            }
        }
  
        if (number > 99 && number < 1000) {
            newArr.splice(1, 0, hundred);
        } else if (number > 999 && number < 9999) {
            newArr.splice(1, 0, thousand);
            newArr.splice(3, 0, hundred);
        }
    
        newNum += newArr.filter(el => el != '').join(' ');
    }
    return newNum;
}
