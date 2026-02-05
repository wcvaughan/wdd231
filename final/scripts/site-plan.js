/* =====================
   Root Variables
===================== */
:root {
  --forest-green: #2F5D50;
  --sky-blue: #8EC6E8;
  --light-stone: #F5F7F6;
  --charcoal: #2E2E2E;

  --max-width: 900px;
  --spacing-sm: 0.75rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2.5rem;
}

/* =====================
   Global Styles
===================== */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Open Sans", Arial, sans-serif;
  background-color: var(--light-stone);
  color: var(--charcoal);
  line-height: 1.6;
}

main {
  max-width: var(--max-width);
  margin: auto;
  padding: var(--spacing-lg);
}

/* =====================
   Headings
===================== */
h1,
h2,
h3 {
  color: var(--forest-green);
  margin-bottom: var(--spacing-sm);
}

h1 {
  font-size: 2.2rem;
  border-bottom: 4px solid var(--sky-blue);
  padding-bottom: 0.5rem;
}

h2 {
  font-size: 1.6rem;
  margin-top: var(--spacing-lg);
}

h3 {
  font-size: 1.2rem;
}

/* =====================
   Text & Lists
===================== */
p {
  margin-bottom: var(--spacing-md);
}

ul {
  padding-left: 1.25rem;
}

li {
  margin-bottom: 0.5rem;
}

/* =====================
   Accent Elements
===================== */
strong {
  color: var(--forest-green);
}

a {
  color: var(--forest-green);
  text-decoration: underline;
}

a:hover {
  color: var(--sky-blue);
}

/* =====================
   Color Schema Table
===================== */
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: var(--spacing-md);
}

th,
td {
  border: 1px solid #ccc;
  padding: 0.75rem;
  text-align: left;
}

th {
  background-color: var(--forest-green);
  color: #fff;
}

/* =====================
   Section Styling
===================== */
section {
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-md);
  background-color: #ffffff;
  border-left: 6px solid var(--sky-blue);
  border-radius: 6px;
}

/* =====================
   Footer
===================== */
footer {
  text-align: center;
  padding: var(--spacing-md);
  background-color: var(--forest-green);
  color: #fff;
}
