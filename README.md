# JSM — Site Institucional

Site institucional da **JSM Consultoria de TI**, desenvolvido com React e Vite.

## Tecnologias

- React 19
- TypeScript
- Vite

## Como executar

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Build para produção

```bash
npm run build
npm run preview
```

## Estrutura

- `src/components/` — Componentes do site (Header, Hero, Sobre, Serviços, etc.)
- `src/App.tsx` — Composição das seções
- `src/index.css` — Estilos globais e variáveis de tema

## Personalização

- Atualize o e-mail de contato em `src/components/Contact.tsx`
- Ajuste textos e informações da equipe em `src/components/Team.tsx`
- O formulário de contato exibe confirmação local; integre com um backend ou serviço (ex.: Formspree, EmailJS) conforme necessário
