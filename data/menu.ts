export type MenuItem = {
  name: string;
  /** TL fiyat; belirli olmayanlar için undefined bırakılır. */
  price?: number;
  /** Özel durum notu (ör. “Fiyat için sorunuz”). */
  note?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  icon?: string;
  items: MenuItem[];
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "corbalar",
    name: "Çorbalar",
    icon: "🥣",
    items: [
      { name: "Mercimek", price: 100 },
      { name: "Ezogelin", price: 100 },
      { name: "Tavuk Suyu", price: 150 },
      { name: "İşkembe - Kelle Paça", price: 200 },
    ],
  },
  {
    id: "zeytinyaglilar",
    name: "Zeytinyağlılar",
    icon: "🫒",
    items: [
      { name: "Yaprak Sarma", price: 200 },
      { name: "Taze Fasülye", price: 150 },
      { name: "Kuru Biber - Patlıcan Dolma", price: 200 },
      { name: "Bamya", price: 250 },
      { name: "Barbunya", price: 150 },
      { name: "Mücver", price: 200 },
      { name: "Dolma", price: 200 },
      { name: "Semizotu", price: 150 },
      { name: "Türlü", price: 150 },
      { name: "Enginar", price: 200 },
      { name: "Bakla", price: 150 },
      { name: "Karışık Kızartma", price: 200 },
      { name: "Pırasa Graten", price: 200 },
    ],
  },
  {
    id: "pilav-makarna",
    name: "Pilavlar · Makarna",
    icon: "🍚",
    items: [
      { name: "Pirinç Pilavı", price: 60 },
      { name: "Bulgur Pilavı", price: 60 },
      { name: "Fırın Makarna", price: 150 },
      { name: "Makarna", price: 60 },
      { name: "Kuru Fasülye", price: 150 },
      { name: "Nohut", price: 150 },
    ],
  },
  {
    id: "etli-yemekler",
    name: "Etli Yemekler",
    icon: "🍽️",
    items: [
      { name: "Kokoreç", price: 350 },
      { name: "İzmir Köfte", price: 250 },
      { name: "Beğendili Köfte", price: 400 },
      { name: "Hasanpaşa Köfte", price: 350 },
      { name: "Ekşili Köfte", price: 250 },
      { name: "Kuzu İncik", price: 650 },
      { name: "Karnıyarık", price: 250 },
      { name: "Musakka", price: 250 },
      { name: "Saray Kebabı", price: 400 },
      { name: "Abant Kebabı", price: 300 },
      { name: "Ciğer Sarma", price: 300 },
      { name: "Arnavut Ciğeri", price: 400 },
      { name: "Patlıcan Kebabı", price: 300 },
      { name: "Orman Kebabı", price: 300 },
      { name: "Çiftlik Kebabı", price: 300 },
      { name: "Oğlak Tandır", price: 650 },
      { name: "Acılı Dana Eti", price: 650 },
      { name: "Kavurma", price: 650 },
      { name: "Topkapı Piliç", price: 300 },
      { name: "Püreli Tavuk", price: 300 },
      { name: "Mantar Sote", price: 250 },
      { name: "Tavuk Sote", price: 250 },
      { name: "Tavuk But", price: 250 },
      { name: "Tavuk Kanat Fırında", price: 250 },
      { name: "Çıtır Tavuk", price: 250 },
      { name: "Körili Tavuk", price: 250 },
      { name: "Keşkek", price: 200 },
      { name: "Analı Kızlı", price: 250 },
      { name: "Krep Sarma", price: 250 },
      { name: "İçli Köfte (Adet)", price: 80 },
      { name: "Kadın Budu (Adet)", price: 80 },
    ],
  },
  {
    id: "salatalar",
    name: "Salatalar · Yoğurt",
    icon: "🥗",
    items: [
      { name: "Çoban Salata Tek", price: 100 },
      { name: "Yeşil Salata Tek", price: 100 },
      { name: "Cacık", price: 80 },
      { name: "Yoğurt", price: 80 },
    ],
  },
  {
    id: "tatlilar",
    name: "Tatlılar",
    icon: "🍮",
    items: [
      { name: "Sakızlı Muhallebi", price: 150 },
      { name: "Kazandibi", price: 150 },
      { name: "İrmik Helvası", price: 150 },
      { name: "Kemalpaşa", price: 150 },
      { name: "Kabak Tatlısı", price: 150 },
      { name: "Atom", price: 200 },
    ],
  },
  {
    id: "mantı",
    name: "Mantı",
    icon: "🥟",
    items: [{ name: "Mantı", price: 400 }],
  },
  {
    id: "icecekler",
    name: "İçecekler",
    icon: "🥤",
    items: [
      { name: "Kutu İçecekler", price: 80 },
      { name: "Şişe İçecekler", price: 60 },
      { name: "Ayran Kutu Büyük", price: 50 },
      { name: "Küçük Açık", price: 40 },
      { name: "Su", price: 20 },
      { name: "Soda", price: 40 },
      { name: "Meyvalı Soda", price: 50 },
      { name: "Şalgam", price: 80 },
    ],
  },
  {
    id: "balik",
    name: "Balık",
    icon: "🐟",
    items: [
      {
        name: "Günün Balığı",
        note: "Fiyat için sorunuz",
      },
    ],
  },
];

