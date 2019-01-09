var canvas = require('canvas-api-wrapper'),
    dsv = require('d3-dsv'),
    fs = require('fs');

    function pretty(obj){
        console.log(JSON.stringify(obj,null,4));
    }

    var subAccounts = [
        {name:`pathwayScaled`,id: 110},
        {name:`onlineScaled`,id: 44}
    ]
    var term = "Winter 2019"

async function main() {
    try {
        
        var subAccount = subAccounts[0]; 
        //get all the courses we need
        var pathwayCourses = await canvas.get(`/api/v1/accounts/${subAccount.id}/courses?sort=sis_course_id&order=asc&search_by=course&include%5B%5D=subaccount&include%5B%5D=term`)
        // pretty(pathwayCourses[0]);
        //filter for winter term
        var w2019 = pathwayCourses.filter(course => course.term.name === term )
        .map(course =>({
            name:course.name,
            id:course.id,
            sis:course.sis_course_id,
            term: course.term.name
        }));
        // pretty(w2019[0]);
        console.log(w2019.length);
        
        //loop them to see if they have group-categories more than the default
        var i;
        for (let i = 0; i < w2019.length; i++) {
            const course = w2019[i];
            console.log(i,course.name, i/w2019.length * 100, "%");
            var groupCats = await canvas.get(`https://byui.instructure.com/api/v1/courses/${course.id}/group_categories`);
            course.groupCategories = groupCats.reduce((string,cat) =>string + cat.name + '|','');
        }

        //make report
        fs.writeFileSync(`${term.replace(/ /g,'')}${subAccount.name}CoursesGroupReport_${Date.now()}.csv`, dsv.csvFormat(w2019),'utf8');

    } catch (error) {
        console.error(error);
    }
}

main();