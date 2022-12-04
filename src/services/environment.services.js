let DB = require('../../storage/environment');

function getEnvironment() {
    return DB
}

function getEnvironmentById(id) {
    const filtered = DB.filter(el => el.id === id)
    return filtered
}

function createEnvironment(label, category, priority) {
    DB.push({
        id: label.toLowerCase(),
        label,
        category,
        priority
    })
    return DB
}

function updateEnvironments(id, label, category, priority) {
    let filtered = DB.filter(el => el.id !== id)

    if (filtered.length == DB.length) throw new Error('id is not defined in DB');

    filtered.push({
        id,
        label,
        category,
        priority
    });
    DB = filtered;


    return DB;

}


function deleteEnvironments(id) {
    let filtered = DB.filter(el => el.id !== id)
    if (filtered.length == DB.length) throw new Error('id is not defined in DB');
    DB = filtered

    return DB
}

function patchEnvironments(id, environmentClient) {
    const filtered = DB.filter(el => el.id === id)
    const merge = {
        ...filtered[0],
        ...environmentClient
    }

    const withoutFiltered = DB.filter(el => el.id !== id)
    if (withoutFiltered.length == DB.length) throw new Error('id is not defined in DB');
    withoutFiltered.push(merge)
    DB = withoutFiltered
    return DB
}


module.exports = {
    getEnvironment,
    getEnvironmentById,
    createEnvironment,
    updateEnvironments,
    deleteEnvironments,
    patchEnvironments
};