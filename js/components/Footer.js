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