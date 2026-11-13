import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24, color: "#f4f3eb", background: "#10291d", textAlign: "center" }}>
      <div style={{ maxWidth: 520 }}>
        <p style={{ color: "#b7cf9c", letterSpacing: ".2em", fontSize: 11 }}>HALAMAN TIDAK DITEMUKAN</p>
        <h1 style={{ font: "400 clamp(42px,8vw,72px)/1 Georgia,serif", margin: "20px 0" }}>Kembali ke <em>hutan.</em></h1>
        <p style={{ color: "#c3cec3", lineHeight: 1.8 }}>Sepertinya jalur yang kamu cari belum tersedia. Kembali ke halaman utama untuk menjelajahi cerita tentang hutan dan kebakaran.</p>
        <Link href="/" style={{ display: "inline-block", marginTop: 20, borderRadius: 999, padding: "13px 20px", color: "#173b27", background: "#e6efda", fontWeight: 700, fontSize: 13 }}>Kembali ke beranda →</Link>
      </div>
    </main>
  );
}
