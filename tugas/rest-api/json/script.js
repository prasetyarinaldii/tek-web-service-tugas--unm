// const mahasiswa = {
//     nama: "Prasetya Rinaldi",
//     umur: 29,
//     nim: "11211763",
//     lulus: true,
//     hoby: [
//         "coding",
//         "gaming"
//     ],
//     pembimbing: {
//         "pembimbing1": "Ibu Fatmawati",
//         "pembimbing2": "Ibu Fatmawati2"
//     }
// }

// const mahasiswaStr = JSON.stringify(mahasiswa)

// console.log(mahasiswaStr);


// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mhs = JSON.parse(this.responseText);
//         console.log(mhs);
//     }
// }

// xhr.open('GET', 'latihan.json', true);
// xhr.send();

$.getJSON('latihan.json', function(data) {
    console.log(data);
})