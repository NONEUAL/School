// Data types practice
const company = {
    name: "Olivarez Tech",
    year: 2026
};

let student = {
    name: "John Dave Bueno",
    address: "Tagaytay City",
    isEnrolled: true
};

const courses = ["BSIT", "BSIS", "BSCRIM"];

// DOM Manipulation
document.getElementById('portal_title').innerHTML = company.name + " Portal";
document.getElementById('footer_company').innerHTML = company.name;

// Function to display student data
function updateDisplay() {
    document.getElementById('display_name').innerHTML = student.name;
    document.getElementById('display_address').innerHTML = student.address;
    document.getElementById('display_status').innerHTML = student.isEnrolled ? "Active" : "Inactive";
}

// Initialize display
updateDisplay();

// Log data types to console for review
console.log("Company Type:", typeof(company));
console.log("Course Array:", courses);
console.log("Enrollment Status:", typeof(student.isEnrolled));