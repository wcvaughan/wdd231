const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');
const navItems = document.querySelectorAll('#nav-bar a');

// Toggle the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');

    const expanded = navButton.getAttribute("aria-expanded") === "true";
    navButton.setAttribute("aria-expanded", !expanded);
});

navItems.forEach(link => {
    link.addEventListener("click", (e) => {
        navItems.forEach(a =>
            a.parentElement.classList.remove("current")
        );

        e.currentTarget.parentElement.classList.add("current");
    });
});


// Load current date and last modified date
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;
});


// Course card logic
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

const courseGrid = document.querySelector(".course-grid");
const creditSpan = document.getElementById("total-credits");

// DISPLAY COURSES //

function displayCourses(courseList) {
    courseGrid.innerHTML = "";

    courseList.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-item", course.subject);
        card.dataset.credits = course.credits;
        card.dataset.completed = course.completed;

        card.textContent = `${course.subject} ${course.number}`;

        if (course.completed) {
            card.classList.add("completed");
        }

        courseGrid.appendChild(card);
    });

    updateTotalCredits(courseList);
}

// FILTER COURSES

function filterCourses(category) {
    if (category === "all") {
        displayCourses(courses);
    } else {
        const filtered = courses.filter(course => course.subject === category);
        displayCourses(filtered);
    }
}


//  TOTAL CREDITS

function updateTotalCredits(courseList) {
    const total = courseList.reduce((sum, course) => sum + course.credits, 0);
    creditSpan.textContent = total;
}

// BUTTON EVENTS

document.querySelectorAll(".filters button").forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        filterCourses(category);
    });
});

// INITIAL PAGE DISPLAY

displayCourses(courses);
