// script modul konsumen dan modul keuangan
var pc = new Array;
var hardware = new Array;
var indeks = 0;
var hargapc = 0;
var hargahardware = 0;
var tothar = 0;
var nama = [], tanggal = [], alamat = [], nomorhp = [], bukti = [];
var i = 0;
function KirimData()
{
    nama[i] = document.getElementById("txtNama").value;
    tanggal[i] =document.getElementById("txtTanggal").value;
    alamat[i] = document.getElementById("txtAlamat").value;
    nomorhp[i] = document.getElementById("txtHp").value;
    bukti[i] = document.getElementById("Bukti").value;

    document.getElementById("tblNama").innerHTML +=nama[i] + "<br>";
    document.getElementById("tblTanggal").innerHTML +=tanggal[i] + "<br>";
    document.getElementById("tblAlamat").innerHTML +=alamat[i] + "<br>";
    document.getElementById("tblNomorhp").innerHTML +=nomorhp[i] + "<br>";
    document.getElementById("tblPC").innerHTML +=pc[indeks] + "<br>";
    document.getElementById("tblHardware").innerHTML +=hardware[indeks] + "<br>";
    document.getElementById("tblHargaPC").innerHTML +=hargapc + "<br>";
    document.getElementById("tblHargaHardware").innerHTML +=hargahardware + "<br>";
    document.getElementById("tblTotal").innerHTML +=tothar + "<br>";
    document.getElementById("tblBuktiTF").innerHTML +=bukti[i] + "<br>";

    document.getElementById("txtNama").value ='';
    document.getElementById("txtTanggal").value ='';
    document.getElementById("txtAlamat").value ='';
    document.getElementById("txtHp").value ='';
    document.getElementById("Bukti").value ='';
    pc[indeks] = document.getElementById("PC").value ='';
    hardware[indeks] = document.getElementById("Hardware").value ='';
    document.getElementById("lblHargaPC").innerHTML = '';
    document.getElementById("lblHargaHardware").innerHTML = '';
    document.getElementById("lblTotal").innerHTML = '';

    if (nama[i] != "" && tanggal[i]!="" && alamat[i]!="" && nomorhp[i]!="" && bukti[i]!="") 
    {
        return true + alert('Terimakasih sudah memesan ditoko kami, tunggu barang anda dikirim dan nanti akan dihubungi oleh admin ke nomor anda')
    }
    else
    {
        alert('Anda harus mengisi data dengan lengkap !');
    }

}
function PC(pc)
{
    if (pc[indeks] == "Asus") {
        hargapc = 2500000;
    } else if (pc[indeks] == "Toshiba") {
        hargapc = 6500000;
    } else if (pc[indeks] == "Acer") {
        hargapc = 4000000;
    } else if (pc[indeks] == "Samsung") {
        hargapc = 7500000;
    }else{
        hargapc = 0;
    }
    return hargapc;
}
function Hardware(hardware)
{
    if (hardware[indeks] == "Mouse") {
        hargahardware = 250000;
    } else if (hardware[indeks] == "Keyboard") {
        hargahardware = 650000;
    } else if (hardware[indeks] == "Speaker") {
        hargahardware = 200000;
    } else if (hardware[indeks] == "Ram") {
        hargahardware = 550000;
    }else{
        hargahardware = 0;
    }
    return hargahardware;
}
function Tothar(hargapc,hargahardware)
{
    tothar = hargapc + hargahardware;
    return tothar;
}
function Data()
{
    pc[indeks] = document.getElementById("PC").value;
    hargapc = PC(pc);
    document.getElementById("lblHargaPC").innerHTML = hargapc;
    hardware[indeks] = document.getElementById("Hardware").value;
    hargahardware = Hardware(hardware);
    document.getElementById("lblHargaHardware").innerHTML = hargahardware;
    tothar = Tothar(hargapc,hargahardware);
    document.getElementById("lblTotal").innerHTML = tothar;
    
}
//script untuk modul kasir

