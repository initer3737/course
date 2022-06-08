class Database{
        static call=(time)=>time<10?'0'+time:time;
        static detik() {
            let time=new Date();
                setTimeout("Database.detik()",1000);
            let detik=this.call(time.getSeconds());
            let menit=this.call(time.getMinutes());
            let jam=this.call(time.getHours());
                let status="";
                if(jam >= 11 && jam<=14){
                    status="siang"
                }else if(jam<=10 ){
                    status="pagi";
                }else if(jam>=15 && jam<=17){
                    status="sore";
                }else if(jam>=18 && jam <=24){
                    status="malam";
                }
        
                //tanggal
            let tangals=[
                'januari',
                'februari',
                'maret',
                'april',
                'mei',
                'juni',
                'juli',
                'agustus',
                'september',
                'oktober',
                'november',
                'desember'
            ];
            //hari
            let haris=[
                    'minggu',
                    'senin',
                    'selasa',
                    'Rabu',
                    'Kamis',
                    "Jum'at",
                    'Sabtu'
            ];
                let tanggal=time.getDate();
                let hari=haris[time.getDay()];
                let bulan=tangals[time.getMonth()];
                let tahun=time.getFullYear();
                let tanggals=`${hari} ${tanggal} ${bulan} ${tahun}`;  
            let jam2=`jam : ${jam} : ${menit} : ${detik} ${status} : Hari ${tanggals}`;    
              
            document.getElementById('jam').innerHTML=jam2;
        }
        
   static Rilis(){
       let launch="Telah Rilis Senin 18 November 2021";
       document.getElementById('rilis').innerHTML=launch;
   }

 static Versi(){
       let launch="Versi Beta 0.3";
       document.getElementById('versi').innerHTML=launch;
   }

   static lastUpdate(){
       let updated="Terakhir Diupdate rabu kliwon, 08 juni 2022 Pukul 10 : 42 pagi";
       document.getElementById('update?').innerHTML=updated;
   }
   
    static TanggalJawa(){
        let javaDates = [
            'Mikul Dhuwur Mendem Jero',
            'Bechik Ketitik Ala Ketara',
            'Ana Dina Ana Upa',
            'Kena Iwake Aja Nganti Buthek Banyune',
            'Aja kuminter Mundak Keblinger Aja Cidra Mundak Cilaka' ,
            'Sapa Sira Sapa Ingsun' ,
            'Nabok Nyilih Tangan'
        ];
        let javaDate = new Date().getDay();
        let javaTime=`" ${javaDates[javaDate]} "`;
        document.getElementById('pasaran').innerHTML=javaTime;
    }

    static Quotes(){
        let datas=[ 'kuote 1','kuote 2','kuote 3','kuote 4','kuote 5','kuote 6' ];
        document.getElementById('quotes').innerHTML=datas.random;
    }
}//end of database
window.setTimeout("Database.detik()",1000);
Database.detik();
Database.Rilis();
Database.Versi();
Database.lastUpdate();
Database.TanggalJawa();
Database.Quotes();
