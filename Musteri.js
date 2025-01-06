class customer extends MigrosBase{
    constructor(isim, soyisim,kartVarmi, urunler){
      super(isim, soyisim, kartVarmi,urunler);
    }

    hesapla(){
     return super.hesapla();
    }
  
}