var namak = [], tanggalp = [], tanggalpr = [];
var pck = new Array;
var hardwarek = new Array;
var hargapck = 0;
var hargahardwarek = 0;
var tothark = 0;
var kembali = 0;
var bayar = 0;
function Kasir()
{
    namak[i] = document.getElementById("txtNamaK").value;
    tanggalp[i] = document.getElementById("txtTanggalP").value;
    tanggalpr[i] = document.getElementById("txtTanggalPr").value;

    document.getElementById("lblNamaK").innerHTML = namak[i];
    document.getElementById("lblTanggalP").innerHTML = tanggalp[i];
    document.getElementById("lblTanggalProses").innerHTML = tanggalpr[i];
    document.getElementById("lblPCKasir").innerHTML = pck[indeks];
    document.getElementById("lblHardwareKasir").innerHTML = hardwarek[indeks];
    document.getElementById("lblHrgPC").innerHTML = hargapck;
    document.getElementById("lblHrgHardware").innerHTML = hargahardwarek;
    document.getElementById("lblTot").innerHTML = tothark;
    bayar = document.getElementById("txtBayar").value;
    document.getElementById("lblBayar").innerHTML = bayar;
    kembali = Kembali(tothark,bayar)
    document.getElementById("lblKembali").innerHTML = kembali;
    document.getElementById("lblSusuk").innerHTML = kembali;
}
function Reset()
{
    document.getElementById("txtNamaK").value = '';
    document.getElementById("txtTanggalP").value = '';
    document.getElementById("txtTanggalPr").value = '';
    document.getElementById("lblNamaK").innerHTML = '';
    document.getElementById("lblTanggalP").innerHTML = '';
    document.getElementById("lblTanggalProses").innerHTML = '';
    document.getElementById("lblPCKasir").innerHTML = '';
    document.getElementById("lblHardwareKasir").innerHTML = '';
    document.getElementById("lblHrgPC").innerHTML = '';
    document.getElementById("lblHrgHardware").innerHTML = '';
    document.getElementById("lblTot").innerHTML = '';
    document.getElementById("txtBayar").value = '';
    document.getElementById("lblBayar").innerHTML = '';
    document.getElementById("lblKembali").innerHTML = '';
    document.getElementById("lblSusuk").innerHTML = '';
    pck[indeks] = document.getElementById("KasirPC").value = '';
    hardwarek[indeks] = document.getElementById("KasirHardware").value = '';
}
function PCk(pck)
{
    if (pck[indeks] == "Asus") {
        hargapck = 2500000;
    } else if (pck[indeks] == "Toshiba") {
        hargapck = 6500000;
    } else if (pck[indeks] == "Acer") {
        hargapck = 4000000;
    } else if (pck[indeks] == "Samsung") {
        hargapck = 7500000;
    }else{
        hargapck = 0;
    }
    return hargapck;
}
function Hardwarek(hardwarek)
{
    if (hardwarek[indeks] == "Mouse") {
        hargahardwarek = 250000;
    } else if (hardwarek[indeks] == "Keyboard") {
        hargahardwarek = 650000;
    } else if (hardwarek[indeks] == "Speaker") {
        hargahardwarek = 200000;
    } else if (hardwarek[indeks] == "Ram") {
        hargahardwarek = 550000;
    }else{
        hargahardwarek = 0;
    }
    return hargahardwarek;
}

function Tothar(hargapck,hargahardwarek)
{
    tothark = hargapck + hargahardwarek;
    return tothark;
}
function totalharga()
{
    tothark = Tothar(hargapck,hargahardwarek)
    document.getElementById("lblTotKasir").innerHTML = tothark;
}
function DataK()
{
    pck[indeks] = document.getElementById("KasirPC").value;
    hargapck = PCk(pck);
    document.getElementById("lblHargaPcK").innerHTML = hargapck;
    hardwarek[indeks] = document.getElementById("KasirHardware").value;
    hargahardwarek = Hardwarek(hardwarek);
    document.getElementById("lblHargaHardwareK").innerHTML = hargahardwarek;
}

function Kembali(tothark,bayar)
{

    kembali = bayar - tothark;
    return kembali;
}

// script modul stok barang
function StokPc()
{
    var kodepc = [], barangpc = [], typepc = [], hargapcb = [];

    kodepc[i] = document.getElementById("txtKode").value;
    barangpc[i] = document.getElementById("txtBarang").value;
    typepc[i] = document.getElementById("txtType").value;
    hargapcb[i] = document.getElementById("txtHarga").value;

    document.getElementById("tblKodeBarang").innerHTML +=kodepc[i] + "<br>";
    document.getElementById("tblNamaBarang").innerHTML +=barangpc[i] + "<br>";
    document.getElementById("tblType").innerHTML +=typepc[i] + "<br>";
    document.getElementById("tblHargaBarang").innerHTML +=hargapcb[i] + "<br>" ;

    document.getElementById("txtKode").value = '';
    document.getElementById("txtBarang").value = '';
    document.getElementById("txtType").value = '';
    document.getElementById("txtHarga").value = '';
}

function StokHardware()
{
    var  kodehardware = [], baranghardware = [], typehardware = [], hargahardwareb = [];
    
    kodehardware[i] = document.getElementById("txtKodeH").value;
    baranghardware[i] = document.getElementById("txtBarangH").value;
    typehardware[i] = document.getElementById("txtTypeH").value;
    hargahardwareb[i] = document.getElementById("txtHargaH").value;

    document.getElementById("tblKodeBarangH").innerHTML +=kodehardware[i] + "<br>";
    document.getElementById("tblNamaBarangH").innerHTML +=baranghardware[i] + "<br>";
    document.getElementById("tblTypeH").innerHTML +=typehardware[i] + "<br>";
    document.getElementById("tblHargaBarangH").innerHTML +=hargahardwareb[i] + "<br>"; 

    document.getElementById("txtKodeH").value = '';
    document.getElementById("txtBarangH").value = '';
    document.getElementById("txtTypeH").value = '';
    document.getElementById("txtHargaH").value = '';
}