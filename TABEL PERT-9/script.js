function simpan() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;
    const presensiTeori = parseFloat(document.getElementById('presensi-teori').value) || 0;
    const tugasTeori = parseFloat(document.getElementById('tugas-teori').value) || 0;
    const utsTeori = parseFloat(document.getElementById('uts-teori').value) || 0;
    const uasTeori = parseFloat(document.getElementById('uas-teori').value) || 0;
    const presensiPraktik = parseFloat(document.getElementById('presensi-praktik').value) || 0;
    const tugasPraktik = parseFloat(document.getElementById('tugas-praktik').value) || 0;
    const utsPraktik = parseFloat(document.getElementById('uts-praktik').value) || 0;
    const uasPraktik = parseFloat(document.getElementById('uas-praktik').value) || 0;

    const nilaiAkhirTeori = (presensiTeori + tugasTeori + utsTeori + uasTeori) / 4;
    const nilaiAkhirPraktik = (presensiPraktik + tugasPraktik + utsPraktik + uasPraktik) / 4;
    const nilaiAkhir = (nilaiAkhirTeori + nilaiAkhirPraktik) / 2;

    let grade;
    if (nilaiAkhir >= 80) {
        grade = 'A';
    } else if (nilaiAkhir >= 70) {
        grade = 'B';
    } else if (nilaiAkhir >= 60) {
        grade = 'C';
    } else if (nilaiAkhir >= 50) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    const tabel = document.getElementById('tabel-nilai').getElementsByTagName('tbody')[0];
    const row = tabel.insertRow();
    row.insertCell(0).innerHTML = tabel.rows.length;
    row.insertCell(1).innerHTML = nim;
    row.insertCell(2).innerHTML = nama;
    row.insertCell(3).innerHTML = ((presensiTeori + presensiPraktik) / 2).toFixed(2);
    row.insertCell(4).innerHTML = ((tugasTeori + tugasPraktik) / 2).toFixed(2);
    row.insertCell(5).innerHTML = ((utsTeori + utsPraktik) / 2).toFixed(2);
    row.insertCell(6).innerHTML = ((uasTeori + uasPraktik) / 2).toFixed(2);
    row.insertCell(7).innerHTML = nilaiAkhir.toFixed(2);
    row.insertCell(8).innerHTML = grade;

    reset();
}

function reset() {
    document.getElementById('nim').value = '';
    document.getElementById('nama').value = '';
    document.getElementById('presensi-teori').value = '';
    document.getElementById('tugas-teori').value = '';
    document.getElementById('uts-teori').value = '';
    document.getElementById('uas-teori').value = '';
    document.getElementById('presensi-praktik').value = '';
    document.getElementById('tugas-praktik').value = '';
    document.getElementById('uts-praktik').value = '';
    document.getElementById('uas-praktik').value = '';
}