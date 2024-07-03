const express = require('express');
const app = express();

let courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.use(express.json());

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.listen(3000, () =>{
    console.log('Listening on port 3000...');
});

app.post("/courses", (req,res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});

app.put('/courses/:id', (req, res) => {
    try{
        let course = courses.find((course)=> {
            return course.id === +req.params.id;
        })

        if(!course){
            res.status(404).send('Course not found');
        }

        course.name = req.body.name;
        res.send(course);
    }
    catch(e){
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/courses/:id', (req, res) => {
    try{
        let course = courses.find((course)=> {
            return course.id === +req.params.id;
        })

        if(!course){
            res.status(404).send('Course not found');
        }

        const index = courses.indexOf(course);
        courses.splice(index, 1);
        res.send(course);
    }
    catch(e){
        res.status(500).send('Internal Server Error');
    }
});