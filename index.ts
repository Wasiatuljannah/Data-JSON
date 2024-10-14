let data = [
	{
		id: 1,
		name: 'John Doe',
		age: 30,
		address: '123 Main St',
		city: 'New York',
		phone: '555-1234',
	},
	{
		id: 2,
		name: 'Jane Smith',
		age: 25,
		address: '456 Oak Ave',
		city: 'Los Angeles',
		phone: '555-5678',
	},
	{
		id: 3,
		name: 'Michael Johnson',
		age: 40,
		address: '789 Pine Rd',
		city: 'Chicago',
		phone: '555-8765',
	},
	{
		id: 4,
		name: 'Emily Davis',
		age: 35,
		address: '321 Cedar St',
		city: 'New York',
		phone: '555-4321',
	},
];

//TODO 1 : dapatkan semua data
//TODO 2 : dapatkan data dengan nama tertentu
//TODO 3 : dapatkan data dengan alamat New York
//TODO 4 : dapatkan data dengan umur >= 30


// TODO 1 : Dapatkan semua data
const allData = data;
console.log("All Data:", allData);

// TODO 2 : Dapatkan data dengan nama tertentu (contoh: 'Jane Smith')
const getByName = (name) => data.filter(person => person.name === name);
console.log("Data by Name (Jane Smith):", getByName('Jane Smith'));

// TODO 3 : Dapatkan data dengan alamat di New York
const getByCity = (city) => data.filter(person => person.city === city);
console.log("Data in New York:", getByCity('New York'));

// TODO 4 : Dapatkan data dengan umur >= 30
const getByAge = (age) => data.filter(person => person.age >= age);
console.log("Data with Age >= 30:", getByAge(30));
