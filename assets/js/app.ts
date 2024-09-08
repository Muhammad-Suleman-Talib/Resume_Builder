// // Regular expressions for validation
// const strRegex = /^[a-zA-Z\s]*$/; // containing only letters
// const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // supports multiple number formats
// const digitRegex = /^\d+$/;

// // Types for form elements
// type ValidType = 'text' | 'text_emp' | 'email' | 'digit' | 'phoneno' | 'any';

// // User input elements
// interface FormElements {
//     firstname: HTMLInputElement;
//     middlename: HTMLInputElement;
//     lastname: HTMLInputElement;
//     image: HTMLInputElement;
//     designation: HTMLInputElement;
//     address: HTMLInputElement;
//     email: HTMLInputElement;
//     phoneno: HTMLInputElement;
//     summary: HTMLInputElement;
// }

// interface DisplayElements {
//     nameDsp: HTMLDivElement;
//     imageDsp: HTMLImageElement;
//     phonenoDsp: HTMLDivElement;
//     emailDsp: HTMLDivElement;
//     addressDsp: HTMLDivElement;
//     designationDsp: HTMLDivElement;
//     summaryDsp: HTMLDivElement;
//     projectsDsp: HTMLDivElement;
//     achievementsDsp: HTMLDivElement;
//     skillsDsp: HTMLDivElement;
//     educationsDsp: HTMLDivElement;
//     experiencesDsp: HTMLDivElement;
// }

// // Define validType object
// const validType = {
//     TEXT: 'text' as ValidType,
//     TEXT_EMP: 'text_emp' as ValidType,
//     EMAIL: 'email' as ValidType,
//     DIGIT: 'digit' as ValidType,
//     PHONENO: 'phoneno' as ValidType,
//     ANY: 'any' as ValidType,
// };

// // Fetch values from form elements
// const fetchValues = (attrs: string[], ...nodeLists: NodeListOf<HTMLInputElement>[]): Record<string, string>[] => {
//     const elemsAttrsCount = nodeLists.length;
//     const elemsDataCount = nodeLists[0].length;
//     const tempDataArr: Record<string, string>[] = [];

//     for (let i = 0; i < elemsDataCount; i++) {
//         const dataObj: Record<string, string> = {};
//         for (let j = 0; j < elemsAttrsCount; j++) {
//             dataObj[attrs[j]] = nodeLists[j][i].value;
//         }
//         tempDataArr.push(dataObj);
//     }

//     return tempDataArr;
// };

// const getUserInputs = (): {
//     firstname: string;
//     middlename: string;
//     lastname: string;
//     designation: string;
//     address: string;
//     email: string;
//     phoneno: string;
//     summary: string;
//     achievements: Record<string, string>[];
//     experiences: Record<string, string>[];
//     educations: Record<string, string>[];
//     projects: Record<string, string>[];
//     skills: Record<string, string>[];
// } => {
//     // Form elements
//     const form = document.getElementById('cv-form') as HTMLFormElement;
//     const firstnameElem = form.firstname as HTMLInputElement;
//     const middlenameElem = form.middlename as HTMLInputElement;
//     const lastnameElem = form.lastname as HTMLInputElement;
//     const imageElem = form.image as HTMLInputElement;
//     const designationElem = form.designation as HTMLInputElement;
//     const addressElem = form.address as HTMLInputElement;
//     const emailElem = form.email as HTMLInputElement;
//     const phonenoElem = form.phoneno as HTMLInputElement;
//     const summaryElem = form.summary as HTMLInputElement;

//     // Other elements
//     const achievementsTitleElem = document.querySelectorAll('.achieve_title') as NodeListOf<HTMLInputElement>;
//     const achievementsDescriptionElem = document.querySelectorAll('.achieve_description') as NodeListOf<HTMLInputElement>;

//     const expTitleElem = document.querySelectorAll('.exp_title') as NodeListOf<HTMLInputElement>;
//     const expOrganizationElem = document.querySelectorAll('.exp_organization') as NodeListOf<HTMLInputElement>;
//     const expLocationElem = document.querySelectorAll('.exp_location') as NodeListOf<HTMLInputElement>;
//     const expStartDateElem = document.querySelectorAll('.exp_start_date') as NodeListOf<HTMLInputElement>;
//     const expEndDateElem = document.querySelectorAll('.exp_end_date') as NodeListOf<HTMLInputElement>;
//     const expDescriptionElem = document.querySelectorAll('.exp_description') as NodeListOf<HTMLInputElement>;

