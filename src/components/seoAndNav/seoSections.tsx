import React from 'react';
import { SeoScrollableBlock } from './seoScrollableBlock';

export const SeoSections: React.FC = () => {
  return (
    <div className="w-full">
      {/* SECTION 1: Pertanyaan Seputar Tiket Pesawat */}
      <SeoScrollableBlock title="Pertanyaan Seputar Tiket Pesawat">
        <div>
          <p className="font-bold mb-1">Dimana saya bisa membeli tiket pesawat murah?</p>
          <p>Kamu bisa membeli tiket pesawat murah secara online melalui aplikasi atau website tiket.com. tiket.com menawarkan berbagai pilihan maskapai dengan harga kompetitif, serta fitur Smart Roundtrip dan Price Alert yang membantu kamu menemukan harga terbaik sesuai kebutuhan. Jangan lupa juga cek promo yang sedang berlangsung di halaman khusus promo tiket pesawat.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Kapan waktu terbaik membeli tiket pesawat agar dapat harga termurah?</p>
          <p>Waktu terbaik membeli tiket pesawat biasanya adalah jauh hari sebelum keberangkatan, terutama untuk penerbangan domestik dan saat musim liburan. Selain itu, penerbangan pada hari kerja seperti Selasa hingga Kamis atau pada jam-jam non-prime seperti pagi hari seringkali memiliki harga lebih murah. Menggunakan fitur Pengingat Harga di tiket.com juga dapat membantumu mendapatkan informasi saat harga turun.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Bagaimana cara check-in tiket pesawat di tiket.com?</p>
          <p>Kamu dapat melakukan check-in online langsung melalui aplikasi tiket.com. Masuk ke akunmu, buka menu ‘Your Orders’, lalu pilih penerbangan yang ingin kamu check-in. Jika maskapai menyediakan layanan check-in online, akan muncul tombol Check-in yang bisa kamu gunakan untuk melanjutkan proses. Boarding pass elektronik akan dikirimkan ke email atau dapat langsung diunduh dari aplikasi.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Apakah saya bisa membatalkan penerbangan saya?</p>
          <p>Ya, pembatalan tiket pesawat bisa dilakukan melalui tiket.com selama memenuhi syarat dan ketentuan dari maskapai. Kamu bisa membuka menu 'Your Orders', lalu pilih tiket yang ingin dibatalkan dan lanjutkan dengan memilih alasan pembatalan sesuai kondisi kamu. Besaran refund atau potongan biaya akan tergantung pada kebijakan maskapai dan jenis tiket yang kamu beli. Pastikan untuk membaca ketentuan pembatalan sebelum mengajukan permintaan.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Apakah tiket pesawat bisa di-reschedule?</p>
          <p>tiket.com menyediakan fitur reschedule dengan mudah. Untuk melakukan perubahan jadwal: Buka menu “Your Orders” di aplikasi atau website tiket.com, lalu pilih opsi Ubah Jadwal. Kamu akan diarahkan untuk memilih tanggal baru dan menyelesaikan pembayaran jika ada selisih harga atau biaya tambahan. Cek dulu syarat dan ketentuan masing-masing maskapai sebelum mengubah jadwal.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Dimana saya bisa menemukan promo tiket pesawat?</p>
          <p>Promo tiket pesawat dapat kamu temukan di halaman promo tiket.com, baik melalui aplikasi maupun website. Potongan harga ini sering kali muncul dalam bentuk diskon langsung, cashback, atau penawaran spesial dari bank dan mitra pembayaran. Kamu juga bisa berlangganan newsletter tiket.com agar tidak ketinggalan informasi promo terbaru.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Dimana saya bisa melihat e–tiket setelah pembelian?</p>
          <p>Setelah pembayaran berhasil, e-tiket akan langsung dikirimkan ke alamat email yang kamu gunakan saat memesan. Selain itu, kamu juga bisa mengakses e-tiket melalui menu ‘Your Orders’ di aplikasi tiket.com. E-tiket ini berfungsi sebagai bukti resmi pemesanan dan dapat digunakan saat check-in di bandara.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Bagaimana cara mengecek kode booking tiket pesawat?</p>
          <p>Kode booking atau PNR dapat kamu temukan di e-tiket yang dikirimkan ke email atau di aplikasi tiket.com pada halaman detail pesanan. Kode ini penting untuk keperluan check-in dan konfirmasi penerbangan. Pastikan kamu menyimpannya dengan baik atau tangkapan layar agar mudah diakses saat dibutuhkan.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Bagaimana cara memeriksa jatah bagasi di tiket.com?</p>
          <p>Informasi jatah bagasi bisa dilihat saat kamu memilih tiket, tepat di bagian detail penerbangan. Setelah pembelian, informasi tersebut juga tersedia di e-tiket dan halaman ‘Your Orders’. Setiap maskapai memiliki aturan berbeda terkait jatah bagasi, jadi penting untuk memeriksanya sebelum keberangkatan.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Kapan waktu yang tepat untuk booking tiket pesawat?</p>
          <p>Waktu terbaik untuk booking tiket pesawat adalah sekitar satu hingga tiga bulan sebelum keberangkatan untuk rute domestik, dan dua hingga enam bulan sebelumnya untuk rute internasional. Pemesanan lebih awal biasanya memberikan harga yang lebih bersahabat. Jangan lupa gunakan fitur Pengingat Harga dan pantau promo tiket pesawat untuk memaksimalkan penghematan.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Apa saja yang tidak boleh saya bawa ke dalam pesawat?</p>
          <p className="mb-2">Pastikan kamu selalu mengecek ketentuan maskapai dan regulasi bandara sebelum packing. Barang-barang yang umumnya dilarang dibawa ke dalam kabin pesawat antara lain:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Benda tajam seperti gunting, pisau, atau cutter,</li>
            <li>Bahan mudah terbakar dan zat kimia berbahaya,</li>
            <li>Cairan lebih dari 100 ml per wadah untuk penerbangan internasional</li>
            <li>Power bank dengan kapasitas melebihi batas yang ditentukan maskapai.</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-1">Bagaimana cara mendapatkan tiket pesawat murah?</p>
          <p>Beberapa tips untuk mendapatkan tiket pesawat murah antara lain memesan jauh-jauh hari sebelum keberangkatan, menggunakan fitur Price Alert di tiket.com, memilih penerbangan di hari dan jam yang tidak populer, memanfaatkan promo dan diskon kartu kredit atau dompet digital, serta membandingkan harga dari berbagai maskapai di tiket.com. Dengan strategi yang tepat, kamu bisa mendapatkan harga tiket pesawat yang lebih hemat.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Bisakah saya memilih kursi saat memesan?</p>
          <p>Ya, beberapa maskapai menyediakan opsi untuk memilih kursi saat melakukan pemesanan atau setelahnya melalui fitur Kelola Booking. Jika tersedia, kamu bisa memilih kursi favoritmu seperti dekat jendela atau lorong, dengan atau tanpa biaya tambahan tergantung kebijakan maskapai.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Bagaimana cara mengecek status penerbangan saya?</p>
          <p>Kamu bisa mengecek status penerbangan secara real-time langsung melalui aplikasi tiket.com di bagian ‘Your Orders’ atau menggunakan fitur Flight Status. Cukup masukkan kode booking atau nomor penerbangan, pilih ‘Status Penerbangan’ dan kamu akan melihat informasi seperti jadwal keberangkatan, estimasi keterlambatan, dan gate boarding.</p>
        </div>
      </SeoScrollableBlock>

      {/* SECTION 2: Keuntungan Membeli Tiket Pesawat di tiket.com */}
      <SeoScrollableBlock title="Keuntungan Membeli Tiket Pesawat di tiket.com">
        <div>
          <p className="font-bold mb-1">Kemudahan dalam Pesan Tiket Pesawat</p>
          <p>Proses pemesanan tiket penerbangan di tiket.com sangat cepat dan user-friendly. Cukup melalui aplikasi atau website, kamu bisa mencari, memilih, dan memesan tiket hanya dalam beberapa langkah. Tanpa antre, tanpa repot.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Berbagai Pilihan Maskapai dan Rute Penerbangan</p>
          <p>tiket.com menyediakan pilihan maskapai lengkap, baik domestik maupun internasional. Kamu juga bisa menemukan berbagai rute penerbangan yang fleksibel, sesuai kebutuhan dan anggaran perjalananmu.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Tersedia Promo & Diskon Setiap Hari</p>
          <p>Dapatkan harga tiket yang spesial setiap hari melalui beragam promo dan diskon menarik dari tiket.com. Mulai dari potongan harga, cashback, hingga kodo promo tiket.com dari partner bank dan e-wallet.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Kemudahan dalam Reschedule dan Refund Tiket Pesawat</p>
          <p>Tidak perlu khawatir jika rencana berubah. tiket.com menyediakan fitur ubah jadwal dan pembatalan yang mudah diakses langsung dari aplikasi, sesuai dengan syarat dan ketentuan maskapai.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Berbagai Pilihan Pembayaran yang Praktis dan Aman</p>
          <p>Pembayaran tiket semakin mudah dengan banyak metode yang tersedia: transfer bank, kartu kredit, e-wallet, cicilan, hingga pay later. Semua transaksi dijamin aman dan nyaman.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Proses Check-in Pesawat Mudah & Cepat</p>
          <p>Lakukan check-in online langsung dari aplikasi tiket.com tanpa harus antre di bandara. Hemat waktu dan lebih praktis untuk semua penerbangan yang mendukung fitur ini.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Program Poin Loyalitas dan Penawaran Khusus</p>
          <p>Gabung dengan program loyalitas tiket.com dan kumpulkan Tiket Points setiap kali transaksi. Tukarkan poinmu dengan potongan harga menarik atau akses ke promo eksklusif lainnya.</p>
        </div>
      </SeoScrollableBlock>

      {/* SECTION 3: Cara Memesan Tiket Pesawat di tiket.com */}
      <SeoScrollableBlock title="Cara Memesan Tiket Pesawat di tiket.com">
        <p className="mb-2">Memesan tiket pesawat di tiket.com sangat mudah dan praktis, baik melalui aplikasi maupun website. Berikut panduan singkat yang bisa kamu ikuti:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Di halaman Beranda, pilih opsi "Pesawat" untuk memulai.</li>
          <li>Masukkan kota keberangkatan dan tujuan.</li>
          <li>Tentukan tanggal penerbangan (one way atau pulang-pergi).</li>
          <li>Isi jumlah penumpang dan kelas penerbangan.</li>
          <li>Klik "Ayo Cari".</li>
          <li>Gunakan fitur "Filter" dan "Urutkan" untuk menyaring pilihan penerbangan.</li>
          <li>Pilih penerbangan yang sesuai dan klik "Pilih".</li>
          <li>Masukkan data pemesan dan penumpang.</li>
          <li>Jika memesan untuk diri sendiri, klik "Sama dengan pemesan".</li>
          <li>Klik "Lanjutkan".</li>
          <li>Tambahkan fasilitas seperti bagasi, kursi, atau asuransi.</li>
          <li>Masukkan kupon promo jika ada.</li>
          <li>Klik "Lanjut Bayar".</li>
          <li>Pilih metode pembayaran (transfer bank, kartu kredit, e-wallet, atau tunai di minimarket).</li>
          <li>Klik "Bayar dengan" dan selesaikan pembayaran.</li>
          <li>Cek status e-ticket melalui menu "Your Orders".</li>
          <li>E-ticket siap digunakan untuk check-in.</li>
        </ul>
      </SeoScrollableBlock>

      {/* SECTION 4: Beragam Pilihan Kelas Pesawat */}
      <SeoScrollableBlock title="Beragam Pilihan Kelas Pesawat">
        <p className="mb-4">Di tiket.com, kamu bisa memilih berbagai kelas penerbangan sesuai kebutuhanmu, mulai dari perjalanan hemat hingga pengalaman terbang paling mewah. Berikut pilihan kelas yang tersedia saat kamu memesan tiket di aplikasi atau website tiket.com:</p>
        <div>
          <p className="font-bold mb-1">Kelas Ekonomi</p>
          <p>Kelas ekonomi merupakan kelas paling umum. Tempat duduknya cukup nyaman meskipun ukuran kursinya terbilang kecil jika dibandingkan dengan kelas lainnya. Kursi di kelas ekonomi biasanya memiliki jarak yang nggak terlalu lebar. Bahkan, jika kursi di depan dimundurkan sandarannya, akan membuat jarak dengan penumpang di belakang sempit. Di beberapa maskapai, akan menyediakan makanan dan minuman untuk perjalanan yang memakan waktu lama.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Kelas Ekonomi Premium</p>
          <p>Penumpang kelas ekonomi premium biasanya akan mendapatkan fasilitas yang lebih baik dari kelas ekonomi. Biasanya kursinya lebih empuk, terdapat sandaran lengan, hingga ruang kaki lebih lebar sehingga mudah untuk meregangkan kaki.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Kelas Bisnis</p>
          <p>Memiliki kursi yang lebih nyaman dibanding kelas ekonomi dan ekonomi premium, tipe kursi kelas bisnis, mematok harga yang sedikit lebih tinggi. Pasalnya, harga yang dibayar sangat sebanding dengan fasilitas yang didapatkan. Contohnya saja, di kelas bisnis, kamu akan mendapatkan kursi yang bisa diatur kemiringannya hingga 180 derajat. Sehingga akan membuat penumpang terasa lebih nyaman untuk istirahat. Terdapat pula fasilitas lain seperti layar LCD untuk hiburan dan stop kontak.</p>
        </div>
        <div>
          <p className="font-bold mb-1">First Class</p>
          <p>Dari segi harga, dibanding ketiga kelas lainnya, kelas utama memang memiliki tarif paling tinggi. Sederet fasilitas yang bisa didapatkan saat kamu berada di first class antara lain kursi paling nyaman, ukurannya lebar, dan ada pembatas untuk menjaga privasi. Selain itu, di beberapa maskapai menyediakan layanan antar-jemput, checkin, hingga variasi makanan yang mewah dan komplet.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Quiet Zone</p>
          <p>Sudah pernah dengar kelas pesawat yang satu ini? Quiet Zone atau Zona Tenang merupakan kursi yang disediakan khusus di beberapa maskapai penerbangan. Contohnya saja seperti maskapai penerbangan Air Asia . Jika kamu ingin terhindar dari kebisingan dan mencari suasana yang sunyi saat naik pesawat, maka Quiet Zone adalah pilihan yang tepat buat kamu. Kursi ini disediakan hanya beberapa baris saja. Tapi perlu diingat, bayi dan anak-anak dengan usia di bawah 10 tahun nggak bisa memesan kursi di Quiet Zone.</p>
        </div>
      </SeoScrollableBlock>

      {/* SECTION 5: Ketentuan Dalam Memesan Tiket Pesawat */}
      <SeoScrollableBlock title="Ketentuan Dalam Memesan Tiket Pesawat">
        <div>
          <p className="font-bold mb-1">Ketentuan Dalam Memesan Tiket Pesawat</p>
          <p>Penumpang dibagi menjadi beberapa kategori: <strong>Dewasa</strong> (di atas 18 tahun), <strong>Anak-anak</strong> (2–11 tahun), dan <strong>Bayi</strong> (di bawah 2 tahun). Bayi harus didampingi oleh orang dewasa. Beberapa maskapai juga memiliki kebijakan khusus untuk <strong>lansia</strong>, <strong>penumpang dengan kebutuhan khusus</strong>, serta <strong>penumpang yang membawa hewan peliharaan</strong>. Pastikan memilih kategori yang sesuai saat memesan.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Kategori Penumpang</p>
          <p>Penumpang dibagi menjadi beberapa kategori: Dewasa (di atas 18 tahun), Anak-anak (2–11 tahun), dan Bayi (di bawah 2 tahun). Bayi harus didampingi oleh orang dewasa. Beberapa maskapai juga memiliki kebijakan khusus untuk lansia, penumpang dengan kebutuhan khusus, serta penumpang yang membawa hewan peliharaan. Pastikan memilih kategori yang sesuai saat memesan.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Airport Tax</p>
          <p>Airport tax atau Passenger Service Charge (PSC) adalah biaya penggunaan fasilitas bandara yang biasanya sudah termasuk dalam harga tiket. Namun, di beberapa bandara atau negara, airport tax bisa dikenakan secara terpisah. Jumlahnya berbeda tergantung lokasi dan kebijakan otoritas bandara atau maskapai.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Kabin & Bagasi</p>
          <p>Kabin pesawat terdiri dari beberapa kelas seperti Ekonomi, Bisnis, dan First Class, masing-masing dengan fasilitas berbeda. Penumpang juga memiliki jatah bagasi sesuai kebijakan maskapai, baik untuk bagasi kabin maupun bagasi tercatat. Jika melebihi batas yang ditentukan, akan dikenakan biaya tambahan. Pastikan membaca detail kebijakan bagasi saat memilih tiket.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Makanan/Snack di Pesawat</p>
          <p>Maskapai full-service biasanya menyediakan makanan atau snack gratis, terutama pada penerbangan jarak jauh atau kelas premium. Maskapai bertarif rendah umumnya tidak menyertakan makanan, namun penumpang bisa membelinya di dalam pesawat. Beberapa maskapai juga menawarkan pilihan makanan khusus (halal, vegetarian, bebas alergi) yang bisa dipesan lebih awal.</p>
        </div>
        <div>
          <p className="font-bold mb-1">Proses Check-in Pesawat</p>
          <p>Check-in bisa dilakukan langsung di bandara atau secara online melalui aplikasi. Umumnya, check-in dibuka 24 hingga 2 jam sebelum keberangkatan. Untuk menghindari antrean panjang dan kehilangan jadwal, disarankan datang ke bandara setidaknya dua jam sebelum waktu terbang. Setelah check-in, pastikan memantau informasi gate dan waktu boarding melalui boarding pass atau layar informasi bandara.</p>
        </div>
        <div className="pt-2">
          <p>
            Temukan <a href="https://www.tiket.com/id-id/pesawat/rute" className="text-[#0064D2] hover:underline font-medium">rute pesawat</a>, <a href="https://www.tiket.com/id-id/pesawat/tujuan" className="text-[#0064D2] hover:underline font-medium">destinasi liburan</a> hingga <a href="https://www.tiket.com/id-id/pesawat/maskapai" className="text-[#0064D2] hover:underline font-medium">maskapai populer</a> pilihan kamu!
          </p>
        </div>
      </SeoScrollableBlock>
    </div>
  );
};