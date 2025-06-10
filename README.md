# 🎬 Prime Flix

Aplicação web desenvolvida com React que permite visualizar filmes populares, acessar detalhes, salvar e gerenciar uma lista de filmes favoritos, tudo isso consumindo dados da API pública da [The Movie Database (TMDb)](https://www.themoviedb.org/).

---

## 🔗 Deploy

➡️ Acesse o [Prime Flix](#) <!-- Substitua '#' pela URL do seu deploy, se houver -->

---

## 📸 Preview

<!-- Adicione aqui uma imagem ou gif do projeto -->

---

## 🚀 Funcionalidades

- 🔍 Listar os filmes populares em exibição.
- 📝 Ver detalhes de cada filme (sinopse, nota, imagem).
- ⭐ Salvar filmes favoritos (armazenamento local).
- ❌ Remover filmes da lista de favoritos.
- ⚠️ Página de erro 404 personalizada.
- ✅ Notificações de ações com `react-toastify`.

---

## 🛠️ Tecnologias utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [TMDb API](https://www.themoviedb.org/documentation/api)

---

## 📂 Estrutura de Pastas

src/
├── components/
│ └── Header/
├── pages/
│ ├── Home/
│ ├── Filme/
│ ├── Favoritos/
│ └── Erro/
├── services/
│ └── api.js
├── routes.js
└── App.js


---

## ⚙️ Como executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/primeflix.git

# Acesse a pasta do projeto
cd primeflix

# Instale as dependências
npm install

# Crie um arquivo .env com a chave da API
echo "REACT_APP_API_KEY=SUA_CHAVE_API" > .env

# Inicie o projeto
npm start

```

 Obs: A chave da API pode ser obtida gratuitamente em https://www.themoviedb.org/.

⚠️ Nunca exponha sua chave pública em repositórios sem uso de .env e .gitignore corretamente configurados!

✅ Melhorias futuras
🔎 Campo de busca de filmes

💬 Sistema de comentários ou avaliações

👤 Login para salvar favoritos em nuvem

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
