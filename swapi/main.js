const getResidentsButton = document.getElementById('button1')




function logClick() {
    console.log("button clicked!")
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((response) => {

        console.log(response.data.results)
    })


}


getResidentsButton.addEventListener('click', logClick)
