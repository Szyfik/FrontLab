# Modern Web Dev Portfolio

Nowoczesna strona portfolio dla web developera, zbudowana z wykorzystaniem vanilla JavaScript, CSS i HTML.

## Funkcje

- Responsywny design (mobile-first)
- Tryb ciemny/jasny z zapisem preferencji
- Animowane sekcje i interakcje
- Dynamiczny formularz kontaktowy
- Interaktywne karty usług z efektem 3D
- Timeline projektu
- Case studies z interaktywnym sliderem
- Optymalizacja wydajności (Lighthouse Score 90+)
- Strony prawne: Polityka prywatności i Regulamin

## Wymagania

- Nowoczesna przeglądarka internetowa
- Serwer lokalny (opcjonalnie)

## Instalacja

1. Sklonuj repozytorium:
```bash
git clone https://github.com/twoje-repozytorium/portfolio.git
```

2. Przejdź do katalogu projektu:
```bash
cd portfolio
```

3. Otwórz plik `index.html` w przeglądarce lub uruchom lokalny serwer:
```bash
# Używając Python
python -m http.server 8000

# Używając Node.js
npx serve
```

## Struktura projektu

```
portfolio/
├── index.html
├── about.html
├── contact.html
├── services.html
├── privacy-policy.html
├── terms.html
├── css/
│   ├── style.css
│   ├── animations.css
│   └── dark-mode.css
├── js/
│   ├── main.js
│   ├── animations.js
│   └── dark-mode.js
├── images/
└── README.md
```

## Dostosowanie

1. Zmień zawartość w `index.html` na własną
2. Dostosuj kolory w pliku `css/style.css` (zmienne CSS)
3. Dodaj własne obrazy do katalogu `images/`
4. Zmodyfikuj animacje w `css/animations.css`

## Dokumenty prawne

W stopce każdej podstrony znajdują się linki do:
- [Polityka prywatności](privacy-policy.html)
- [Regulamin](terms.html)

## Optymalizacja

- Wszystkie obrazy są zoptymalizowane
- CSS jest minifikowany
- JavaScript jest minifikowany
- Używane są lazy loading dla obrazów
- Implementowany jest service worker dla PWA

## Licencja

MIT

## Autor

Filip Szykulski

## Kontakt

- Email: szykulskifilip@icloud.com
- LinkedIn: linkedin.com/in/example
- Portfolio: https://szyfik.github.io/FrontLab/

git add .
git commit -m "Opis zmian"
git push origin main