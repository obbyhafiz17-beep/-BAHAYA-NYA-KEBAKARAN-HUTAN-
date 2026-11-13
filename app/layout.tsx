import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bahaya-kebakaran-hutan.vercel.app"),
  title: {
    default: "Bahaya Kebakaran Hutan — Ketika Hutan Terbakar, Kehidupan Ikut Terdampak",
    template: "%s | Bahaya Kebakaran Hutan",
  },
  description:
    "Dokumenter edukasi interaktif tentang bahaya kebakaran hutan dan lahan: dampak bagi manusia, satwa, ekosistem, tanah, air, udara, serta iklim.",
  keywords: [
    "kebakaran hutan",
    "karhutla",
    "kabut asap",
    "lingkungan",
    "hutan Indonesia",
    "lahan gambut",
    "edukasi lingkungan",
  ],
  openGraph: {
    title: "Bahaya Kebakaran Hutan",
    description:
      "Ketika hutan terbakar, bukan hanya pepohonan yang kehilangan kehidupan.",
    type: "website",
    locale: "id_ID",
    siteName: "Bahaya Kebakaran Hutan",
    images: [
      {
        url: "https://images.unsplash.com/photo-1751709851583-d12755eb65ea?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hutan yang terdampak kebakaran dan asap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bahaya Kebakaran Hutan",
    description: "Pelajari dampak karhutla terhadap kehidupan dan bumi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#102b20",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
