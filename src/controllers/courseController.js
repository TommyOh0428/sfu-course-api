const {fetchCourseDetail, fetchCourseList, fetchCourseInfo} = require('../services/fetchSfuCourses');

async function getCourseInfo(req, res) {
    const { year, term, department, courseNumber, section } = req.params;

    try {
        const courseInfo = await fetchCourseInfo(year, term, department, courseNumber, section);

        if (!courseInfo) {
            return res.status(404).json({ error: 'Course not found' });
        }

        const course = {
            description: courseInfo.info.description || 'No description available',

        }

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch course info' });
    }
}