
// export const myAction = async(/* {commit} */) => {

// }

import journalApi from '../../../../api/JournalApi'

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    const entries = []
    Object.keys(data).forEach(id => {
        entries.push({
            id,
            ...data[id]
        })
    })


    commit('setEntries', entries)
}
export const updateEntry = async ({ commit }, entry) => {
    const { date, picture, text } = entry;
    const dataToSave = { date, picture, text };
    await journalApi.put(`/entries/${entry.id}.json`, dataToSave)
    commit('updateEntry', {...entry})
}
export const createEntry = async (/* {commit} */) => {

}