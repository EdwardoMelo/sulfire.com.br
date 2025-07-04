# Sulfire - Site Institucional

Este é o repositório do site institucional da empresa Sulfire, desenvolvido com foco em apresentação de produtos. O projeto utiliza as seguintes tecnologias:

- [Vite](https://vitejs.dev/) para build e desenvolvimento rápido
- [Material UI](https://mui.com/) para componentes visuais modernos
- [Framer Motion](https://www.framer.com/motion/) para animações fluidas
- Multipágina e responsivo

## Como rodar o projeto

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/sulfire-site.git
    cd sulfire-site
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Configure o Firebase Storage:**
    - Crie um projeto no [Firebase](https://console.firebase.google.com/).
    - Obtenha as credenciais de acesso (configuração do Firebase).
    - Crie um arquivo `.env` na raiz do projeto e adicione suas credenciais conforme o modelo abaixo:

      ```
      VITE_FIREBASE_API_KEY=...
      VITE_FIREBASE_AUTH_DOMAIN=...
      VITE_FIREBASE_PROJECT_ID=...
      VITE_FIREBASE_STORAGE_BUCKET=...
      VITE_FIREBASE_MESSAGING_SENDER_ID=...
      VITE_FIREBASE_APP_ID=...
      ```

4. **Inicie o projeto:**
    ```bash
    npm run dev
    ```

## Funcionalidades

- **Multipágina:** Estrutura organizada para diferentes seções da empresa/produtos.
- **Responsivo:** Layout adaptável para dispositivos móveis e desktops.
- **Fácil deploy:** Pronto para ser hospedado em qualquer serviço de static hosting.



Feito com ❤️ por Sulfire.