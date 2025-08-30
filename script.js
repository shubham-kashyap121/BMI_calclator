function BMICalculator() {
    let height = parseFloat(document.getElementById('height').value)
    let weight = parseFloat(document.getElementById('weight').value)
    let result = document.getElementById('output')
    let BMI;
    let category;
 
    if (isNaN(height) || isNaN(weight)) {
        // alert("please enter the value first!")
        // or
        result.style.transition = 'all 0.5s ease';
        result.innerHTML = "please enter the value first!"
        return;
    }else{
        let height2 = (height/100)**2;
        console.log(height2);
        
        BMI = (weight/(height2)).toFixed(2)
    }

        if (BMI <= 18.5) {
            // category = 'UNDER WEIGHT'
            category = 'MUTTHAL'
        }else if (BMI > 18.5 && BMI <= 24.9) {
            // category = 'NORMAL'
            category = 'TU THIK HAI'
        }else if (BMI >= 25 && BMI <= 29.5 ) {
            // category = 'OVER WEIGHT'
            category = 'BKL MOTE HAI TU'

        }else if (BMI >=30 && BMI <= 34.9) {
            category = 'BKL BHAINSH HAI KYA TU'
            // category = 'OBESE'
        }else if (BMI >35 ) {
            category = 'EXTREMELY OBESE'
            caltegory
        }

    // result.innerHTML = `Your BMI is ${BMI} and you are ${category}`
    result.innerHTML = `Your BMI is ${BMI} and  ${category}`
    

}


