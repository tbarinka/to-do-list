import './style.css';
import chevron from './images/chevron-up.png';
import plus from './images/plus.png';
import pencil from './images/pencil-outline.png';


function sidebarDom() {
    const content = document.getElementById('Content')
    const sidebar = document.createElement('div');
        sidebar.classList.add('Sidebar');
    content.appendChild(sidebar);
    sidebar.appendChild(createTaskButton());
    sidebar.appendChild(sidebarHeaderIntegrater('Calendar', 'y'))
    sidebar.appendChild(sidebarHeaderIntegrater('Lists', 'y'));
}
function createTaskButton() {
    const div = document.createElement('div');
        div.classList.add('SidebarAddTaskButton')
    const button = document.createElement('button');
        button.classList.add('createTask');
        button.textContent = "+ Create a Task"
    div.appendChild(button);
    return div;
}
function sidebarHeaderIntegrater(title, toggleRightComponent) {
    const div = document.createElement('div');
    div.classList.add('SidebarIntegratedItem');
    
    if (toggleRightComponent == "y") {
        const headerDiv = document.createElement('SideBarTopCollpasibleComponent');
            headerDiv.appendChild(leftSidebarComponentListCollapse(title))
            headerDiv.appendChild(rightSidebarItem());
        
        div.appendChild(headerDiv);

    } else if (toggleRightComponent == "n") {
        div.appendChild(leftSidebarComponent(title))
        const item = document.createElement('div');
            item.classList.add('SideBarItemRightComponent-empty');
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
    item.appendChild(listCollapseButton());
    item.appendChild(collapsibleContent());
    return item
};
    function header(title) {
    const sideHeader = document.createElement('h3')
    sideHeader.classList.add('sideBarHeader');
    sideHeader.textContent = title;
    return sideHeader;
    };
    function listCollapseButton() {
    const button = document.createElement('button');
        button.classList.add('listCollapseButton');
        button.addEventListener("click", toggleList);

    const collapseIcon = new Image();
    collapseIcon.src = chevron;
    button.appendChild(collapseIcon);
    
    return button;
    };
        function toggleList() {
            const collapsibleContent = (this.nextElementSibling);
            if (collapsibleContent.classList.contains("collapsed")) {
                collapsibleContent.classList.remove("collapsed");
                collapsibleContent.classList.add("uncollapsed");
                console.log(collapsibleContent);
            } else if (collapsibleContent.classList.contains("uncollapsed")) {
                collapsibleContent.classList.remove("uncollapsed");
                collapsibleContent.classList.add("collapsed");
                console.log(collapsibleContent);
            }     
        }
        function collapsibleContent() {
            const div = document.createElement('div');
                div.classList.add("collapsed");
            const p = document.createElement("p");
            p.textContent = "Here is some text just to get started."
            div.appendChild(p);
            return div;

        }


export { sidebarDom }