let data = [
	{
	  id: 1,
	  name: 'Mawar',
	  color: 'Merah',
	  stock: 50,
	  price: 5000,
	},
	{
	  id: 2,
	  name: 'Lili',
	  color: 'Putih',
	  stock: 30,
	  price: 3000,
	},
	{
	  id: 3,
	  name: 'Bunga Matahari',
	  color: 'Kuning',
	  stock: 20,
	  price: 4000,
	},
	{
	  id: 4,
	  name: 'Daisy',
	  color: 'Pink',
	  stock: 40,
	  price: 3500,
	},
  ];

//TODO 1 : dapatkan semua data
//TODO 2 : dapatkan data dengan nama tertentu
//TODO 3 : dapatkan data dengan warna tertentu
//TODO 4 : dapatkan data dengan stok >= 30


// TODO 1 : Dapatkan semua data
console.log("Semua data dalam format tabel:");
console.table(data);

// TODO 2 : Dapatkan data dengan nama tertentu
const getDataByName = (name) => data.find(flower => flower.name === name);
console.log("Data dengan nama Mawar:", getDataByName('Mawar'));

// TODO 3 : Dapatkan data dengan warna tertentu
const getDataByColor = (color) => data.filter(flower => flower.color === color);
console.log("Data dengan warna Merah:", getDataByColor('Merah'));

// TODO 4 : Dapatkan data dengan stok >= 30
const getDataByStock = (stock) => data.filter(flower => flower.stock >= stock);
console.log("Data dengan stok >= 30:", getDataByStock(30));