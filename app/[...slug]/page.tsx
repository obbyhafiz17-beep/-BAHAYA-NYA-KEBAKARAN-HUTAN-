import { notFound, redirect } from "next/navigation";

const routeTargets: Record<string, string> = {
  "mengenal-hutan": "hutan",
  "tentang-kebakaran": "kebakaran",
  "penyebab": "penyebab",
  "dampak/manusia": "manusia",
  "dampak/ekosistem": "ekosistem",
  "dampak/geografi": "geografi",
  "dampak/iklim": "iklim",
  "lahan-gambut": "gambut",
  "dampak-jangka-panjang": "jangka-panjang",
  "kasus-indonesia": "indonesia",
  "pencegahan": "pencegahan",
  "pemulihan": "pemulihan",
  "kuis": "kuis",
  "referensi": "referensi",
};

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const target = routeTargets[slug.join("/")];

  if (!target) notFound();
  redirect("/#" + target);
}
