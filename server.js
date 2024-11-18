const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const games = [
    {
        id: 1,
        name: 'CS2',
        description: 'Командный шутер 5 на 5',
        genre: 'Шутер от первого лица',
        cover: 'https://rus.egamersworld.com/_next/image?url=https%3A%2F%2Fegamersworld.com%2Fuploads%2Fblog%2F1696414021417.webp&w=1920&q=75',
    },
    {
        id: 2,
        name: 'Buckshot Roulette',
        description: 'Buckshot Roulette: Русская рулетка с дробовиком 12-го калибра. Посетите мрачный подпольный клуб. Бросьте вызов крупье. Соберитесь с духом и нажмите на курок. Зарядите дробовик, испытайте судьбу, удвойте ставки. Здесь нет призов за второе место.',
        genre: 'Хоррор',
        cover: 'https://m.media-amazon.com/images/M/MV5BZDAwMTMzZDUtZDE4OC00MjE3LWFiMzgtN2Q2NzcwMWNjMGMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    },
    {
        id: 3,
        name: 'Half-Life 2',
        description: '1998 год. HALF-LIFE шокирует игровую индустрию сочетанием напряженного действия и непрерывного, затягивающего сюжета. Дебютная игра Valve завоевала свыше 50 наград «Игра года» на пути к получению титула «Лучшая игра для РС всех времен» от PC Gamer; она раскрутила франшизу, которая продала свыше восьми миллионов коробочных версий по всему миру.',
        genre: 'Шутер от первого лица',
        cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXRHz7QRPlHtb6HqrwLwqkFtMFbT6Bhx9nYw&s',
    },
];

app.get('/api/games', (req, res) => {
    res.json(games);
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
