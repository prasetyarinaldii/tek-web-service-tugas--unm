function allMenu() {
   return $.getJSON('data/pizza.json', function(data) {
        const menu = data.menu;
        $.each(menu, function(i, val) {
            $('#daftar-menu').append(`
                <div class="col-md-4">
                    <div class="card mb-3">
                    <img src="data/img/menu/${val.gambar}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${val.nama}</h5>
                        <p class="card-text">${val.deskripsi}</p>
                        <h5 class="card-title">Rp. ${val.harga}</h5>
                        <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                    </div>
                    </div>
                </div>
            `)
        })
    });
}


allMenu()

$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    const kategori = $(this).html();
    $('h1').html(kategori);
    let flag = false;
    if (kategori == 'All Menu') {
        flag = true;
    }

    $.getJSON('data/pizza.json', function(data) {
        const menu = data.menu
        let content = '';

        $.each(menu, function(i, val) {
            if (val.kategori == kategori.toLowerCase()) {
                content += `
                    <div class="col-md-4">
                        <div class="card mb-3">
                        <img src="data/img/menu/${val.gambar}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${val.nama}</h5>
                            <p class="card-text">${val.deskripsi}</p>
                            <h5 class="card-title">Rp. ${val.harga}</h5>
                            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                        </div>
                        </div>
                    </div>
                `
            }
        })
        
        if (flag) {
            content = allMenu()
        }

        $('#daftar-menu').html(content); 
    })
});