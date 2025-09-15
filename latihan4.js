const prompt = require('prompt-sync')();

let produk = [
    { nama: "laptop", harga: 120000000 },
    { nama: "HP", harga: 3500000 },
    { nama: "tablet", harga: 5000000 },
    { nama: "smartwatch", harga: 1500000 },
];

console.log("\ndaftar produk:");
produk.forEach(pdk => {
    console.log(`${pdk.nama} - harga: ${pdk.harga}`);
});

while (true) {
    let namaCari = prompt("\nMasukkan nama produk yang dicari (ketik 'exit' untuk keluar): ");
    if (namaCari.toLowerCase() === 'exit') {
        console.log("Terima kasih, program selesai.");
        break;
    }

    // Cari produk dengan pencocokan kata kunci sebagian (case insensitive)
    let hasilCari = produk.filter(pdk => pdk.nama.toLowerCase().includes(namaCari.toLowerCase()));

    if (hasilCari.length > 0) {
        console.log("\nProduk ditemukan:");
        hasilCari.forEach(pdk => {
            console.log(`- ${pdk.nama} - harga: ${pdk.harga}`);
        });
    } else {
        console.log("\nProduk tidak ditemukan.");
    }
}
