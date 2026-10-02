# Portfólio · Desenvolvedor full-stack freelancer

Landing page em React + Vite para apresentar serviços e projetos.

## Rodando localmente

```bash
npm install
npm run dev
```

## Personalizando

Edite os dados no topo de `src/App.jsx` (contato, serviços, projetos e etapas) e as cores em `:root` no `src/styles.css`.

## Publicando no GitHub Pages

1. Em `vite.config.js`, troque `base` por `'/NOME-DO-REPO/'`.
2. Rode `npm run build` e publique a pasta `dist` (por exemplo com a action oficial do GitHub Pages).

## Subindo para o GitHub

```bash
git init
git add .
git commit -m "Primeira versão da landing page"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
git push -u origin main
```
