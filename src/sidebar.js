import './style.css';
import chevron from './images/chevron-up.png';

// create the Dom elements so as to include:
    //+create a task
    //Calendar
    //Lists

function sidebarDom() {
    const content = document.getElementById('Content')
    const sidebar = document.createElement('div');
        sidebar.classList.add('Sidebar');
    content.appendChild(sidebar);

    sidebar.appendChild(headerItem('Calendar'));
    sidebar.appendChild(headerItemListCollapse('Lists'));
}

//a drop down module with the following elements:
    //header
    //drop-down functionality
    //sub-headings
function headerItem(title) {
    const item = document.createElement('div');
        item.classList.add('SideBarHeaderItem');

    item.appendChild(header(title));
    return item;
};
function headerItemListCollapse(title) {
    const item = document.createElement('div');
        item.classList.add('SideBarHeaderItem');
    item.appendChild(header(title));
    item.appendChild(listCollapse());
    return item
};
function header(title) {
    const sideHeader = document.createElement('h3')
    sideHeader.classList.add('sideBarHeader');
    sideHeader.textContent = title;
    return sideHeader;
};
function listCollapse() {
    const button = document.createElement('button');
        button.classList.add('sideBarButton');
    const collapseIcon = new Image();
    collapseIcon.src = chevron;
    button.appendChild(collapseIcon);
    return button;
};


export { sidebarDom }