//fizzbuzz onde n pode ser divisivel por 3 e 5
for(let i = 1; i < 101; i++){
    if(i % 15 == 0){
        console.log("FizzBuzz");
    }else if (i % 3 == 0){
        console.log('Fizz');
    }else if(i % 5 == 0){
        console.log('Buzz');
    };
};

//Ternario
for (let i = 0; i < 100;) console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);