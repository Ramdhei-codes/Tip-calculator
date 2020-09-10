const billAmount = document.getElementById('billAmount')
const serviceQuality = document.getElementById('serviceQuality')
const peopleSharing = document.getElementById('peopleSharing')
const button = document.getElementById('button')

const serviceToNumber = Quality => {
    switch (Quality.value) {
        case "Excellent":
            return 0.15
        case "Good":
            return 0.1
        case "Regular":
            return 0.07
        case "Bad":
            return 0
    }
}


function calculate(){
    if (serviceQuality.value === "Choose an option" || billAmount.value === "" || peopleSharing.value === "") {
        showWarning()
    } else {
        let bill = Number(billAmount.value)
        let people = Number(peopleSharing.value)
        let service = serviceToNumber(serviceQuality)
    
        let tipPerPerson = ((bill * service)/people).toFixed(2)
        let billPerPerson = ((bill + (bill * service))/people).toFixed(2)
        
        showResults(tipPerPerson, billPerPerson)
    }
}

const showResults = (tipPP, billPP) => {
    swal({
        title: 'Bill and tip per person: ',
        text: `Bill: $${billPP}
                Tip: $${tipPP}`,

        //title: 'Tip per person: ',
        //text: `$${tipPP}`
    })
}

const showWarning = () => {
    swal({
        title: 'Error',
        icon: 'error',
        text: 'Incomplete data'
    })
}