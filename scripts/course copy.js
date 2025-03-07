const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function displayCourses() {
    const courseCardContainer = document.getElementById("courses-container");
    courseCardContainer.innerHTML = ""; // clear existing content
 
    courses.forEach(course => {
        let card = document.createElement("div");
        card.classList.add("item", course.subject); // assign subject class
        card.dataset.completed = course.completed; // assign complete bool
        card.textContent = `${course.subject} ${course.number}`;
        courseCardContainer.appendChild(card);
    })

    const courseListContainer = document.getElementById("coursework-container");
    courseListContainer.innerHTML = ""; // clear existing content

    courses.forEach(course => {
        let card = document.createElement("li");
        card.classList.add("list-item", course.subject.toLowerCase()); // assign subject class
        card.textContent = `${course.title} (${course.credits} credits) - ${course.description} ${course.technology}`;
        courseListContainer.appendChild(card);
    })

} 6

function filterItems(subject){
    let items = document.querySelectorAll('.item');
    let listItems = document.querySelectorAll('.list-item');

    items.forEach(item => {
        if (subject === 'all' || item.classList.contains(subject.toLowerCase())) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });

    listItems.forEach(item => {
        if (subject === 'all' || item.classList.contains(subject.toLowerCase())) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    })
}

window.onload = () => {
    displayCourses();
    filterItems('all'); // Show all courses initially
};

document.getElementById("all").addEventListener("click", () => filterItems('all'));
document.getElementById("wdd").addEventListener("click", () => filterItems('wdd'));
document.getElementById("cse").addEventListener("click", () => filterItems('cse'));