

/**
 * example subAccount and term objects
 *  var subAccounts = [
    {
        name: `pathwayScaled`,
        id: 110
    },
    {
        name: `onlineScaled`,
        id: 44
    }
],
    terms = [{
        name: "Summer 2019",
        id: 91
    }];
 */
var canvas = require('canvas-api-wrapper');

module.exports = async function getScaledCourses(subAccounts, terms, options = {}) {

    var term,
        courses = [];

    for (let j = 0; j < terms.length; j++) {
        term = terms[j];
        for (let i = 0; i < subAccounts.length; i++) {
            const subAccount = subAccounts[i];
            let coursesI = await canvas.get(`/api/v1/accounts/${subAccount.id}/courses?sort=sis_course_id&order=asc&search_by=course&include%5B%5D=subaccount&enrollment_term_id=${term.id}&include[]=term`)
            courses = courses.concat(coursesI);
        }
    }

    //get all the courses we need
    // pretty(pathwayCourses[0]);
    //filter for winter term

    if (options.keepExactSubAccounts) {
        courses = courses
            .filter(course => {
                return terms.some(term => term.id === course.term.id);
            });
    }

    // pretty(courses[0]);
    var courses = courses
        .sort((aIn, bIn) => {
            // sort the string as numbers
            // but first we need to fix the nulls
            var a = aIn.sis_course_id || '',
                b = bIn.sis_course_id || '';

            return a.localeCompare(b, undefined, { numeric: true });
        });

    return courses;
}
