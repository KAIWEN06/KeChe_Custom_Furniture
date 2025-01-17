<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // 1. Kirim ke email
    $to = "steffisondakh1981@gmail.com"; // Ganti dengan email Anda
    $subject = "Pesan dari Formulir Kontak";
    $body = "Nama: $name\nEmail: $email\nPesan:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Pesan berhasil dikirim ke email!";
    } else {
        echo "Gagal mengirim email.";
    }

    // 2. Simpan ke file contact_log.txt
    $file = "contact_log.txt";
    $current = file_get_contents($file);
    $current .= "Tanggal: " . date("Y-m-d H:i:s") . "\n";
    $current .= "Nama: $name\nEmail: $email\nPesan:\n$message\n";
    $current .= "----------------------------------\n";
    file_put_contents($file, $current, FILE_APPEND);
}
?>