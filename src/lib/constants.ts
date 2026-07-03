// Wedding data constants
export const WEDDING_DATA = {
  couple: {
    groom: {
      fullName: "Dwi Setyo Wiratomo",
      nickname: "Dwi Tomo",
      parents: "Putra Pertama Bapak Arif Wiratomo dan Ibu Siti Nurhaliza",
      instagram: "dwiratomo",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face",
    },
    bride: {
      fullName: "Syahrheina Feby Indriani",
      nickname: "Rheina",
      parents: "Putri Kedua Bapak Hendra Gunawan dan Ibu Rina Marlina",
      instagram: "syahrheina",
      photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop&crop=face",
    },
  },
  quranVerse: {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    translation:
      "Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir",
    reference: "QS. Ar-Rum: 21",
  },
  loveStory: [
    {
      title: "The Encounter",
      description:
        "Seorang pria dan seorang gadis yang penasaran kebetulan berbagi kursi di meja yang sama. Tidak ada yang romantis, tidak ada yang luar biasa. Hanya dua orang yang diam-diam mulai menyadari keberadaan satu sama lain.",
      imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=800&fit=crop",
    },
    {
      title: "Designated Coincidences",
      description:
        "Rasa penasaran bisa menular. Tapi alih-alih penasaran dengan pekerjaannya, dia malah penasaran dengannya. Dengan sedikit bantuan teman, timing, dan rencana yang disusun dengan cermat, dia menciptakan serangkaian kebetulan yang direncanakan yang perlahan membawa kami berdua semakin dekat.",
      imageUrl: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=800&fit=crop",
    },
    {
      title: "Private Relationship",
      description:
        "Rencananya berhasil. Apa yang dimulai dengan obrolan perlahan berubah menjadi jalan-jalan harian, makan bersama, dan momen-momen tak terhitung di antaranya. Kami memilih untuk menjaga hubungan kami tetap privat, membiarkannya tumbuh dengan tenang sementara kami mencari tahu ke mana arahnya.",
      imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=800&fit=crop",
    },
    {
      title: "The Big Decision",
      description:
        "Di antara makan bersama dan jalan-jalan setelah kerja, mereka menjadi bagian dari kehidupan satu sama lain. Perbedaan mereka ternyata menjadi pelengkap, bukan hambatan. Maka, mereka memilih untuk membangun proyek seumur hidup bersama, satu langkah demi satu langkah.",
      imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&h=800&fit=crop",
    },
    {
      title: "The Now",
      description:
        "Melihat kembali perjalanan selama ini, mereka bangga dengan semua yang telah mereka alami — suka, duka, dan semua hari-hari biasa di antaranya. Di suatu titik, rasa penasaran berubah menjadi kepastian, dan rencana yang disusun dengan cermat tumbuh menjadi kemitraan yang dibangun di atas kepercayaan, dukungan, dan tujuan bersama. Dan di sinilah mereka hari ini, mengubah rencana menjadi janji.",
      imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=800&fit=crop",
    },
  ],
  gallery: Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    url: `https://images.unsplash.com/photo-${[
      "1519741497674-611481863552",
      "1529636798458-92182e662e87",
      "1511285560929-80b456fea0bc",
      "1529333166437-7750a6dd5a70",
      "1516589178581-6cd7833ae3b2",
      "1529626455594-4ff0802cfb7e",
      "1515934751635-c81c6bc9a2d8",
      "1507501456753-c6b5e7f7cf5e",
      "1520854226917-b05bebf7bfc0",
      "1532712938310-34cb3982ef74",
      "1537634590246-0cc2ecbe5a8e",
      "1542037109935-7e1e5e1d0f4f",
    ][i % 12]}?w=600&h=600&fit=crop&random=${i}`,
  })),
  videos: [
    {
      title: "The Playful Duo",
      thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "Cerita kami dalam bingkai",
    },
    {
      title: "Ours",
      thumbnailUrl: "https://images.unsplash.com/photo-1529636798458-92182e662e87?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "Milik kita berdua",
    },
  ],
  event: {
    akad: {
      title: "Akad Nikah",
      date: "2027-10-09",
      time: "09:00 - 11:00 WIB",
      venue: "Auditorium Sabang, Kantor Pusat Bea Cukai",
      address: "Jl. Jenderal Ahmad Yani By Pass, RT.12/RW.5, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13230",
      mapsUrl: "https://maps.google.com/?q=Auditorium+Sabang+Kantor+Pusat+Bea+Cukai+Jakarta",
    },
    resepsi: {
      title: "Resepsi",
      date: "2027-10-09",
      time: "12:00 - 17:00 WIB",
      venue: "Auditorium Sabang, Kantor Pusat Bea Cukai",
      address: "Jl. Jenderal Ahmad Yani By Pass, RT.12/RW.5, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13230",
      mapsUrl: "https://maps.google.com/?q=Auditorium+Sabang+Kantor+Pusat+Bea+Cukai+Jakarta",
    },
  },
  gift: {
    banks: [
      {
        bank: "BCA",
        code: "014",
        accountNumber: "1234567890",
        accountName: "Syahrheina Feby Indriani",
      },
      {
        bank: "BCA",
        code: "014",
        accountNumber: "0987654321",
        accountName: "Dwi Setyo Wiratomo",
      },
    ],
    message:
      "Doa dan kehadiran Anda sudah cukup bagi kami. Namun, jika Anda ingin memberikan hadiah, kami menyediakan Amplop Digital untuk memudahkan Anda. Terima kasih.",
  },
  instagramFilter: "https://www.instagram.com/ar/123456789",
  googleCalendarUrl:
    "https://www.google.com/calendar/render?action=TEMPLATE&text=Rheina+%26+Dwi+Tomo+Wedding&dates=20271009T020000Z/20271009T100000Z&location=Auditorium+Sabang+Jakarta",
  musicUrl: "",
};
