const user = {
    name: 'Fian',
    age: 22,
    hasMoney: 10
}

const movie = {
    name: 'Siksa Kubur',
    ticketPrice: 20000,
    minAge: 100,
}

function ticketValidation(user, movie){
    const isAdult = user.age >= movie.minAge;
    const worthiness = user.hasMoney >= movie.ticketPrice;
    if (isAdult && worthiness) return console.log('Selamat '+user.name+', kamu berhasil membeli tiket '+movie.name+' dengan harga '+movie.ticketPrice);
    if(!isAdult && !worthiness) return console.log('Maaf, anda gagal membeli tiket karena saldo anda kurang!');
    if(!isAdult) return console.log('Maaf, anda tidak bisa membeli tiket karena belum cukup umur');
    if(!worthiness) return console.log('Maaf, anda tidak bisa membeli tiket karena saldo anda kurang!');
}

ticketValidation(user, movie);