import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./locales/en.json"
import ja from "./locales/ja.json"

export type Language = "en" | "ja"

export const LANGUAGE_STORAGE_KEY = "lng"

export function getStoredLanguage(): Language {
	const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
	return stored === "ja" || stored === "en" ? stored : "en"
}

export function setLanguage(language: Language): Promise<any> {
	localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
	return i18n.changeLanguage(language)
}

void i18n
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			ja: { translation: ja },
		},
		lng: getStoredLanguage(),
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
