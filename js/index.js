class Footer extends HTMLElement{
    connectedCallback(){
        let container = this.createContiner();
        let footerContents = this.createFooterContents();
        
        this.appendContents(container, footerContents);
    }

    createContiner() {
        let container = document.createElement('div');
        container.classList.add('mt-5', 'p-4', 'bg-dark', 'text-white', 'text-center');

        return container;
    }

    createFooterContents() {
        let footerContents = document.createElement('p');
        let year = new Date().getFullYear();
        let footerText = "©" + year + " Psycho All Right reserved";
        footerContents.innerText = footerText;

        return footerContents;
    }

    appendContents(container, footerContents) {
        container.appendChild(footerContents);
        this.appendChild(container);
    }
}

class Top extends HTMLElement{
    connectedCallback(){
        let container = this.createContainer();

        let topText = this.createTopText();

        let bottomText = this.createBottomText();

        this.appendContents(container, topText, bottomText);
    }

    createContainer() {
        let container = document.createElement('div');
        container.classList.add('p-5', 'bg-primary', 'text-white', 'text-center');
        return container;
    }

    createTopText() {
        let topText = document.createElement('h1');
        topText.innerText = "장태지";
        return topText;
    }

    createBottomText() {
        let bottomText = document.createElement('p');
        bottomText.innerText = "머지않아 대한민국을 손에 넣을 남자";
        return bottomText;
    }
    
    appendContents(container, topText, bottomText) {
        container.appendChild(topText);
        container.appendChild(bottomText);
        this.appendChild(container)
    }
}

class Navigation extends HTMLElement{
    connectedCallback(){
        let container = this.createContainer();
        
        
        this.appendChild(container)
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
        navItems.map((item)=>{
            navList.appendChild(item);
        });
        return navList;
    }

    createNavItems(){
        let navItems = [];
        let itemInformations = [
            ['Introduce', './index.html'],
            ['Projects', './projects.html'],
            ['Contact', './contact.html']
        ];

        itemInformations.map((itemInfo)=>{
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
    
    appendContents(container, topText, bottomText) {
        container.appendChild(topText);
        container.appendChild(bottomText);
        this.appendChild(container)
    }
}
customElements.define('main-footer', Footer);
customElements.define('main-top', Top);
customElements.define('main-nav', Navigation);

