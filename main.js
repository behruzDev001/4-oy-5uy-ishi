// function teskariMatn(matn) {
//     return matn.split('').reverse().join('');
// }

// let matn = "Teskari Sozlar";
// console.log(teskariMatn(matn));


// function sozlarSoni(gap) {
//     return gap.split(' ').filter(soz => soz !== '').length;
// }

// let gap = "salom js.";  
// console.log(sozlarSoni(gap));




// let userName = prompt("Ismingizni kiriting:");

// let yourDateInput = prompt("Tug'ilgan kuningizni kiriting (YYYY-MM-DD HH:MM):");
// let friendDateInput = prompt("Do'stingizning tug'ilgan kunini kiriting (YYYY-MM-DD HH:MM):");


// let yourDate = new Date(yourDateInput);
// let friendDate = new Date(friendDateInput);


// let diffTime = Math.abs(yourDate - friendDate);

// let diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
// let diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
// let diffDays = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
// let diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// alert(`${userName}, farq: ${diffYears} yil, ${diffMonths} oy, ${diffDays} kun, ${diffHours} soat.`);
