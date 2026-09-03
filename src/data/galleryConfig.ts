// Trwała konfiguracja galerii (widoczna dla wszystkich odwiedzających).
// Wygeneruj nową zawartość w ukrytym panelu (/panel) przyciskiem "Kopiuj konfigurację"
// i wklej ją poniżej, aby zmiany zostały zapisane na stałe.

export type GalleryOverride = {
  /** Ukryj zdjęcie w galerii */
  hidden?: boolean;
  /** Podpis / tekst alternatywny */
  caption?: string;
  /** Kolejność (mniejsza liczba = wcześniej) */
  order?: number;
  /** Przenieś do innej sekcji, np. "ogrod" */
  folder?: string;
};

/** Klucz = nazwa pliku, np. "poziom1/IMG-1234.jpg" */
export const galleryConfig: Record<string, GalleryOverride> = {};

/** Dodatkowe zdjęcia z zewnętrznych adresów URL */
export const extraImages: Array<{
  id: string;
  url: string;
  folder: string;
  caption?: string;
  order?: number;
}> = [];
