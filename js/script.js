document
  .getElementById("presensiForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah refresh halaman

    // Validasi form sederhana
    const nama = document.getElementById("nama").value;
    const npm = document.getElementById("npm").value;
    const jurusan = document.getElementById("jurusan").value;
    const fakultas = document.getElementById("fakultas").value;

    if (nama && npm && jurusan && fakultas) {
      // Menampilkan pesan sukses
      document.getElementById("successMessage").style.display = "block";

      // Mengosongkan form setelah submit
      setTimeout(() => {
        document.getElementById("presensiForm").reset();
        document.getElementById("successMessage").style.display = "none";
      }, 3000);
    } else {
      alert("Harap lengkapi semua data.");
    }
  });
