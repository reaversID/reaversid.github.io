var author = 'Reaver';
var today = new Date();
var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + '.';
var dateTime = date;
var swals = Swal


async function mulai() {
    var {
        value: nama
    } = await swals.fire({
        title: 'Nama <u>kamu</u>?',
        input: 'text',
        confirmButtonText: 'Lanjut',
        imageUrl: 'https://muhamadramdani.com/bucin/halo.png',
        imageWidth: 200,
        imageHeight: 200,
        allowOutsideClick: false,
        showCancelButton: false,
        showCloseButton: false,
        focusConfirm: false
    });
    if (nama) {
        play();
        window.nama = nama;
        third_text = "Dari: " + author + ", Untuk: " + window.nama + ".";
        fifth_text = "Ciluk BAA, " + window.nama + "!";
        await swals.fire({
            title: `Hai, ${nama}! `,
            confirmButtonText: 'Lanjut',
            imageUrl: 'https://muhamadramdani.com/bucin/Hai.gif',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        await swals.fire({
            title: `Sekarang lihat ini ya `,
            imageUrl: 'https://muhamadramdani.com/bucin/Sekarang.gif',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        typing_first();
        showDiv();
        showFt();
        document.getElementById("namamu").innerHTML = "Halo, " + nama + "!";
    } else {
        await swals.fire({
            title: 'Isi namanya dudul',
            imageUrl: 'https://muhamadramdani.com/bucin/namanya.gif',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        await swals.fire({
            title: 'Gak boleh kosong',
            imageUrl: 'https://cdn.discordapp.com/attachments/504481286979846145/979322975880900628/mochi_2.gif',
            imageWidth: 250,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        mulai();
    }
}
mulai()
async function lanjutan() {
    var {
        value: sayang
    } = await swals.fire({
        title: `Sebelumnya, ${nama} seru gak sama ${author} 🥺 wkwkwk halah sia bicid`,
        imageUrl: 'https://muhamadramdani.com/bucin/Sebelumnya.gif',
        imageWidth: 200,
        imageHeight: 200,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Seru',
        denyButtonText: `Gakseru`,
        allowOutsideClick: false,
        allowOutsideClick: false,
        focusConfirm: false
    
    }).then((result) => {
        if (result.isConfirmed) {
            window.sayang = "Seru";
            lanjutan2();
        } else if (result.isDenied) {
            window.sayang = "Gaseru";
            window.persen = "%3A%2F";
            swals.fire({
                title: `Yaudah deh 😞`,
                confirmButtonText: 'Dahlah Surrend',
                imageUrl: 'https://muhamadramdani.com/bucin/Yaudah.jpg',
                imageWidth: 200,
                imageHeight: 200,
                allowOutsideClick: false,
                focusConfirm: false
            });
            whs();
            function denyButtonText(Gakseru) {
                ini.style.position = "absolute";
                ini.style.left = `${Math.floor(Math.random() * 90)}%`;
                ini.style.top = `${Math.floor(Math.random() * 90)}%`;
              }
        }
    })
}

async function lanjutan2() {
    var {
        value: persen
    } = await swals.fire({
        title: 'Seberapa seru?',
        icon: 'question',
        input: 'range',
        inputLabel: 'Antara 90-100% ya',
        inputAttributes: {
            min: 90,
            max: 100,
        },
        allowOutsideClick: false,
        inputValue: 90
    });
    if (persen) {
        window.persen = persen + '%25';
        await swals.fire({
            title: `Maacii udah mau bekawan sama ${author} ${persen}% 🥰`,
            confirmButtonText: 'Ok Dudul',
            imageUrl: 'https://muhamadramdani.com/bucin/Maacii.gif',
            imageWidth: 200,
            imageHeight: 200,
            allowOutsideClick: false,
            focusConfirm: false
        });
        lanjutan3();
    }
}

async function lanjutan3() {
    await swals.fire({
        title: `Banyakin istirhat, jangan begadang mulu!`,
        confirmButtonText: 'WKWKWK GELI GA SIH SUMPAH',
        imageUrl: 'https://muhamadramdani.com/bucin/gws.gif',
        imageWidth: 200,
        imageHeight: 200,
        allowOutsideClick: false,
        focusConfirm: false
    });
    iloveu();
    siap();
    whs();
}

function WhatsApp() {
    window.location = " " + "*" + nama + "*" + " udah bacain semuanya" + "%0A%0A" + "*" + nama + "*" + "%20" + window.sayang + " sama kamu " + "*" + window.persen + "*" + "%0A%0A" + dateTime;
}