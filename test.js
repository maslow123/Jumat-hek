    function cariKata(input,cari)
    {
        let hasil = 0;
        let hurufInput = input.length;
        let hurufCari = cari.length;
        for(let i=0; i<hurufInput;i++)
        {
            let gabungan = i+hurufCari;
            let potongHuruf = input.substr(i,hurufCari);
            if(potongHuruf == cari)
            {
                hasil++;
            }
        }
        for(let a=hurufInput;a>0;a--)
        {
            let gabungan = a+hurufCari;
            let potongHuruf = input.substr(a,hurufCari);
            if(potongHuruf == cari)
            {
                hasil++;
            }
        }   
        console.log(hasil) ;
    }
    cariKata('banananana','nana');