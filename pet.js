const petIndex = document.getElementById('petview')
const ownerIndex = document.getElementById('ownerList')

function getPets() {

    axios.get('http://localhost:9966/petclinic/api/pets')

        .then(res => {
            res.data.forEach(pet => {
                const petDiv = document.createElement('div');
                petIndex.appendChild(petDiv);

                const name = document.createElement('h3');
                name.innerText = pet.name;
                petDiv.appendChild(name);

                const birthDate = document.createElement('h4');
                birthDate.innerText = pet.birthDate;
                petDiv.appendChild(birthDate);

                const ownerName = document.createElement('h5');
                ownerName.innerText = pet.owner.firstName;
                petDiv.appendChild(ownerName);

                const ownerLastName = document.createElement('h5');
                ownerLastName.innerText = pet.owner.lastName;
                petDiv.appendChild(ownerLastName);

                pet.visits.forEach(visit => {
                    const visitDescription = document.createElement('div');
                    visitDescription.innerText = visit.description;
                    petDiv.appendChild(visitDescription);
                })

            })
        })
        .catch(err => console.log(err))
}

function getOwners() {
    axios.get('http://localhost:9966/petclinic/api/owners')
        .then(res => {
            res.data.forEach(owner => {
                const ownerDiv = document.createElement('div');
                ownerIndex.appendChild(ownerDiv);

                const name = document.createElement('h3');
                name.innerText = owner.firstName;
                ownerDiv.appendChild(name);

                const LastName = document.createElement('h3');
                LastName.innerText = owner.lastName;
                ownerDiv.appendChild(LastName);

                const address = document.createElement('h6');
                address.innerText = owner.address;
                ownerDiv.appendChild(address);

            })
        })
}

getPets();
getOwners();
   (function () {
    document.getElementById("ownerForm").addEventListener('submit', function(event) {
        event.preventDefault();
        const data = {};
        for (let input of this) {
            data[input.name] = input.value;
        }
        console.log(data);

        axios.post('http://localhost:9966/petclinic/api/owners', data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
       

    }) 
} ) ();