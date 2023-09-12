let alien = {
    name : 'Samuel',
    tech : 'JS',
    laptop : {
    cpu : '18',
    ram : 4,
    brand : 'Asus'
   }

}

for(let key in alien)
{
    console.log(key , alien[key]);

}