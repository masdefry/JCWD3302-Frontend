Hello, Full Stack Students✌️!

DOM adalah singkatan dari Document Object Model. DOM adalah struktur data berbentuk pohon (tree) yang mewakili seluruh elemen HTML atau XML dari sebuah halaman web. DOM memungkinkan bahasa pemrograman seperti JavaScript untuk:

    ▪️Mengakses konten halaman
    ▪️Mengubah elemen atau struktur HTML
    ▪️Menambah atau menghapus elemen
    ▪️Mengubah styling CSS
    ▪️Menangani event (seperti onclik, onscroll, dll)

🔍 Contoh Sederhana

Misalnya, HTML berikut:
    <html>
        <body>
            <h1 id="judul">Halo Dunia</h1>
            <p>Ini paragraf pertama.</p>
        </body>
    </html>

Akan direpresentasikan dalam DOM seperti ini:
    Document
    └── html
        └── body
            ├── h1 (id="judul")
            └── p

Dan kita dapat mengakses semua yang ada didalam file HTML dengan code Javascript.