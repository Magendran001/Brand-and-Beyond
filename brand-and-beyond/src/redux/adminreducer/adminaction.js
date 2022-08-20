import axios from "axios"
const adminactions = {

    ADMINDATAREQ: "ADMINDATAREQ",
    ADMINDATASUCCESS: "ADMINDATASUCCESS",
    ADMINDATAERROR: "ADMINDATAERROR",
    
}
export { adminactions }


const ADMINDATAREQ = () => {

    return { type: adminactions.ADMINDATAREQ }
}
const ADMINDATASUCCESS = (payload) => {

    return { type: adminactions.ADMINDATASUCCESS, payload }
}

const ADMINDATAERROR = () => {
    return { type: adminactions.ADMINDATAERROR }
}

const ADMINGETDATA = (config) => (dispatch) => {
    dispatch(ADMINDATAREQ())

    axios.get("https://brandandbeyon.herokuapp.com/admin/allusers", config)
        .then(res => dispatch(ADMINDATASUCCESS(res.data)))
        .catch(err => dispatch(ADMINDATAERROR()))


}



export { ADMINGETDATA }