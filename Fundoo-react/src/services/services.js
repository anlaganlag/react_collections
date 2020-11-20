import axios from 'axios';
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api'

class Service {
    
    addNote(note) {
        return axios
            .post(baseUrl + `/notes/addNotes?access_token=${localStorage.getItem('token')}`, note)
            .then(response => { return response })
            .catch(error => { return error })
    }

    getNotes(){
        return axios
            .get(baseUrl + `/notes/getNotesList?access_token=${localStorage.getItem('token')}`)
            .then(response => { return response })
            .catch(error => { return error })
    }

    

    archiveNotes(data) {
        return axios
            .post(baseUrl + `/notes/archiveNotes?access_token=${localStorage.getItem('token')}`,data)
            .then(response => { return response })
            .catch(error => { return error })
    }

    getArchivedNotes() {
        return axios
            .get(baseUrl + `/notes/getArchiveNotesList?access_token=${localStorage.getItem('token')}`)
            .then(response => { return response })
            .catch(error => { return error })
    }
}

export default Service;
