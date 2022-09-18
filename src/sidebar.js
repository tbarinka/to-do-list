import './style.css';
import chevron from './images/chevron-up.png';
import plus from './images/plus.png';
import pencil from './images/pencil-outline.png';

// create the Dom elements so as to include:
    //+create a task
    //Calendar
    //Lists

function sidebarDom() {
    const content = document.getElementById('Content')
    const sidebar = document.createElement('div');
        sidebar.classList.add('Sidebar');
    content.appendChild(sidebar);
    sidebar.appendChild(sidebarItemIntegrater('Lists', 'y'));
}

//a drop down module with the following elements:
    //header
    //drop-down functionality
    //sub-headings
function sidebarItemIntegrater(title, toggleRightComponent) {
    const div = document.createElement('div');
    div.classList.add('SidebarIntegratedItem');
    
    if (toggleRightComponent == "y") {
        div.appendChild(leftSidebarComponentListCollapse(title))
        div.appendChild(rightSidebarItem());
    } else {
        div.appendChild(leftSidebarComponentListCollapse(title))
        const item = document.createElement('div');
            item.classList.add('SideBarItemRightComponent');
        div.appendChild(item);
    }
    return div;

}
function rightSidebarItem() {
    const item = document.createElement('div');
        item.classList.add('SideBarItemRightComponent');
    item.appendChild(editButton());
    item.appendChild(addButton());
    return item;
}
    function addButton() {
    const button = document.createElement('button');
        button.classList.add('SideBarRightComponentButton')
    const addBtn = new Image();
    addBtn.src = plus;
    button.appendChild(addBtn);
    return button;
    }
    function editButton() {
    const button = document.createElement('button');
        button.classList.add('SideBarRightComponentButton');
    const editImage = new Image();
    editImage.src = pencil;
    button.appendChild(editImage);
    return button;
    }
function leftSidebarComponent(title) {
    const item = document.createElement('div');
        item.classList.add('SideBarItemLeftComponent');

    item.appendChild(header(title));
    return item;
};
function leftSidebarComponentListCollapse(title) {
    const item = document.createElement('div');
        item.classList.add('SideBarItemLeftComponent');
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
        button.classList.add('listCollapseButton');
    const collapseIcon = new Image();
    collapseIcon.src = chevron;
    button.appendChild(collapseIcon);
    return button;
    };



export { sidebarDom }