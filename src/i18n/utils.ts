import idStrings from './id.json';
import enStrings from './en.json';

type NestedRecord = { [key: string]: string | NestedRecord };
const translations: Record<string, NestedRecord> = { id: idStrings, en: enStrings };

export function t(lang: string, key: string): string {
  const strings = translations[lang] || translations.id;
  const result = key.split('.').reduce<string | NestedRecord | undefined>(
    (obj, k) => (typeof obj === 'object' ? obj[k] : undefined),
    strings
  );
  return typeof result === 'string' ? result : key;
}
