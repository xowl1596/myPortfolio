class ProfilePhoto extends HTMLElement {
    connectedCallback() {
        let container = this.createContainer();
        let contents = this.createContents();

        this.appendContents(contents, container);
    }

    createContainer() {
        let container = document.createElement('div');
        container.classList.add('col-sm-4');

        return container;
    }

    createContents() {
        let contentTop = document.createElement('h2');
        contentTop.innerText = 'Hello :)';
        let contentMiddle = document.createElement('div');
        contentMiddle.classList.add('imgDiv');
        contentMiddle.id = 'profilePic';
        let contentBottom = document.createElement('p');
        contentBottom.innerText = '다 비켜 이 구역의 미친놈은 나야!!!';

        return [contentTop, contentMiddle, contentBottom];
    }

    appendContents(contents, container) {
        contents.map((item) => {
            container.appendChild(item);
        });
        this.classList.add('col-sm-4');
        this.appendChild(container);
    }
}
