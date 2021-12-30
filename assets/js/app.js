"use strict";


$.ajax({
    url: '/home/assets/js/data.json',
    method: 'GET',
    success: (response => {
        // console.log(response);
        // "name": "Grand Tabebuya",
        // "type": "56LB dan 80LT",
        // "luas_bangunan": 56,
        // "luas_tanah": 80,
        // "lokasi": "Cimanggis",
        // "tahun": "2021",
        // "lantai": 2
        var x;
        for (x = 0; x < response.length; x++) {
            var name = response[x].name;
            var type = response[x].type;
            var lokasi = response[x].lokasi;
            var lantai = response[x].lantai;
            var tahun = response[x].tahun;
            var img = response[x].img;

            $(".wrap-home").append(`
                <div class="wrap__card" id="${x}" data-content="${x}">
                    <div class="card_">
                        <img src="${img}" alt="">
                    </div>
                    <div class="content_ text-center">
                        <div class="content__title">${name}</div>
                        <div class="content__p">
                            <div class="type">Type: ${type}</div>
                            <div class="year">Mulai: ${mulai}</div>
                            <div class="location">Location: ${lokasi}</div>
                        </div>
                    </div>
                </div>
                `)
        }
        $(".wrap__card").hover(function() {
            var id_ = $(this).attr('data-content')
                // console.log(id_);
                // $(this).css("background-color", "yellow");
            $('#check-desc').html(`
                    <div class="detail">
                        <div class="detail__title"> ${response[id_].name}
                        </div>
                        <div class="detail__p">
                            <div class="type">Tipe: ${response[id_].type}</div>
                            <div class="year">Mulai: ${response[id_].mulai}</div>
                            <div class="location">Lokasi: ${response[id_].lokasi}</div>
                        </div>
                    </div>
                `)
        }, function() {
            $('#check-desc').html('')
        });

        //click
        $(".wrap__card").click(function() {
            var id_ = $(this).attr('data-content');
            var params = { page: id_ };
            var url = 'detail.html?';
            var str = jQuery.param(params);
            var res = url + str;
            window.location.href = res
        })

        // var field = 'q';
        // var url = window.location.href;

        var url_string = window.location.href //window.location.href
        var url = new URL(url_string);
        var c = url.searchParams.get("page");
        // console.log(c);
        if (window.location.pathname == '/home/detail.html') {
            var showtimes = response[c].fasilitas;
            var fasilitas = showtimes.join(', ');
            $(".left_").html(`
                <div class="backbutton" onclick="history.back()">< Kembali</div>
                <h1>${response[c].name}</h1>
                <p class="text-left">${response[c].full_desc}</p>
                <h3>Rp${response[c].harga}</h3>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Kategori</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Luas Tanah</td>
                            <td>${response[c].luas_tanah}m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td>Luas Bangunan</td>
                            <td>${response[c].luas_bangunan}m<sup>2</sup></td>
                        </tr>
                        <tr>
                            <td>Kamar tidur</td>
                            <td>${response[c].kamar_tidur}</td>
                        </tr>
                        <tr>
                            <td>Kamar Mandi</td>
                            <td>${response[c].kamar_mandi}</td>
                        </tr>
                        <tr>
                            <td>Lantai</td>
                            <td>${response[c].lantai}</td>
                        </tr>
                        <tr>
                            <td>Lokasi</td>
                            <td>${response[c].lokasi}</td>
                        </tr>
                        <tr>
                            <td>Fasilitas</td>
                            <td>${fasilitas}</td>
                        </tr>
                    </tbody>
                </table>
                <br>
                <a href="${response[c].maps}" target="_blank" class="button-link">
                    Cek Lokasi via Maps
                </a>

            `)

            var $list = $('.right_');
            var img_all = response[c].img_detail;
            $.each(img_all, function(i, src) {
                var $li = $('<div class="image">').appendTo($list);
                $("<img>").appendTo($li).attr('src', src);
            });

            // <div class="type">Type: Exhibitioon</div>
            // <div class="year">Year: 2020</div>
            // <div class="location">Location: Glasgow</div>
            $(".new").html(`
                <div class="detail">
                    <div class="detail__p">
                        <div class="type">Tipe: ${response[c].type}</div>
                        <div class="year">Mulai : ${response[c].tahun}</div>
                        <div class="location">Lokasi: ${response[c].lokasi}</div>
                    </div>
                </div>
            `)

        }

    })
})

$("#scroll-top").hide(), $(function() {
    $(window).scroll(function() {
        100 < $(this).scrollTop() ? $("#scroll-top").fadeIn() : $("#scroll-top").fadeOut()
    }), $("#scroll-top button").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 300)
    })
})
