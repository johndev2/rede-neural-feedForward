function funcSum(arr=[]){
    return arr.reduce((a,b)=>a+b)
}

function gradientDescent(n=0){
    return n * (1 - n);
}

function feedForward(input=[], target=0, epochs=1){
    if(target<=0) {
        target = 0.1;
    }
    else if(target>1) {
        target = 1;
    } 
    let weights = [];
    for(let i=0; i<input.length; i++){
        weights.push(Math.random());
    }

    for(let i=1; i<=epochs; i++){
        let multiply = [];
        for(let j=0; j<input.length; j++){
            if(input[j]<=0) {
                input[j] = 0.1;
            }
            multiply.push(input[j] * weights[j]);
        }
        let sum = funcSum(multiply);
        let output = parseFloat(Math.tanh(sum).toFixed(4));

        let error = parseFloat((Math.abs(target - output)).toFixed(4));
        for(let j=0; j<input.length; j++){
            weights[j] += input[j] * gradientDescent(error);
        }
        let epoch = i.toString().padStart(7, '0');

        console.log(`época: ${epoch} | taxa de erro: ${error} | saída: ${output}`);
    }
}

//feedForward([0], 0.1, 800);
feedForward([0, 0], 0.2, 1000);


