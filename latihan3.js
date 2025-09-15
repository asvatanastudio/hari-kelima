const prompt = require('prompt-sync')();

let mahasiswa = [
    { nama: "budi", nilai: 85 },
    { nama: "siti", nilai: 92 },
    { nama: "andi", nilai: 58 },
    { nama: "dewi", nilai: 85 },
];

// 1. Data mahasiswa
console.log("\nDaftar nilai mahasiswa:");
mahasiswa.forEach(mhs => {
    console.log(`${mhs.nama} - nilai: ${mhs.nilai}`);
});

// 2. Array mahasiswa baru
let daftarNama = mahasiswa.map(mhs => mhs.nama);
console.log("\nDaftar nama mahasiswa:");
console.log(daftarNama.join(", "));

// 3. Urutkan berdasarkan nilai tertinggi
let urutNilai = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);
console.log("\nUrutkan berdasarkan nilai (tertinggi-terendah):");
urutNilai.forEach(mhs => {
    console.log(`${mhs.nama} - nilai: ${mhs.nilai}`);
});

// 4. Cari mahasiswa berdasarkan nama
let namaCari = prompt("\nMasukkan nama mahasiswa yang dicari: ");
let cariMhs = mahasiswa.find(mhs => mhs.nama.toLowerCase() === namaCari.toLowerCase());

if (cariMhs) {
    console.log(`\nMahasiswa ditemukan: ${cariMhs.nama} - nilai: ${cariMhs.nilai}`);
} else {
    console.log("\nMahasiswa tidak ditemukan");
}

// 5. Tambahkan fitur lulus dan tidak lulus
console.log("\nStatus kelulusan mahasiswa:");
mahasiswa.forEach(mhs => {
    let status = mhs.nilai >= 60 ? "Lulus" : "Tidak Lulus";
    console.log(`${mhs.nama} - nilai: ${mhs.nilai} - ${status}`);
});