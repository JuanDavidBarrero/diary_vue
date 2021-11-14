
// export const myAction = async(/* {commit} */) => {

// }

import journalApi from '../../../../api/JournalApi'

export const loadEntries = async({commit}) => {
   const {data} = await journalApi.get('/entries.json')
   const entries = []
    Object.keys(data).forEach(id => {
        entries.push({
            id,
            ...data[id]
        })
    })

    console.log(entries[0]);
    
    commit('setEntries',entries)
}
export const updateEntry = async(/* {commit} */) => {

}
export const createEntry = async(/* {commit} */) => {

}