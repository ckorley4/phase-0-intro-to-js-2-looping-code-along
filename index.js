// Code your solutions in this file

function writeCards(array) {
  const newarr = []
  for (let me = 0; me < array.length; me++) {
    newarr[me] = `Thank you, ${array[me]}, for the wonderful surprise gift!`
  }
  return newarr
}

function countDown(num) {
  for (let me = num; me >= 0; me--) {
    console.log(me)
  }
}
