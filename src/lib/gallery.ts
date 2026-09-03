import { galleryConfig, extraImages, type GalleryOverride } from "@/data/galleryConfig";

export type GalleryImage = {
  id: string;
  src: string;
  folder: string;
  caption: string;
  order: number;
  hidden: boolean;
  external?: boolean;
};

export const folderDisplayNames: Record<string, string> = {
  ogrod: "Ogród",
  poziom0: "Przyziemie (Poziom 0)",
  poziom1: "Piętro 1",
  poziom2: "Piętro 2",
  poziom3: "Piętro 3 (Poddasze)",
  inne: "Inne",
};

export const folderOrder = ["ogrod", "poziom0", "poziom1", "poziom2", "poziom3", "inne"];

export const LOCAL_KEY = "gallery-overrides-v1";

const files = import.meta.glob("@/assets/Dom Piekiełko/**/*.{jpg,JPG,jpeg,png,webp}", {
  eager: true,
  as: "url",
}) as Record<string, string>;

/** Wszystkie pliki znalezione w src/assets/Dom Piekiełko */
export const baseImages = Object.entries(files)
  .map(([path, src]) => {
    const parts = path.split("/");
    const i = parts.findIndex((p) => p === "Dom Piekiełko");
    const folder = i >= 0 && parts.length > i + 2 ? parts[i + 1] : "inne";
    const file = parts[parts.length - 1];
    return { id: `${folder}/${file}`, src, folder };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

export function readLocalOverrides(): Record<string, GalleryOverride> {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || "{}");
  } catch {
    return {};
  }
}

export function writeLocalOverrides(data: Record<string, GalleryOverride>) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

export function buildGallery(local: Record<string, GalleryOverride> = {}): GalleryImage[] {
  const list: GalleryImage[] = baseImages.map((img, index) => {
    const o = { ...galleryConfig[img.id], ...local[img.id] } as GalleryOverride;
    return {
      id: img.id,
      src: img.src,
      folder: o.folder || img.folder,
      caption: o.caption ?? "Dom Piekiełko",
      order: o.order ?? index,
      hidden: !!o.hidden,
    };
  });

  extraImages.forEach((e, index) => {
    const o = { ...galleryConfig[e.id], ...local[e.id] } as GalleryOverride;
    list.push({
      id: e.id,
      src: e.url,
      folder: o.folder || e.folder,
      caption: o.caption ?? e.caption ?? "Dom Piekiełko",
      order: o.order ?? e.order ?? 1000 + index,
      hidden: !!o.hidden,
      external: true,
    });
  });

  return list.sort((a, b) => a.order - b.order);
}

export function groupByFolder(images: GalleryImage[]) {
  const groups: Record<string, GalleryImage[]> = {};
  images.forEach((img) => {
    (groups[img.folder] ||= []).push(img);
  });
  return Object.entries(groups).sort(([a], [b]) => {
    const ia = folderOrder.indexOf(a);
    const ib = folderOrder.indexOf(b);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
}
