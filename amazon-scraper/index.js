const express = require('express');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Scrape route
app.get('/api/scrape', async (req, res) => {
    const keyword = req.query.keyword;
    if (!keyword) {
        console.log('Keyword is missing');
        return res.status(400).json({ error: 'Keyword is required' });
    }

    try {
        console.log(`Scraping Amazon for keyword: ${keyword}`);
        const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            },
        });

        const dom = new JSDOM(data);
        const document = dom.window.document;

        // Select all product elements from the search results
        // Seleciona todos os elementos do produto nos resultados da pesquisa
        const productElements = document.querySelectorAll('.s-main-slot .s-result-item');
        const products = [];

        // Extract details for each product
        // Extrai detalhes de cada produto
        productElements.forEach((productElement) => {
            const titleElement = productElement.querySelector('h2 .a-text-normal');
            const ratingElement = productElement.querySelector('.a-icon-alt');
            const reviewsElement = productElement.querySelector('.a-size-base');
            const imageElement = productElement.querySelector('.s-image');

            // Ensure all necessary elements are present before adding the product to the list
            // Certifica de que todos os elementos necessários estejam presentes antes de adicionar o produto à lista
            if (titleElement && ratingElement && reviewsElement && imageElement) {
                const product = {
                    title: titleElement.textContent.trim(),
                    rating: ratingElement.textContent.trim().split(' ')[0],
                    reviews: reviewsElement.textContent.trim(),
                    image: imageElement.src,
                };
                products.push(product);
            }
        });

        console.log(`Found ${products.length} products`);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to scrape Amazon' });
    }
});

// Start the server
// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
