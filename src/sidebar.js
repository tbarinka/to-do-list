import './style.css';

// create the Dom elements so as to include:
    //+create a task
    //Calendar
    //Lists

function sidebarDom() {
    const content = document.getElementById('Content')
    const sidebar = document.createElement('div');
        sidebar.classList.add('Sidebar');
    content.appendChild(sidebar);

    sidebar.appendChild(header('Calendar'));
}

//a drop down module with the following elements:
    //header
    //drop-down functionality
    //sub-headings

function header(title) {
    const sideHeader = document.createElement('h3')
    sideHeader.classList.add('sideBarHeader');
    sideHeader.textContent = title;

    return sideHeader;
}


export { sidebarDom }