export const getValue = async (value)=>{
  if (Number.isInteger(Number(value)) && Number(value) > 0){
    return calculatePrime(Number(value));
  }else {
    return -1;
  }
};

const calculatePrime = (value)=>{
  let prime = 1;
  let testNumber = 0;
  let numberOfPrimes = 0;

  while (numberOfPrimes < value){
    if (isPrimeNumber(testNumber)){
      numberOfPrimes++;
      if (numberOfPrimes === value){
        prime = testNumber;
      }else {
        testNumber++;
      }
    }else {
      testNumber++;
    }
  }
  return prime;
};

const isPrimeNumber = (value)=>{
  if (value <= 1){
    return false
  }

  if (value === 2 || value === 3){
    return true
  }

  let range = Math.floor(Math.sqrt(value)) + 1;
  for (let i = 2; i < range; i++){
    if (value % i === 0) {
      return  false;
    }
  }
  return true
};


