import './style.css';
import chevron from './images/chevron-up.png';
import plus from './images/plus.png';
import pencil from './images/pencil-outline.png';
import chevronDown from './images/chevron-down.png'


function sidebarDom() {
    const content = document.getElementById('Content')
    const sidebar = document.createElement('div');
        sidebar.classList.add('Sidebar');
    content.appendChild(sidebar);
    sidebar.appendChild(createTaskButton());
    sidebar.appendChild(sidebarHeaderIntegrater('Calendar', 'y'))
    sidebar.appendChild(sidebarHeaderIntegrater('Lists', 'y', 'y'));
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
function sidebarHeaderIntegrater(title, toggleRightComponent, toggleEditButton) {
    const div = document.createElement('div');
    div.classList.add('sidebarIntegratedItem');
    
    
    if (toggleRightComponent == "y") {
        div.appendChild(leftSidebarComponentListCollapse(title))
        div.appendChild(rightSidebarItem(toggleEditButton));
        
    } else if (toggleRightComponent == "n") {
        div.appendChild(leftSidebarComponent(title))
        const item = document.createElement('div');
            item.classList.add('sideBarItemRightComponent-empty');
        div.appendChild(item);
    }
    return div;

}
function rightSidebarItem(toggleEditButton) {
    const item = document.createElement('div');
        item.classList.add('SideBarItemRightComponent');
    if (toggleEditButton == "y") {
        item.appendChild(editButton());
    }
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
        item.classList.add('sideBarItemLeftComponent');
    const top = document.createElement('div');
        top.classList.add('sidebarLeftTopComponent');

    item.appendChild(top)
        top.appendChild(header(title));
        top.appendChild(listCollapseButton());
    item.appendChild(collapsibleContent());
    return item
};
    function header(title) {
    const sideHeader = document.createElement('h3')
    sideHeader.classList.add('sideBarHeader');
    sideHeader.textContent = title;
    return sideHeader;
    };
    function listCollapseButton(title) {
        const button = document.createElement('button');
        button.classList.add('listCollapseButton');
        button.addEventListener("click", toggleList);
        const collapseIcon = new Image();
        collapseIcon.src = chevronDown;

        function toggleList() {
            console.log(this.parentElement.parentElement.lastChild);
            collapsibleContent = (this.parentElement.parentElement.lastChild);

            if (collapsibleContent.classList.contains("collapsed")) {
                collapsibleContent.classList.remove("collapsed");
                collapsibleContent.classList.add("uncollapsed");
                collapseIcon.src = chevron;
                console.log(collapsibleContent);
            } else if (collapsibleContent.classList.contains("uncollapsed")) {
                collapsibleContent.classList.remove("uncollapsed");
                collapsibleContent.classList.add("collapsed");
                collapseIcon.src = chevronDown;
                console.log(collapsibleContent);
            }
        };     

        button.appendChild(header(title));
        button.appendChild(collapseIcon);
    
        return button;
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