//     const eduSchoolElem = document.querySelectorAll('.edu_school') as NodeListOf<HTMLInputElement>;
//     const eduDegreeElem = document.querySelectorAll('.edu_degree') as NodeListOf<HTMLInputElement>;
//     const eduCityElem = document.querySelectorAll('.edu_city') as NodeListOf<HTMLInputElement>;
//     const eduStartDateElem = document.querySelectorAll('.edu_start_date') as NodeListOf<HTMLInputElement>;
//     const eduGraduationDateElem = document.querySelectorAll('.edu_graduation_date') as NodeListOf<HTMLInputElement>;
//     const eduDescriptionElem = document.querySelectorAll('.edu_description') as NodeListOf<HTMLInputElement>;

//     const projTitleElem = document.querySelectorAll('.proj_title') as NodeListOf<HTMLInputElement>;
//     const projLinkElem = document.querySelectorAll('.proj_link') as NodeListOf<HTMLInputElement>;
//     const projDescriptionElem = document.querySelectorAll('.proj_description') as NodeListOf<HTMLInputElement>;

//     const skillElem = document.querySelectorAll('.skill') as NodeListOf<HTMLInputElement>;

//     // Add event listeners for form validation
//     const addValidationListeners = (elem: HTMLInputElement, type: ValidType, name: string) => {
//         elem.addEventListener('keyup', (e) => validateFormData(e.target as HTMLInputElement, type, name));
//     };

//     addValidationListeners(firstnameElem, validType.TEXT, 'First Name');
//     addValidationListeners(middlenameElem, validType.TEXT_EMP, 'Middle Name');
//     addValidationListeners(lastnameElem, validType.TEXT, 'Last Name');
//     addValidationListeners(phonenoElem, validType.PHONENO, 'Phone Number');
//     addValidationListeners(emailElem, validType.EMAIL, 'Email');
//     addValidationListeners(addressElem, validType.ANY, 'Address');
//     addValidationListeners(designationElem, validType.TEXT, 'Designation');

//     achievementsTitleElem.forEach(item => addValidationListeners(item, validType.ANY, 'Title'));
//     achievementsDescriptionElem.forEach(item => addValidationListeners(item, validType.ANY, 'Description'));
//     expTitleElem.forEach(item => addValidationListeners(item, validType.ANY, 'Title'));
//     expOrganizationElem.forEach(item => addValidationListeners(item, validType.ANY, 'Organization'));
//     expLocationElem.forEach(item => addValidationListeners(item, validType.ANY, 'Location'));
//     expStartDateElem.forEach(item => addValidationListeners(item, validType.ANY, 'Start Date'));
//     expEndDateElem.forEach(item => addValidationListeners(item, validType.ANY, 'End Date'));
//     expDescriptionElem.forEach(item => addValidationListeners(item, validType.ANY, 'Description'));
//     eduSchoolElem.forEach(item => addValidationListeners(item, validType.ANY, 'School'));
//     eduDegreeElem.forEach(item => addValidationListeners(item, validType.ANY, 'Degree'));
//     eduCityElem.forEach(item => addValidationListeners(item, validType.ANY, 'City'));
//     eduStartDateElem.forEach(item => addValidationListeners(item, validType.ANY, 'Start Date'));
//     eduGraduationDateElem.forEach(item => addValidationListeners(item, validType.ANY, 'Graduation Date'));
//     eduDescriptionElem.forEach(item => addValidationListeners(item, validType.ANY, 'Description'));
//     projTitleElem.forEach(item => addValidationListeners(item, validType.ANY, 'Title'));
//     projLinkElem.forEach(item => addValidationListeners(item, validType.ANY, 'Link'));
//     projDescriptionElem.forEach(item => addValidationListeners(item, validType.ANY, 'Description'));
//     skillElem.forEach(item => addValidationListeners(item, validType.ANY, 'Skill'));

//     return {
//         firstname: firstnameElem.value,
//         middlename: middlenameElem.value,
//         lastname: lastnameElem.value,
//         designation: designationElem.value,
//         address: addressElem.value,
//         email: emailElem.value,
//         phoneno: phonenoElem.value,
//         summary: summaryElem.value,
//         achievements: fetchValues(['achieve_title', 'achieve_description'], achievementsTitleElem, achievementsDescriptionElem),
//         experiences: fetchValues(['exp_title', 'exp_organization', 'exp_location', 'exp_start_date', 'exp_end_date', 'exp_description'], expTitleElem, expOrganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem),
//         educations: fetchValues(['edu_school', 'edu_degree', 'edu_city', 'edu_start_date', 'edu_graduation_date', 'edu_description'], eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem),
//         projects: fetchValues(['proj_title', 'proj_link', 'proj_description'], projTitleElem, projLinkElem, projDescriptionElem),
//         skills: fetchValues(['skill'], skillElem),
//     };
// };

