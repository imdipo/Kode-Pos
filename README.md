# Website Pencari Kode Pos Indonesia

Aplikasi web sederhana yang memungkinkan pengguna mencari kode pos berdasarkan provinsi di Indonesia. Website ini dibuat dengan HTML, CSS, dan JavaScript murni tanpa framework tambahan.

## Fitur

- Daftar 34 provinsi di Indonesia yang dapat diklik
- Pencarian provinsi dengan filter real-time
- Tampilan kode pos untuk kota/kabupaten di setiap provinsi
- Desain responsif untuk berbagai ukuran layar
- Tombol "Clear" untuk menghapus pencarian

## Struktur Kode dan Logika

### 1. Struktur Data

```javascript
const kodePosByProvinsi = {
    'Aceh': {
        'Banda Aceh': '23111-23239',
        'Lhokseumawe': '24351-24375',
        // ...kota/kabupaten lainnya
    },
    'Sumatera Utara': {
        'Medan': '20111-20239',
        // ...kota/kabupaten lainnya
    },
    // ...provinsi lainnya
};
```

Data kode pos disimpan dalam struktur objek bersarang (nested object) dengan:
- Level pertama: provinsi sebagai kunci
- Level kedua: kota/kabupaten sebagai kunci dan rentang kode pos sebagai nilai

Struktur ini dipilih untuk memudahkan akses data berdasarkan hierarki geografis (provinsi → kota/kabupaten → kode pos) dan mempercepat akses data melalui pencarian kunci (O(1) complexity).

### 2. Inisialisasi Daftar Provinsi

```javascript
function initProvinsiList() {
    const provinsiList = document.getElementById('provinsi-list');
    provinsiList.innerHTML = '';
    
    Object.keys(kodePosByProvinsi).sort().forEach(provinsi => {
        const provinsiItem = document.createElement('div');
        provinsiItem.className = 'provinsi-item';
        provinsiItem.textContent = provinsi;
        provinsiItem.onclick = () => showKodePos(provinsi);
        provinsiList.appendChild(provinsiItem);
    });
}
```

**Logika:**
1. Mengambil elemen container untuk daftar provinsi (`provinsi-list`)
2. Mengosongkan container untuk menghindari duplikasi saat reinitialisasi
3. Mendapatkan semua nama provinsi dengan `Object.keys()` dan mengurutkannya dengan `sort()`
4. Untuk setiap provinsi:
   - Membuat elemen div baru
   - Menetapkan class untuk styling
   - Menetapkan nama provinsi sebagai teks
   - Menambahkan event listener `onclick` yang akan memanggil fungsi `showKodePos()`
   - Menambahkan elemen tersebut ke container

### 3. Filter Provinsi (Pencarian)

```javascript
function filterProvinsi() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const provinsiItems = document.querySelectorAll('.provinsi-item');
    
    provinsiItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(searchInput)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
```

**Logika:**
1. Mendapatkan nilai dari input pencarian dan mengubahnya menjadi lowercase untuk pencarian case-insensitive
2. Mendapatkan semua elemen provinsi yang sudah dibuat
3. Untuk setiap elemen provinsi:
   - Memeriksa apakah teks provinsi (juga diubah ke lowercase) mengandung teks pencarian
   - Jika ya, tampilkan elemen tersebut (display: block)
   - Jika tidak, sembunyikan elemen tersebut (display: none)

Pencarian menggunakan metode `includes()` yang memungkinkan pencocokan sebagian (substring matching), sehingga pengguna tidak perlu mengetikkan nama provinsi secara lengkap.

### 4. Menampilkan Kode Pos

```javascript
function showKodePos(provinsi) {
    const resultDiv = document.getElementById('result');
    const resultTitle = document.getElementById('result-title');
    const kodePosList = document.getElementById('kode-pos-list');
    
    resultTitle.textContent = `Kode Pos Provinsi ${provinsi}`;
    kodePosList.innerHTML = '';
    
    const kabKotaList = kodePosByProvinsi[provinsi];
    
    for (const kabKota in kabKotaList) {
        const kodePos = kabKotaList[kabKota];
        const kodeposItem = document.createElement('div');
        kodeposItem.className = 'kode-pos-item';
        
        const kabKotaSpan = document.createElement('span');
        kabKotaSpan.textContent = kabKota;
        
        const kodePosSpan = document.createElement('span');
        kodePosSpan.textContent = kodePos;
        
        kodeposItem.appendChild(kabKotaSpan);
        kodeposItem.appendChild(kodePosSpan);
        kodePosList.appendChild(kodeposItem);
    }
    
    resultDiv.style.display = 'block';
}
```

**Logika:**
1. Mengambil elemen-elemen DOM yang diperlukan untuk menampilkan hasil
2. Menetapkan judul hasil dengan nama provinsi yang dipilih
3. Mengosongkan daftar kode pos untuk menghindari penumpukan data
4. Mengambil daftar kota/kabupaten untuk provinsi yang dipilih dari struktur data
5. Untuk setiap kota/kabupaten:
   - Membuat elemen div baru dengan class untuk styling
   - Membuat dua elemen span: satu untuk nama kota/kabupaten dan satu lagi untuk kode pos
   - Menetapkan teks yang sesuai untuk masing-masing span
   - Menambahkan span ke dalam div kode pos
   - Menambahkan div kode pos ke dalam daftar
6. Menampilkan container hasil (yang sebelumnya tersembunyi) dengan mengubah style display

### 5. Penanganan Event dan Inisialisasi

```javascript
// Clear pencarian
function clearSearch() {
    document.getElementById('search-input').value = '';
    filterProvinsi();
}

// Inisialisasi halaman
window.onload = function() {
    initProvinsiList();
};
```

**Logika:**
1. Fungsi `clearSearch()`:
   - Mengosongkan input pencarian
   - Memanggil `filterProvinsi()` untuk memperbarui tampilan (menampilkan semua provinsi)
2. Event `window.onload`:
   - Dipanggil saat halaman selesai dimuat
   - Menginisialisasi daftar provinsi melalui `initProvinsiList()`

## Optimasi Performa

1. **Event Delegation**: Tidak digunakan dalam implementasi ini, tetapi bisa ditambahkan untuk meningkatkan performa pada daftar yang sangat besar.

2. **Throttling/Debouncing**: Untuk memperbaiki performa pencarian, fungsi `filterProvinsi()` bisa dioptimalkan dengan teknik debouncing agar tidak dipanggil terlalu sering saat pengguna mengetik cepat.

3. **Caching DOM Queries**: Beberapa query DOM berulang bisa disimpan dalam variabel untuk meningkatkan performa.
