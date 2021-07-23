import  axiosInstance from "../network/Axios";

const getAllShows = () => {
    return axiosInstance.get('/shows');
}

const getSingleShow = (id: any) => {
    return axiosInstance.get( `/shows/${id}`);
}

const getShowCastAndCrew = (id: any) => {
    return axiosInstance.get(`/shows/${id}/cast`)
}

export default {getAllShows, getSingleShow, getShowCastAndCrew};