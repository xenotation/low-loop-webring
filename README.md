# Под Нет

A small [webring](https://en.wikipedia.org/wiki/Webring) run and developed by artist and independent theorist [Nikola Stoyanov](https://newdegeneration.xyz/bio/).

This webring showcases web-based endpoints for the work of artists, theorists, and researchers — mainly, but not limited to, Bulgaria.  
The site is handcrafted in **HTML, CSS, and JavaScript** with a minimalist design that prioritizes clarity and accessibility. The number of slots is intentionally limited and available on a per-request basis.  

It is an exercise in **simplicity**: no frameworks, no databases, no server logic. Just static files, with contributions handled openly via GitHub.  

---

## ✨ Purpose

Под Нет attempts to inspire artists, theorists, and developers to build their own websites and share traffic amongst one another — a small gesture against the endless spam and disposability of Web 2.0 and beyond.  
The ring welcomes hand-crafted portfolios, blogs, projects, and anything weird, strange, or interesting that could fit into our little hangout.  

---

## 🛠️ Technical Details

- **Stack**: Pure HTML, CSS, JavaScript.  
- **Design**:  
  - Borders styled with [Broider](https://maxbittker.github.io/broider/).  
  - Includes [Neko 3.0](https://webneko.net/), a software pet cat chasing the cursor.  
  - Typeface: **US Military Standard MS33558C** (1968).  
- **GitHub Action**:  
  - On each push, a workflow parses `data.json`.  
  - Placeholder entries (`▓▓▓▓▓▓▓▓`) are removed.  
  - A valid JSON-LD schema is generated from the data.  
  - The action **rewrites `index.html`**, embedding the schema statically into the HTML for optimal SEO (no client-side injection).  

This approach keeps the project transparent, reproducible, and sustainable. It is static, fast, and easy to maintain.

---

## 🌐 Joining the Ring

You are welcome to join by either:  
1. Submitting a [pull request on GitHub](https://github.com/xenotation/webring/pulls).  
2. Writing directly with your info: [av0id.biz@gmail.com](mailto:av0id.biz@gmail.com).  

---

## 📖 Cultural Notes

The project references traditions of **net art** and early internet culture.  
- It reuses playful artifacts like Neko (originally **NEKO.COM** on NEC PC-9801 in the 1980s, by Naoshi Watanabe 若田部 直). [Read its history](https://eliotakira.com/neko/).  
- Its visual austerity is deliberate, echoing mid-20th-century design systems while embracing the unfinished, DIY ethos of the early web.  

---

## 📬 Contact

For inquiries, collaborations, or just to talk about weird websites:  
**Email** → [av0id.biz@gmail.com](mailto:av0id.biz@gmail.com)  
**Creator site** → [newdegeneration.xyz](https://newdegeneration.xyz)
