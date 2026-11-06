# meu-portifolio — Lucas Sant'Anna

Site pessoal de desenvolvedor full-stack, feito com Next.js, TypeScript e Tailwind CSS e exportado como site estático.

## Como rodar

Requer Node 20 ou mais novo.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # gera o site estático na pasta out/
```

## Onde editar o conteúdo

Todo o texto fica em `src/conteudo/`, separado do layout:

| Arquivo | O que tem |
| --- | --- |
| `perfil.ts` | nome, cargo, chamada do topo, e-mail, links, foto, idiomas e o texto "Sobre mim" |
| `projetos.ts` | os projetos: problema, solução, arquitetura, decisões, stack e links |
| `carreira.ts` | stack de ponta a ponta, trajetória, formação, certificações e livros |

- **Foto:** coloque o arquivo em `public/` (ex.: `public/lucas.jpg`) e preencha `foto: "/lucas.jpg"` em `perfil.ts`.
- **Capturas dos projetos:** coloque a imagem em `public/projetos/` e preencha `imagem` no projeto.
- **Livros:** adicione `{ titulo, autor }` na lista `livros` em `carreira.ts`.
- **Currículo:** substitua `public/curriculo-lucas-santanna.pdf` pela versão mais recente.

## Design

- Base monocromática no estilo do Geist (Vercel): fundo claro, linhas finas, sem sombras, fonte Geist e Geist Mono para metadados.
- O verde do projeto Eficiência Energética é a única cor de destaque, usada só em links, status e confirmações.
- Moldura de "planta técnica" (linhas laterais e cruzinhas nas seções) e a trajetória no formato de changelog.
- Modo claro, escuro ou automático, escolhido no topo da página.

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Na Vercel, importe o repositório. O framework é detectado como Next.js e não precisa de configuração extra.
