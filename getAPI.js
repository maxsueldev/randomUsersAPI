async function getDataUsers() {
    const response = await fetch('https://randomuser.me/api/?results=20');
    return response.json();
}

getDataUsers().then(data => {
    const dadosUsers = data.results;
    // console.table(dadosUsers);

    // Apenas mulheres acima de 18 anos (Filter)
    const femaleLegalAge = dadosUsers.filter(person => person.gender === 'female' && person.dob.age >= 18);
    // console.table(femaleLegalAge);

    // Soma de todas as idades dessas mulheres (Reduce)
    const sumFemaleAges = femaleLegalAge.reduce((acc, val) => acc + val.dob.age, 0); 
    // console.table(sumFemaleAges);

    // Todos que moram nos Estados Unidos (Filter)
    const unitedStatesCountry = dadosUsers.filter(person => person.location.country === 'United States');
    // console.table(unitedStatesCountry);

    const people = [];
    for(let p of dadosUsers) {
        people.push({
            Nome: `${p.name.first} ${p.name.last}`,
            Idade: p.dob.age,
            Sexo: p.gender
        });
    }

    console.table(people);
});
