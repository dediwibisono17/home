$.ajax({
    url: '/home/assets/js/data.json',
    method: 'GET',
    success: (response) => {
        var x;
        for (x = 0; x < response.length; x++) {
            /*var name = response[x].name;
            var type = response[x].type;
            var lokasi = response[x].lokasi;
            var lantai = response[x].lantai;
            var tahun = response[x].tahun;
            var img = response[x].img;
            var status = response[x].status;
            $('.galeri-foto').append(`
                <div class="listing" data-toggle="modal" data-target="#image-foto" data-help="${x}">
                    <img src=${img} />
                </div>
            `)*/
            var $list = $('.galeri-foto');
            var img_all = response[x].img_detail;
            var id_name = response[x].id_name;
            $.each(img_all, function(i, src) {
                var cek = i;
                var $li = $('<div class="listing" data-toggle="modal" data-target="#image-foto" data-help=' + cek + '>').appendTo($list);
                $("<img>").appendTo($li).attr('src', src);
            });
        }

        $("#image-foto .modal-body").html("")
        $(".listing[data-target='#image-foto']").on('click', function(i,x) {
            $('#image-foto').modal('show')
            var data = $(this).attr("data-help");

            $("#image-foto .modal-content").html(`
                    <div class="modal-body">
                        <div class="modal-image">
                            <img src=${i.target.src} />
                        </div>
                    </div>
                `);
        })
    }
})
