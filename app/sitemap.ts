import type { MetadataRoute } from "next";

const baseUrl = "https://mehulkumawat.vercel.app";

const slugs = [
  "mnist",
  "sensor-fusion",
  "pedestrian-detection",
  "rag-pipeline",
  "barcode-recognition",
  "gesture-recognition",
  "melanoma-detection",
  "llm-finetuning",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = slugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/experience`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/education`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/projects/mnist`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...projectPages,
  ];
}
