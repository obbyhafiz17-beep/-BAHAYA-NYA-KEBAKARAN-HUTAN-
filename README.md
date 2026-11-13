# Bahaya Kebakaran Hutan

Website edukasi interaktif berbahasa Indonesia tentang kebakaran hutan dan lahan (karhutla).

## Fitur
- Storytelling visual: hutan hidup → ancaman kebakaran → dampak → pemulihan.
- Materi edukasi tentang manusia, ekosistem, tanah, air, udara, iklim, dan gambut.
- Penjelajah dampak, slider transformasi hutan, simulasi sebab-akibat konseptual, lapisan gambut interaktif, mitos/fakta, dan kuis.
- Grafik historis yang menyertakan keterangan sumber dan metode.
- Kartu fakta vertikal dan fitur berbagi menggunakan Web Share API.
- Responsif, tanpa login, tanpa database, dan tanpa API key.

## Jalankan secara lokal
Memerlukan Node.js 20.9 atau lebih baru.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Pemeriksaan
```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy
Hubungkan repository ini ke Vercel dan gunakan pengaturan Next.js otomatis. Tidak ada environment variable wajib.

## Data dan akurasi
Angka luas karhutla ditampilkan dengan sumber, rentang tahun, serta catatan bahwa data antarseri dapat berbeda karena metode dan pembaruan. Hotspot satelit adalah anomali termal, bukan garis batas area terbakar dan bukan sistem peringatan keselamatan.

## Foto
Foto Unsplash dipakai sebagai visual pendukung. Periksa halaman sumber/ketentuan lisensi ketika mengganti atau menerbitkan ulang aset visual.
