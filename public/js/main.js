const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');


const getInformation = async(event) => {
    event.preventDefault();


    let cityValue = cityName.value
    if (cityValue === "") {
        city_name.innerText = `Please Enter the City Name.`
        datahide.classList.add('data_hide');

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=24aee4d5027c6eb16417f07b0e692dc9`
            const response = await fetch(url)
            const data = await response.json();
            const arrData = [data]
                // console.log(arrData)
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp;
            const tempM = arrData[0].weather[0].main;
            console.log(tempM)

            //condition to check sunny or cloudy
            if (tempM == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: :#f7bf18;'></i>";
            } else if (tempM == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #ffffff;'></i>";
            } else if (tempM == "Rain") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud-rain' style='color: #838a92;'></i>";
            } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color:#f7bf18;'></i>";

            }

            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerText = `Please Enter the city Name Properly`
            datahide.classList.add('data_hide');

        }
    }
}
submitBtn.addEventListener('click', getInformation)