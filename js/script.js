// nomor admin whatsapp
const adminNumber = "+6282322249307";

// pesan otomatis
const message =
  "halo admin saya \nNama : \ningin pesan Ny Cheesecake Varian :  ";

// encode pesan untuk url
const encodedMessage = encodeURIComponent(message);

// buka wa dengan pesan tersendiri
const waLink = `https://wa.me/${adminNumber}?text=${encodedMessage}`;

// ambil elemen link dan atur hrefnya
const waLinkElement = document.getElementById("wa-link");

if (waLinkElement) {
  waLinkElement.href = waLink;

  // buka tab baru
  waLinkElement.target = "_blank";

  waLinkElement.addEventListener("click", function (event) {
    console.log("Tombol WA diklik!");
  });
} else {
  console.error(
    "Elemen dengan ID 'wa-link' tidak ditemukan. Cek kembali HTML Anda."
  );
}
