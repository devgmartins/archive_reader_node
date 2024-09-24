const Reader = require("./modules/Reader.js");
const Processor = require("./modules/DataProcessor.js");

async function app(filePath) {
    try {
        let data = await Reader.Read(__dirname + filePath);
        let rows = Processor.CountRows(data);
        let words = Processor.CountWords(data);

        return {
            checkRows: () => `O arquivo possui ${words} palavras!`,
            checkWords: () => `O arquivo possui ${rows} linhas`
        }
    } catch (err) {
        throw new Error(err)
    }
}

app("/arquivo_teste.txt")
    .then((archiveData) => {
        console.log(archiveData.checkWords());
        console.log(archiveData.checkRows());
    })
    .catch((err) => {
        console.log(err);
    });