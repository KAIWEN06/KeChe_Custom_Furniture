function openModal(productId) {
    var modal = document.getElementById("productModal");
    var image = document.getElementById("zoomedImage");
    var name = document.getElementById("productName");
    var size = document.getElementById("productSize");
    var price = document.getElementById("productPrice");
    var file3D = document.getElementById("product3D");

    // Update content berdasarkan ID produk
    if (productId === 'product1') {
        image.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc0w7w9UpXzfM8yis330O4ZWRnjLvOtx8Aq0Cn2I6O0dog63AEuD0qg_OOi-E5F7q0LG14lhXvkkuuvzZunm9P5GU09QkinpQrb_2eaG44EuQJ_YqzouIhgE_34NyAeQr6SDN2iCa02EvuF-CFEmJOTGp2Mh9PeGLkBoQwL1qHdn6BpgbLGbNEAOL5DrRt/s320/1000006711.jpg';
        name.textContent = 'Lemari Pakaian';
        size.textContent = '100x50x30 cm';
        price.textContent = 'Rp 1.500.000';
        file3D.href = 'https://3dwarehouse.sketchup.com/model/445f6ce0-cabf-4c7f-bb65-6dfab2955885/3D-wardrobe';  // Ganti dengan URL file 3D produk
    } else if (productId === 'product2') {
        image.src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggaWn37Iikm1krr32hKvwUD4dy8zZU9soKYL3sCII7XcEVkLAskPDdngvs4BfKni3Bkm90F0zt9ebiP9UMEaA28GvUN_e3ziooqLYnZj-rm2qYqABTray7wj4pNplydzW6W2hbs36KiSbNpYpBcltWkx_dAVtxspd3ieDs9yPhO5g-UprJbd0IYkUnxkRS/s320/1000006545.jpg';
        name.textContent = 'Nama Produk 2';
        size.textContent = '120x60x40 cm';
        price.textContent = 'Rp 2.000.000';
        file3D.href ='file:///C:/Users/Kevin/Documents/CODING/furniture-portfolio/TES.html';  // Ganti dengan URL file 3D produk
    }

    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("productModal");
    modal.style.display = "none";
}
