class Top extends HTMLElement {
    connectedCallback() {
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
        this.appendChild(container);
    }
}
