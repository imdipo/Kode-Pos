// Database kode pos Indonesia (sample data)
const kodePosByProvinsi = {
    'Aceh': {
        'Banda Aceh': '23111-23239',
        'Lhokseumawe': '24351-24375',
        'Langsa': '24411-24451',
        'Sabang': '24311-24317',
        'Subulussalam': '24881-24891'
    },
    'Sumatera Utara': {
        'Medan': '20111-20239',
        'Binjai': '20711-20721',
        'Pematangsiantar': '21111-21139',
        'Tebing Tinggi': '20611-20633',
        'Padang Sidempuan': '22711-22733'
    },
    'Sumatera Barat': {
        'Padang': '25111-25239',
        'Bukittinggi': '26111-26139',
        'Payakumbuh': '26211-26231',
        'Solok': '27311-27326',
        'Pariaman': '25511-25529'
    },
    'Riau': {
        'Pekanbaru': '28111-28297',
        'Dumai': '28811-28826',
        'Bengkalis': '28711-28719',
        'Siak': '28671-28685',
        'Rokan Hilir': '28991-28995'
    },
    'Kepulauan Riau': {
        'Tanjung Pinang': '29111-29125',
        'Batam': '29431-29484',
        'Bintan': '29151-29157',
        'Karimun': '29161-29168',
        'Lingga': '29871-29877'
    },
    'Jambi': {
        'Jambi': '36111-36139',
        'Sungai Penuh': '37111-37113',
        'Muaro Jambi': '36651-36663',
        'Batanghari': '36511-36517',
        'Tebo': '37511-37571'
    },
    'Sumatera Selatan': {
        'Palembang': '30111-30151',
        'Prabumulih': '31111-31147',
        'Pagar Alam': '31511-31553',
        'Lubuklinggau': '31611-31651',
        'Banyuasin': '30911-30981'
    },
    'Bangka Belitung': {
        'Pangkal Pinang': '33111-33137',
        'Bangka': '33211-33261',
        'Bangka Tengah': '33312-33318',
        'Bangka Selatan': '33711-33716',
        'Belitung': '33411-33417'
    },
    'Bengkulu': {
        'Bengkulu': '38111-38229',
        'Rejang Lebong': '39111-39119',
        'Seluma': '38511-38576',
        'Kaur': '38911-38956',
        'Bengkulu Utara': '38611-38619'
    },
    'Lampung': {
        'Bandar Lampung': '35111-35228',
        'Metro': '34111-34128',
        'Lampung Selatan': '35511-35595',
        'Lampung Tengah': '34111-34197',
        'Lampung Utara': '34511-34581'
    },
    'Banten': {
        'Serang': '42111-42189',
        'Cilegon': '42411-42445',
        'Tangerang': '15111-15720',
        'Tangerang Selatan': '15310-15332',
        'Pandeglang': '42211-42252'
    },
    'DKI Jakarta': {
        'Jakarta Pusat': '10110-10570',
        'Jakarta Utara': '14110-14450',
        'Jakarta Barat': '11110-11830',
        'Jakarta Selatan': '12110-12870',
        'Jakarta Timur': '13110-13950',
        'Kepulauan Seribu': '14510-14530'
    },
    'Jawa Barat': {
        'Bandung': '40111-40619',
        'Bogor': '16111-16159',
        'Depok': '16411-16517',
        'Bekasi': '17111-17433',
        'Tasikmalaya': '46111-46196',
        'Cirebon': '45111-45157'
    },
    'Jawa Tengah': {
        'Semarang': '50111-50276',
        'Solo (Surakarta)': '57111-57171',
        'Magelang': '56111-56172',
        'Pekalongan': '51111-51145',
        'Tegal': '52111-52147',
        'Salatiga': '50711-50743'
    },
    'DI Yogyakarta': {
        'Yogyakarta': '55111-55284',
        'Sleman': '55511-55583',
        'Bantul': '55711-55783',
        'Kulon Progo': '55611-55673',
        'Gunung Kidul': '55811-55883'
    },
    'Jawa Timur': {
        'Surabaya': '60111-60299',
        'Malang': '65111-65172',
        'Kediri': '64111-64139',
        'Madiun': '63111-63138',
        'Mojokerto': '61311-61364',
        'Batu': '65311-65349'
    },
    'Bali': {
        'Denpasar': '80111-80239',
        'Badung': '80351-80363',
        'Gianyar': '80511-80582',
        'Tabanan': '82111-82191',
        'Singaraja (Buleleng)': '81111-81173'
    },
    'Nusa Tenggara Barat': {
        'Mataram': '83111-83239',
        'Bima': '84111-84119',
        'Sumbawa': '84311-84373',
        'Lombok Barat': '83361-83363',
        'Lombok Tengah': '83511-83573'
    },
    'Nusa Tenggara Timur': {
        'Kupang': '85111-85239',
        'Ende': '86211-86271',
        'Maumere': '86111-86183',
        'Labuan Bajo': '86554-86581',
        'Ruteng': '86511-86571'
    },
    'Kalimantan Barat': {
        'Pontianak': '78111-78239',
        'Singkawang': '79111-79123',
        'Ketapang': '78811-78854',
        'Sintang': '78611-78661',
        'Sambas': '79411-79483'
    },
    'Kalimantan Tengah': {
        'Palangka Raya': '73111-73231',
        'Sampit': '74311-74373',
        'Pangkalan Bun': '74111-74183',
        'Kuala Kapuas': '73511-73583',
        'Muara Teweh': '73811-73871'
    },
    'Kalimantan Selatan': {
        'Banjarmasin': '70111-70249',
        'Banjarbaru': '70711-70733',
        'Martapura': '70611-70681',
        'Kandangan': '71211-71281',
        'Amuntai': '71411-71471'
    },
    'Kalimantan Timur': {
        'Samarinda': '75111-75131',
        'Balikpapan': '76111-76136',
        'Bontang': '75311-75315',
        'Tenggarong': '75511-75561',
        'Sangatta': '75611-75683'
    },
    'Kalimantan Utara': {
        'Tanjung Selor': '77211-77271',
        'Tarakan': '77111-77123',
        'Malinau': '77554-77562',
        'Nunukan': '77482-77493',
        'Tanjung Palas': '77372-77382'
    },
    'Sulawesi Utara': {
        'Manado': '95111-95163',
        'Bitung': '95511-95561',
        'Tomohon': '95411-95442',
        'Kotamobagu': '95711-95782',
        'Tahuna': '95811-95881'
    },
    'Gorontalo': {
        'Gorontalo': '96111-96139',
        'Limboto': '96211-96276',
        'Kwandang': '96311-96365',
        'Suwawa': '96583-96585',
        'Tilamuta': '96471-96474'
    },
    'Sulawesi Tengah': {
        'Palu': '94111-94148',
        'Luwuk': '94711-94752',
        'Toli-Toli': '94511-94563',
        'Poso': '94611-94652',
        'Buol': '94564-94565'
    },
    'Sulawesi Barat': {
        'Mamuju': '91511-91563',
        'Majene': '91411-91414',
        'Polewali Mandar': '91311-91355',
        'Mamasa': '91373-91382',
        'Pasangkayu': '91571-91573'
    },
    'Sulawesi Selatan': {
        'Makassar': '90111-90245',
        'Parepare': '91111-91132',
        'Palopo': '91911-91928',
        'Bulukumba': '92511-92571',
        'Watampone': '92711-92774'
    },
    'Sulawesi Tenggara': {
        'Kendari': '93111-93237',
        'Bau-Bau': '93711-93785',
        'Kolaka': '93511-93564',
        'Raha': '93611-93661',
        'Unaaha': '93411-93462'
    },
    'Maluku': {
        'Ambon': '97111-97234',
        'Tual': '97611-97664',
        'Masohi': '97511-97581',
        'Namlea': '97571-97578',
        'Saumlaki': '97762-97764'
    },
    'Maluku Utara': {
        'Ternate': '97711-97751',
        'Tidore': '97811-97862',
        'Jailolo': '97752-97754',
        'Tobelo': '97861-97865',
        'Labuha': '97791-97793'
    },
    'Papua': {
        'Jayapura': '99111-99239',
        'Merauke': '99611-99663',
        'Biak': '98151-98158',
        'Timika': '99910-99912',
        'Wamena': '99511-99562'
    },
    'Papua Barat': {
        'Manokwari': '98311-98315',
        'Sorong': '98411-98419',
        'Fakfak': '98611-98617',
        'Kaimana': '98671-98672',
        'Raja Ampat': '98481-98484'
    }
};

// Inisialisasi daftar provinsi
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

// Filter provinsi berdasarkan input pencarian
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

// Clear pencarian
function clearSearch() {
    document.getElementById('search-input').value = '';
    filterProvinsi();
}

// Tampilkan kode pos untuk provinsi yang dipilih
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

// Inisialisasi halaman
window.onload = function() {
    initProvinsiList();
};