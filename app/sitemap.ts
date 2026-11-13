import type { MetadataRoute } from "next";

const paths = [
  "",
  "mengenal-hutan",
  "tentang-kebakaran",
  "penyebab",
  "dampak/manusia",
  "dampak/ekosistem",
  "dampak/geografi",
  "dampak/iklim",
  "lahan-gambut",
  "dampak-jangka-panjang",
  "kasus-indonesia",
  "pencegahan",
  "pemulihan",
  "kuis",
  "referensi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bahaya-kebakaran-hutan.vercel.app";
  return paths.map((path) => ({
    url: path ? base + "/" + path : base,
    lastModified: new Date("2026-11-13"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
