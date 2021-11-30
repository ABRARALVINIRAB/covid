const loadData = () => {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;


    inputField.value = '';
    const none = document.getElementById('none')
    none.classList.remove('d-none');
    const url = (`https://api.covid19api.com/total/country/${inputFieldValue}`)
    fetch(url)
        .then(res => res.json())
        .then(data => update(data))
}
const update = (dates) => {
    console.log(dates)
    const none = document.getElementById('none')
    none.classList.add('d-none');

    const country = dates[Object.keys(dates)[Object.keys(dates).length - 1]];
    console.log(country);
    const parent = document.getElementById('parent');
    parent.textContent = '';
    if (dates.message == "Not Found") {
        const error = document.getElementById('error');
        error.innerText = 'Please input a valid country name';

    }
    /*  else if (dates.message !== "Not Found") {
         const error = document.getElementById('error');
         error.innerText = ' ';
     } */
    else {
        const error = document.getElementById('error');
        error.innerText = '';
        const div = document.createElement('div');
        const recovered = `${country.Confirmed}` - `${country.Deaths}`;
        div.innerHTML = `
    
    <div class=" text-success text-center ">
            <h4 class="shadow-lg p-3 mb-2 bg-body rounded w-50 mx-auto">Country : <span class="text-danger">${country.Country}</span> </h4>
          
            <h4 class="shadow-lg p-3 mb-2 bg-body rounded w-50 mx-auto">Confirmed Cases : <span class="text-danger">${country.Confirmed}</span> </h4>
            
            <h4 class="shadow-lg p-3 mb-2 bg-body rounded w-50 mx-auto">Total Deaths : <span class="text-danger">${country.Deaths}</span> </h4>
            <h4 class="shadow-lg p-3 mb-2 bg-body rounded w-50 mx-auto">Total Recovered :  <span class="text-danger">${recovered}</span> </h4>
            <h4 class="shadow-lg p-3 mb-2 bg-body rounded w-50 mx-auto">Last Update : <span class="text-danger">${country.Date.slice(0, 10)}</span> </h4>
        </div>
    
    
    
    `
        parent.appendChild(div);


    }



}


document.getElementById("input-field")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("button-addon2").click();
        }
    });