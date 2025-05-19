let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid height ${weight}`
    } else {
       let bmi = (weight / ((height * height)/ 1000)).toFixed(2)
       // show the result 
       result.innerHTML = `<span>${bmi}</span>`
    }
})