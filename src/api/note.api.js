import API from "./config.api"

const getAllPublicNotes = () => {
   return API.get('/notes')
}