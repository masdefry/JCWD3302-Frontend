Hello, Full Stack Students✌️!

Position dalam CSS adalah properti yang digunakan untuk menentukan bagaimana elemen HTML diposisikan di dalam halaman.
Properti ini bekerja bersama dengan properti lain seperti top, right, bottom, dan left
untuk menentukan posisi elemen relatif terhadap elemen lain atau terhadap viewport (layar).

    ✔️ Static (Default)
        ▪️Elemen diposisikan secara normal sesuai urutan dokumen.
        ▪️Tidak bisa digunakan bersamaan dengan props top, right, bottom, left.

    ✔️ Relative
        ▪️Elemen diposisikan relatif terhadap posisinya semula.
        ▪️Ketika elemen relative berpindah, maka akan meninggalkan ruang kosong.
        ▪️Bisa menggunakan props top, right, bottom, left.

    ✔️ Absolute
        ▪️Elemen diposisikan relatif terhadap elemen induk terdekat yang memiliki position selain static.
        ▪️Jika tidak ada, maka relatif terhadap body atau html.
        ▪️Ketika elemen absolute berpindah, maka ruang dari elemen absolute akan dianggap tidak ada oleh elemen lain atau akan meninggalkan ruang kosong.

    ✔️ Fixed
        ▪️Elemen diposisikan relatif terhadap viewport (layar).
        ▪️Tidak bergeser saat halaman di-scroll.

    ✔️ Sticky
        ▪️Elemen berperilaku seperti relative sampai titik tertentu, lalu menjadi seperti fixed.
        ▪️Biasanya digunakan untuk navbar/header yang menempel saat scroll.

📃 Media Query

Media query memungkinkan desain web menjadi responsif, yaitu menyesuaikan tampilan halaman agar tetap optimal di berbagai ukuran dan jenis device (misalnya: handphone, tablet, laptop).
