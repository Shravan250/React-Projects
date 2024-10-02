function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
} 


const reactElement = {
    type: "a",
    props:{
        href: "http://google.com",
        target: "_blank"
    },
    children: "Visit Google"
}

const mainContainer = document.querySelector('#root');


customRender(reactElement, mainContainer);



//actual react element
/*
    const reactElement = {
        'a',
        {href: "http://google.com", target: "_blank"},
        children: "Visit Google"
    }
*/

