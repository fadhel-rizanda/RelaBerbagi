// Fungsi untuk validasi data
function validateData() {
    // Mendapatkan nilai dari form
    const username = document.getElementsByName('username')[0].value;
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;
    const confirmPassword = document.getElementsByName('confirm-password')[0].value;
    
    // Menggunakan regex untuk validasi email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Validasi apakah field kosong
    if (!username || !email || !password || !confirmPassword) {
        alert('Semua field harus diisi!');
        return;
    }

    // Validasi email
    if (!emailPattern.test(email)) {
        alert('Alamat email tidak valid!');
        return;
    }

    // Validasi password
    if (password !== confirmPassword) {
        alert('Password dan Konfirmasi Password tidak cocok!');
        return;
    }

    // Jika semua validasi lolos, menampilkan pesan sukses
    alert('Pendaftaran berhasil!');
    
    // Mengalihkan ke halaman home
    window.location.href = '../HTML/home.html';
}

