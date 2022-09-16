import './style.css';

// create the Dom elements so as to include:
    //+create a task
    //Calendar
    //Lists

function sidebarDom() {
    const content = document.getElementById('Content')
    const sidebar = document.createElement('div');
        sidebar.classList.add('Sidebar');
        sidebar.textContent = "awefawefawefa"

    content.appendChild(sidebar);


}
export { sidebarDom }