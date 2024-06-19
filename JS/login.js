// Fungsi untuk validasi data login
function validateData() {
    // Mendapatkan nilai dari form
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;
    
    // Validasi apakah field kosong
    if (!email || !password) {
        alert('Email dan password harus diisi!');
        return;
    }

    // Validasi email dasar
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Alamat email tidak valid!');
        return;
    }

    // Jika semua validasi lolos, menampilkan pesan sukses dan mengalihkan ke halaman home
    alert('Login berhasil!');
    window.location.href = 'home.html';
}
