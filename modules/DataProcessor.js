class Processor {
    static CountRows(data) {
        let dataArr = [];

        for (let i = 0; i < data.length; i++) {
            dataArr.push(data[i])
        }

        return dataArr.join("").split("\r\n").length;
    }

    static CountWords(data) {
        let lettersArr = [];

        for (let i = 0; i < data.length; i++) {
            lettersArr.push(data[i]);
        }

        const joinedArr = lettersArr.join("").split("\r\n");
        const wordsArr = [];

        joinedArr.forEach((word) => {
            wordsArr.push(word.split(" "));
        })

        let wordsCounter = 0;

        wordsArr.forEach((arr) => {
            let emptyIndex = arr.indexOf("");

            if (emptyIndex !== -1) {
                arr.splice(emptyIndex, 1);
            }

            wordsCounter += arr.length;
        })

        return wordsCounter;
    }
}

module.exports = Processor;