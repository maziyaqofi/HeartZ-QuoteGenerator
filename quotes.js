const quotes = [
    {
        category: "english",
        text: "In life, in love, in career you can always choose to begin again.",
        author: "Taylor Swift",
        song: "Begin Again"
    },
    {
        category: "english",
        text: "You'll never know and I'll never show.",
        author: "Goo Goo Dolls",
        song: "Iris"
    },
    {
        category: "english",
        text: "Better live your life, we're running out of time.",
        author: "Kendrick Lamar",
        song: "All The Stars"
    },
    {
        category: "english",
        text: "It's fine to fake it till you make it, until you do.",
        author: "Taylor Swift",
        song: "Snow On The Beach"
    },
    {
        category: "english",
        text: "About you by The 1975 is a reminder that some people stay in your heart.",
        author: "The 1975",
        song: "About You"
    },
    {
        category: "english",
        text: "Somewhere I go when I need to remember your face.",
        author: "The 1975",
        song: "About You"
    },
    {
        category: "english",
        text: "The softness in your eyes, you sweet thing.",
        author: "Lany",
        song: "You"
    },
    {
        category: "english",
        text: "Easy they come, easy they go.",
        author: "Taylor Swift",
        song: "The Archer"
    },
    {
        category: "english",
        text: "And I'm sorry I left, but it was for the best.",
        author: "Sufjan Stevens",
        song: "Fourth of July"
    },
    {
        category: "english",
        text: "I'm sorry if I say \"I need you\", but I don't care.",
        author: "One Direction",
        song: "Strong"
    },
    {
        category: "jawa",
        text: "Puspito kang manis ayu, parasmu dyah.",
        author: "Ilham Pradana",
        song: "Jalaraning Tresna"
    },
    {
        category: "jawa",
        text: "Mas tresnoku mung siji kowe, langit lan bumi saksine.",
        author: "Pendhoza",
        song: "Aku Cah Kerjo"
    },
    {
        category: "jawa",
        text: "Gandeng wes suwe jebul aku dudu jodomu.",
        author: "Happy Asmara",
        song: "Sadar Posisi"
    },
    {
        category: "jawa",
        text: "Pancen iki takdir e raiso ro kowe teko tuwo.",
        author: "Happy Asmara",
        song: "Tresno Liyane"
    },
    {
        category: "jawa",
        text: "Sa'iki aku wes nyerah, wes pasrah marang gusti.",
        author: "Zakiyem",
        song: "Tanpo Hubungan"
    },
    {
        category: "jawa",
        text: "Apa kabar wong seng tau tak sayang? NDX aka nggawe genah isih eling kowe.",
        author: "NDX Aka",
        song: "Apa Kabar Mantan"
    },
    {
        category: "jawa",
        text: "Saksine dunyo lan langit gedene roso tresnoku.",
        author: "La Tasya",
        song: "Tunggal Ika"
    },
    {
        category: "indonesia",
        text: "Tak pernah ku mengerti, aku segila ini.",
        author: "Ariel Noah",
        song: "Hidup Untukmu Mati Tanpamu"
    },
    {
        category: "indonesia",
        text: "Ku takkan bisa dustai hatiku, ku harus bersamamu.",
        author: "Etridi",
        song: "Sepenuh Hati"
    },
    {
        category: "indonesia",
        text: "Jika aku harus hidup sepuluh ribu kali lagi, aku tetap memilihmu.",
        author: "Barasuara",
        song: "Terbuang Dalam Waktu"
    },
    {
        category: "indonesia",
        text: "Tuhanpun tahu jikalau aku mencintaimu.",
        author: "Mahadewa",
        song: "Immortal Love Song"
    },
    {
        category: "indonesia",
        text: "Mungkin hanya ada satu bintang yang dapat menghiasi hatiku.",
        author: "Antique",
        song: "Satu Bintang"
    },
    {
        category: "indonesia",
        text: "Mungkin salahku melewatkanmu, tak mencarimu sepenuh hati.",
        author: "Sheila On 7",
        song: "Yang Terlewatkan"
    },
    {
        category: "indonesia",
        text: "Genggam tanganku sayang, kota ini tak seindah dulu.",
        author: "Nadhif Basalamah",
        song: "Kota Ini Tak Seindah Dulu"
    },
    {
        category: "indonesia",
        text: "Perjalanan melintasi kota ini, dua langkah terasa jauh.",
        author: "Nadhif Basalamah",
        song: "Kota Ini Tak Seindah Dulu"
    },
    {
        category: "indonesia",
        text: "Ku tak ingin cepat berlalu, waktu yang kupunya denganmu.",
        author: "Nadhif Basalamah",
        song: "Bergema Sampai Selamanya"
    },
    {
        category: "indonesia",
        text: "Karna bersamamu semua terasa indah.",
        author: "Nadhif Basalamah",
        song: "Penjaga Hati"
    },
    {
        category: "indonesia",
        text: "Bila nanti saatnya tlah tiba, ku ingin kau menjadi istriku.",
        author: "Akad",
        song: "Payung Teduh"
    },
    {
        category: "indonesia",
        text: "Aku berjanji akan selalu menjagamu.",
        author: "Fabio Asher",
        song: "Aku Berjanji"
    },
    {
        category: "bollywood",
        text: "Ke tere bina jeena mumkin nahi, na dena kabhi mujhko tu faasley.",
        author: "Arijit Singh",
        song: "Such Na Sake"
    },
    {
        category: "bollywood",
        text: "Hoke tetho door mein khoya apne aap nu.",
        author: "Anuv Jain",
        song: "Jo Tum Mere Ho"
    },
    {
        category: "bollywood",
        text: "Jaa karna hai toh pyaar kar, ziddi poori kar le.",
        author: "Arijit Singh",
        song: "Ve Kamleya"
    },
    {
        category: "bollywood",
        text: "Chaahe jo tumhe poore dil se, milta hai woh mushkil se.",
        author: "Shankar Ehsaan Loy",
        song: "Kal Ho Na Ho"
    },
    {
        category: "bollywood",
        text: "Lo main qayamat tak hua tera, mere humdam.",
        author: "Arijit Singh",
        song: "O Maahi"
    },
    {
        category: "bollywood",
        text: "Accha chalta hoon, duaaon mein yaad rakhna.",
        author: "Arijit Singh",
        song: "Channa Mereya"
    },
    {
        category: "arab",
        text: "Bi saraha haydi awal marra bheb, bi saraha haydi kezbit kell shab.",
        author: "Abeer Nehme",
        song: "Bi Saraha"
    },
    {
        category: "arab",
        text: "La, bass houwi mannou metlon kellon.",
        author: "Abeer Nehme",
        song: "Bi Saraha"
    },
    {
        category: "arab",
        text: "La, mahlah jrouhi men mahallon.",
        author: "Abeer Nehme",
        song: "Bi Saraha"
    },
    {
        category: "arab",
        text: "Enta eih, mush kifa ya alaik tegrah niharam alaik.",
        author: "Nancy Ajram",
        song: "Enta Eih"
    }
];
