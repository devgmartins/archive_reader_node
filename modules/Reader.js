const fs = require("node:fs/promises");

class Reader {
    static async Read(path) {
        try {
            return await fs.readFile(path, "utf-8");
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = Reader;