const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/multiplicar-matrices', (req, res) => {
    const { matriz1, matriz2 } = req.body;

    const filasA = matriz1.length;
    const columnasA = matriz1[0].length;
    const filasB = matriz2.length;
    const columnasB = matriz2[0].length;

    if (columnasA !== filasB) {
        return res.status(400).json({ error: 'El número de las columnas de la primera matriz debe coincidir con el número de filas de la segunda matriz.' });
    }

    const resultado = [];
    for (let i = 0; i < filasA; i++) {
        resultado[i] = [];
        for (let j = 0; j < columnasB; j++) {
            let suma = 0;
            for (let k = 0; k < columnasA; k++) {
                suma += matriz1[i][k] * matriz2[k][j];
            }
            resultado[i][j] = suma;
        }
    }

    res.json({ resultado });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
