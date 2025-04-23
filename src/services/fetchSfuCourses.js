const axios = require('axios');
const BASE_URL = "http://www.sfu.ca/bin/wcm/course-outlines";

async function fetchCourseInfo(year, term, department, courseNumber, section) {
    try {
        const response = await axios.get(`${BASE_URL}/${year}-${term}/${department}/${courseNumber}-${section}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching course data: ${error}`);
        throw error;
    }
}

async function fetchCourseDetail(year, term, department, courseNumber) {
    try {
        const response = await axios.get(`${BASE_URL}/${year}-${term}/${department}/${courseNumber}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching course detail: ${error}`);
        throw error;
    }
}

async function fetchCourseList(year, term, department) {
    try {
        const response = await axios.get(`${BASE_URL}/${year}-${term}/${department}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching course list: ${error}`);
        throw error;
    }
}

module.exports = {
    fetchCourseInfo,
    fetchCourseDetail,
    fetchCourseList
};