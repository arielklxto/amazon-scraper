## VERSÃO EM PORTUGUÊS

# Amazon Product Scraper

Este é um simples projeto de raspagem de produtos da Amazon, que permite buscar produtos com base em uma palavra-chave e exibir informações relevantes como título, avaliação, número de avaliações e URL da imagem do produto.

## Configuração e Execução

### Pré-requisitos

- Node.js (https://nodejs.org)

### Passos para Configuração

1. Clone este repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd amazon-scraper
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor:
    ```bash
    node index.js
    ```

4. Abra seu navegador e acesse:
    ```
    http://localhost:3000/index.html
    ```

### Funcionalidades

- Busca produtos na Amazon com base em uma palavra-chave.
- Exibe título, avaliação, número de avaliações e imagem de cada produto encontrado.

### Estrutura do Projeto

amazon-scraper/

├── node_modules/

├── package.json

├── package-lock.json

├── index.js

└── index.html


### Tratamento de Erros

- O backend verifica se a palavra-chave foi fornecida e retorna um erro se não foi.
- O backend também captura erros de rede ou problemas durante a raspagem e retorna uma mensagem de erro apropriada.
- O frontend alerta o usuário se ocorrer um problema durante a busca dos produtos.

### Comentários no Código

Os comentários no código explicam a lógica e o processo de cada parte, facilitando o entendimento e a manutenção.

### Considerações Finais

Este projeto é um exemplo básico e pode ser expandido para incluir mais funcionalidades, como paginação de resultados e filtros adicionais. Use este código como base para aprender e explorar mais sobre raspagem de dados e desenvolvimento web.


## ENGLISH VERSION 
# Amazon Product Scraper

This is a simple project for scraping Amazon product listings based on a keyword search and displaying relevant information such as product title, rating, number of reviews, and product image URL.

## Setup and Running Instructions

### Prerequisites

- Node.js (https://nodejs.org)

### Setup Steps

1. Clone this repository:
    ```bash
    git clone <REPOSITORY_URL>
    cd amazon-scraper
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node index.js
    ```

4. Open your browser and go to:
    ```
    http://localhost:3000/index.html
    ```

### Features

- Search for products on Amazon based on a keyword.
- Display the title, rating, number of reviews, and image of each product found.

### Project Structure

amazon-scraper/

├── node_modules/

├── package.json

├── package-lock.json

├── index.js

└── index.html


### Error Handling

- The backend checks if the keyword is provided and returns an error if it is missing.
- The backend also captures network errors or issues during scraping and returns an appropriate error message.
- The frontend alerts the user if there is an issue fetching the products.

### Code Comments

Comments in the code explain the logic and process of each part, making it easier to understand and maintain.

### Final Considerations

This project is a basic example and can be expanded to include more features, such as pagination of results and additional filters. Use this code as a base to learn and explore more about web scraping and web development.
