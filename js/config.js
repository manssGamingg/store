const CONFIG = {
nama: "Manss Store", // Nama Store
profil: "https://files.catbox.moe/hg3u00.jpg", // Url Profil
banner: "https://files.catbox.moe/vr5j9c.jpg", // Url Banner 
tentang: "Manss Store adalah toko online terpercaya yang telah melayani ribuan pelanggan sejak 2024. Kami menyediakan berbagai produk digital untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
alamat: "Jl. rusun waduk pluit blok 10, Jakarta Utara, Indonesia",
sosial_media: {
  email: "manssstore82@gmail.com", // Email
  youtube: "-", // YouTube Username 
  tiktok: "Man_gamingg", // Tiktok Username 
  whatsapp: "6285945527763", // WhatsApp Number 
  telegram: "peeeeemansss" // Telegram Username
},
payment: {
  dana: "085922913854", // Payment Dana
  gopay: "085922913854", // Payment Gopay 
  ovo: "085922913854", // Payment Ovo 
  qris: "https://files.catbox.moe/s13wpw.jpg" // Url Qris
},
telegram_api: {
  bot: "62828278:7678blablabla", // Token bot father
  chatid: "6118311111" // ID telegram
},
}

// Produk
const productsData = {
            "Hosting": [
              {
                "id": 1,
                "name": "Panel Pterodactyl",
                "icon": "fas fa-server",
                "description": "Panel Pterodactyl hosting bot/game dengan performa stabil dan harga terjangkau.",
                "variants": [
                  { "name": "1GB RAM", "price": 500 },
                  { "name": "2GB RAM", "price": 1000 },
                  { "name": "3GB RAM", "price": 2500 },
                  { "name": "4GB RAM", "price": 3000 },
                  { "name": "5GB RAM", "price": 3500 },
                  { "name": "6GB RAM", "price": 4000 },
                  { "name": "7GB RAM", "price": 4500 },
                  { "name": "8GB RAM", "price": 5000 },
                  { "name": "9GB RAM", "price": 5500 },
                  { "name": "10GB RAM", "price": 6000 },
                  { "name": "Unlimited RAM", "price": 5000 }
                ]
              }
            ],
            "Kebutuhan Fish it": [
              {
                "id": 2,
                "name": "secret tumbal",
                "icon": "fas fa-fish",
                "description": "secret tumbal adalah untuk menukarkan stone enchant II",
                "variants": [
                  { "name": "1 SECRET ", "price": 6000 },
                  { "name": "2 SECRET ", "price": 10000 }
                ]
              },
              {
                "id": 3,
                "name": "coin fish it",
                "icon": "fas fa-coins",
                "description": "Coin Fish It",
                "variants": [
                  { "name": "1M coin ", "price": 12000 },
                  { "name": "2M coin ", "price": 20000 }
                  ]
              }
              ],
            "Produk Digital": [
                {
                    id: 4,
                    name: "E-Book",
                    icon: "fas fa-book",
                    description: "Koleksi e-book digital dengan berbagai topik menarik, mulai dari bisnis, programming, hingga hobi.",
                    variants: [
                        { name: "E-Book Bisnis", price: 15000 },
                        { name: "E-Book Programming", price: 20000 },
                        { name: "E-Book Random Pack", price: 10000 }
                    ]
                },
                {
                    id: 5,
                    name: "Software & Tools",
                    icon: "fas fa-cogs",
                    description: "Software dan tools digital untuk menunjang pekerjaan maupun kebutuhan kreatif.",
                    variants: [
                        { name: "Software Editing", price: 30000 },
                        { name: "Software Utility", price: 25000 },
                        { name: "Tools Random Pack", price: 20000 }
                    ]
                },
                {
                    id: 6,
                    name: "Lisensi & Key",
                    icon: "fas fa-key",
                    description: "Produk lisensi resmi dan serial key untuk software pilihan.",
                    variants: [
                        { name: "Windows Key", price: 50000 },
                        { name: "Office Key", price: 60000 },
                        { name: "Antivirus Key", price: 40000 }
                    ]
                },
                {
                    id: 7,
                    name: "Template Digital",
                    icon: "fas fa-file-alt",
                    description: "Template digital untuk desain, presentasi, website, dan media sosial.",
                    variants: [
                        { name: "Template PowerPoint", price: 10000 },
                        { name: "Template Website", price: 30000 },
                        { name: "Template Sosmed", price: 15000 }
                    ]
                },
                {
                    id: 8,
                    name: "Akun Premium",
                    icon: "fas fa-user-circle",
                    description: "Berbagai akun premium dengan harga terjangkau, cocok untuk hiburan dan produktivitas.",
                    variants: [
                        { name: "Netflix Premium (1 Bulan)", price: 35000 },
                        { name: "Spotify Premium (1 Bulan)", price: 25000 },
                        { name: "Canva Pro (1 Bulan)", price: 20000 }
                    ]
                }
            ]
        };
