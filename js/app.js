for (let a = 1; a <= 100; a++) {
    if (a % 2 == 0) {
        document.write(a + 'is even number' + '<br>');
    }
    else if (a % 2 != 0) {
        document.write(a + 'is odd number' + '<br>')
    }
}


document
    .getElementById("sidebar_toggler")
    .addEventListener("click", function () {
        document.getElementById("sidebar").classList.toggle("show");
    });

document.getElementById("search_btn").addEventListener("click", function () {
    document.getElementById("search_box").classList.add("show");
});

document.getElementById("search_close").addEventListener("click", function () {
    document.getElementById("search_box").classList.remove("show");
});



document.getElementById('colorFlipper').addEventListener('click', function () {
    let hexcode = '#';

    hexcode += (Math.random() * 110).toString(16).substring(3, 9);

    document.body.style.background = hexcode;

}
)

for (let a = 2; a <= 100; a++) {

    switch (a) {
        case a % 2 == 0:
            console.log('is a even number');
            break;
    }
}