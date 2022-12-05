const {
    readFileSync,
    writeFileSync
} = require('fs')

class Environment {
    path = "storage/environment.json"

    readFile() {
        return JSON.parse(readFileSync(this.path))
    }

    writeFile(DB) {
        writeFileSync(this.path, JSON.stringify(DB), 'utf8')
    }

    getEnvironment() {
        const DB = this.readFile()
        if (!DB.length) throw new Error('JSON is empty')
        return DB
    }

    getEnvironmentById(id) {
        const DB = this.readFile()
        if (!DB.length) throw new Error('JSON is empty')
        const filtered = DB.filter(el => el.id === id)
        return filtered
    }

    createEnvironment(label, category, priority) {
        const DB = this.readFile()

        if (!DB.length) throw new Error('JSON is empty')

        DB.push({
            id: label.toLowerCase(),
            label,
            category,
            priority
        })

        this.writeFile(DB)

        return DB
    }

    updateEnvironments(id, label, category, priority) {
        const DB = this.readFile()

        if (!DB.length) throw new Error('JSON is empty')

        let filtered = DB.filter(el => el.id !== id)

        if (filtered.length == DB.length) throw new Error('id is not defined in DB');

        filtered.push({
            id,
            label,
            category,
            priority
        });

        this.writeFile(filtered)

        return filtered;
    }


    deleteEnvironments(id) {
        const DB = this.readFile()

        if (!DB.length) throw new Error('JSON is empty')

        let filtered = DB.filter(el => el.id !== id)
        if (filtered.length == DB.length) throw new Error('id is not defined in DB');

        this.writeFile(filtered)

        return filtered
    }

    patchEnvironments(id, environmentClient) {
        const DB = this.readFile()

        if (!DB.length) throw new Error('JSON is empty')

        const filtered = DB.filter(el => el.id === id)
        const merge = {
            ...filtered[0],
            ...environmentClient
        }

        const withoutFiltered = DB.filter(el => el.id !== id)

        if (withoutFiltered.length == DB.length) throw new Error('id is not defined in DB');
        withoutFiltered.push(merge)

        this.writeFile(withoutFiltered)

        return withoutFiltered
    }

}

module.exports = {
    Environment
};