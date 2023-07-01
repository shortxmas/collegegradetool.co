// // Get the tab buttons and tab content
// const tabButtons = document.querySelectorAll('.tab-button');
// const tabContent = document.querySelectorAll('.tab-content div');

// // Add event listener to each tab button
// tabButtons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     // Remove 'active' class from all buttons and hide all tab content
//     tabButtons.forEach((btn) => btn.classList.remove('active'));
//     tabContent.forEach((content) => (content.style.display = 'none'));

//     // Add 'active' class to the clicked button and display the corresponding content
//     button.classList.add('active');
//     tabContent[index].style.display = 'block';
//   });
// });

// Get the tab buttons and tab content
const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content div');

// Add event listener to each tab button
tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons and hide all tab content
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    tabContent.forEach((content) => (content.style.display = 'none'));

    // Add 'active' class to the clicked button and display the corresponding content
    button.classList.add('active');
    tabContent[index].style.display = 'block';

    // Change the browser title based on the active tab
    document.title = button.innerText;
  });
});
