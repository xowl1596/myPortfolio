class Navigation extends HTMLElement {
    connectedCallback() {
        let container = this.createContainer();
        this.appendChild(container);
    }

    createContainer() {
        let outerContainer = document.createElement('nav');
        outerContainer.classList.add('navbar', 'navbar-expand-sm', 'bg-dark', 'navbar-dark');

        let innerContainer = document.createElement('div');
        innerContainer.classList.add('container-fluid');

        let navList = this.createNavList();

        innerContainer.appendChild(navList);
        outerContainer.appendChild(innerContainer);

        return outerContainer;
    }

    createNavList() {
        let navList = document.createElement('ul');
        navList.classList.add('navbar-nav');

        let navItems = this.createNavItems();
        navItems.map((item) => {
            navList.appendChild(item);
        });
        return navList;
    }

    createNavItems() {
        let navItems = [];
        let itemInformations = [
            ['Introduce', './index.html'],
            ['Projects', './projects.html'],
            ['Contact', './contact.html']
        ];

        itemInformations.map((itemInfo) => {
            let item = document.createElement('li');
            item.classList.add('nav-item');

            let link = document.createElement('a');
            link.classList.add('nav-link');
            link.innerText = itemInfo[0];
            link.setAttribute('href', itemInfo[1]);

            item.appendChild(link);
            navItems.push(item);
        });

        return navItems;
    }
}
