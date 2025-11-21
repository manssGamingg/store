const CONFIG = {
nama: "Manss Store", // Nama Store
profil: "https://files.catbox.moe/hg3u00.jpg", // Url Profil
banner: "https://files.catbox.moe/vr5j9c.jpg", // Url Banner 
tentang: "Manss Store adalah toko online terpercaya yang telah melayani pelanggan sejak 2024. Kami menyediakan berbagai produk digital untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
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
                  { "name": "1 SECRET ", "price": 4000 },
                  { "name": "2 SECRET ", "price": 8000 }
                ]
              },
              {
                "id": 3,
                "name": "coin fish it",
                "icon": "fas fa-coins",
                "description": "Coin Fish It",
                "variants": [
                  { "name": "1M coin ", "price": 8000 },
                  { "name": "2M coin ", "price": 15000 }
                  ]
              }, 
              {
                "id": 4,
                "name": "Enchant-Stone", 
                "icon": "fas fa-diamond", 
                "description": "Untuk enchant rod kalian", 
                "variants": [
                  { "name" : "15 enchant stone", "price": 1000 }, 
                  { "name" : "35 enchant Stone", "price": 2000 }
                ]
              }, 
              {
                "id": 5,
                "name": "Totem", 
                "icon": "fas fa-broadcast-tower",
                "description": "untuk menambahkan buff pasif dengan waktu terbatas NOTE : tidak bisa di gift", 
                "variants": [
                  { "name" : "1 lucky totem", "price": 1000 }, 
                  { "name" : "1 shiny totem", "price": 1500 }, 
                  { "name" : "1 mutation totem", "price": 2000 }
                ]
              }
              ],
            "Produk Digital": [
                {
                    id: 6,
                    name: "E-Book",
                    icon: "fas fa-book",
                    description: "Koleksi e-book digital dengan berbagai topik menarik, mulai dari bisnis, programming, hingga hobi.",
                    variants: [
                        { name: "E-Book Bisnis", price: 15000 },
                        { name: "E-Book Programming", price: 20000 },
                        { name: "E-Book Random Pack", price: 10000 }
                    ]
                }
            ]
        };
