let mesaj = 
`Migrosa Hosgeldiniz
Money Kartiniz varmi ?
1- Evet
2- Hayir
`

let sonuc = confirm(mesaj);
let odenecekTutar;
let urunler =
[
    {
        urunIsmi :" Sut",
        fiyat : 15,
    },
    {
        urunIsmi :"MeyveSuyu",
        fiyat : 10,
    },
    {
        urunIsmi :"Makarna",
        fiyat : 15,
    },  
]

if(sonuc){
    let isim= prompt('Lutfen isminizi giriniz :');
    let soyisim = prompt('Soyisminizi giriniz :');

    const Customer = new customer(isim, soyisim,sonuc,urunler);

        odenecekTutar = Customer.hesapla();

        alert(
            `Musteri Bilgileri : ${Customer.isim} ${Customer.soyisim}
             OdenecekTutar : ${odenecekTutar}   
            `);

}else{
    const  Customer = new customer(null,null,sonuc,urunler);
    odenecekTutar = Customer.hesapla();
    alert(`OdenecekTutar : ${odenecekTutar}`)
}