// // Function to validate user input
// const validateFormData = (elem: HTMLInputElement, type: ValidType, name: string) => {
//     const value = elem.value;

//     switch (type) {
//         case validType.TEXT:
//             if (!strRegex.test(value)) {
//                 alert(`${name} should contain only letters.`);
//             }
//             break;
//         case validType.TEXT_EMP:
//             if (value.trim() !== '' && !strRegex.test(value)) {
//                 alert(`${name} should contain only letters.`);
//             }
//             break;
//         case validType.EMAIL:
//             if (!emailRegex.test(value)) {
//                 alert(`${name} is not a valid email address.`);
//             }
//             break;
//         case validType.DIGIT:
//             if (!digitRegex.test(value)) {
//                 alert(`${name} should contain only digits.`);
//             }
//             break;
//         case validType.PHONENO:
//             if (!phoneRegex.test(value)) {
//                 alert(`${name} is not a valid phone number.`);
//             }
//             break;
//         case validType.ANY:
//             break;
//         default:
//             break;
//     }
// };

// // Function to display data
// const displayData = (data: {
//     firstname: string;
//     middlename: string;
//     lastname: string;
//     designation: string;
//     address: string;
//     email: string;
//     phoneno: string;
//     summary: string;
//     achievements: Record<string, string>[];
//     experiences: Record<string, string>[];
//     educations: Record<string, string>[];
//     projects: Record<string, string>[];
//     skills: Record<string, string>[];
// }) => {
//     const nameDsp = document.getElementById('nameDsp') as HTMLDivElement;
//     const imageDsp = document.getElementById('imageDsp') as HTMLImageElement;
//     const phonenoDsp = document.getElementById('phonenoDsp') as HTMLDivElement;
//     const emailDsp = document.getElementById('emailDsp') as HTMLDivElement;
//     const addressDsp = document.getElementById('addressDsp') as HTMLDivElement;
//     const designationDsp = document.getElementById('designationDsp') as HTMLDivElement;
//     const summaryDsp = document.getElementById('summaryDsp') as HTMLDivElement;
//     const projectsDsp = document.getElementById('projectsDsp') as HTMLDivElement;
//     const achievementsDsp = document.getElementById('achievementsDsp') as HTMLDivElement;
//     const skillsDsp = document.getElementById('skillsDsp') as HTMLDivElement;
//     const educationsDsp = document.getElementById('educationsDsp') as HTMLDivElement;
//     const experiencesDsp = document.getElementById('experiencesDsp') as HTMLDivElement;

//     nameDsp.textContent = `${data.firstname} ${data.middlename} ${data.lastname}`;
//     imageDsp.src = URL.createObjectURL(new Blob([data.image], { type: 'image/png' })); // Assuming image data is in base64 format
//     phonenoDsp.textContent = data.phoneno;
//     emailDsp.textContent = data.email;
//     addressDsp.textContent = data.address;
//     designationDsp.textContent = data.designation;
//     summaryDsp.textContent = data.summary;

//     projectsDsp.innerHTML = data.projects.map(project => `
//         <div>
//             <h3>${project.proj_title}</h3>
//             <a href="${project.proj_link}">${project.proj_link}</a>
//             <p>${project.proj_description}</p>
//         </div>
//     `).join('');

//     achievementsDsp.innerHTML = data.achievements.map(achieve => `
//         <div>
//             <h3>${achieve.achieve_title}</h3>
//             <p>${achieve.achieve_description}</p>
//         </div>
//     `).join('');

//     skillsDsp.innerHTML = data.skills.map(skill => `<p>${skill.skill}</p>`).join('');

//     educationsDsp.innerHTML = data.educations.map(edu => `
//         <div>
//             <h3>${edu.edu_school}</h3>
//             <p>${edu.edu_degree}, ${edu.edu_city}</p>
//             <p>${edu.edu_start_date} - ${edu.edu_graduation_date}</p>
//             <p>${edu.edu_description}</p>
//         </div>
//     `).join('');

//     experiencesDsp.innerHTML = data.experiences.map(exp => `
//         <div>
//             <h3>${exp.exp_title}</h3>
//             <p>${exp.exp_organization}, ${exp.exp_location}</p>
//             <p>${exp.exp_start_date} - ${exp.exp_end_date}</p>
//             <p>${exp.exp_description}</p>
//         </div>
//     `).join('');
// };

// // Example usage
// const userInputs = getUserInputs();
// displayData(userInputs);
