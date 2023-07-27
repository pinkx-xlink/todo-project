function component() {
    const element = document.createElement('div');

    //lodash required for this
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());