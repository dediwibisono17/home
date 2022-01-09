$.ajax({
    url: '/home/assets/js/data.json',
    method: 'GET',
    success: (response) => {
        var x;
        for (x = 0; x < response.length; x++) {
            var name = response[x].name;
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
            `)
        }

        $("#image-foto .modal-body").html("")
        $(".listing[data-target='#image-foto']").on('click', function() {
            $('#image-foto').modal('show')
            var data = $(this).attr("data-help");

            $("#image-foto .modal-content").html(`
                    <div class="modal-body">
                        <div class="float-right close-class" data-dismiss="modal">
                            <img src="img/close.png">
                        </div>
                        <h4 class="text-center">${response[data].name}</h4>
                        <div class="modal-image">
                            <img src=${response[data].img} />
                        </div>
                    </div>
                `);
        })
    }
})
