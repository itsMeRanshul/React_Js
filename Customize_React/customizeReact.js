function customRender(ReactElement,maincontainer){
   /*
    const domElement=document.createElement(ReactElement.type)
    domElement.innerHTML=ReactElement.children
    domElement.setAttribute('href',ReactElement.props.href)
    domElement.setAttribute('target',ReactElement.props.target)
    maincontainer.appendChild(domElement)
    */
   const domElement=document.createElement(ReactElement.props.type)
   domElement.innerHTML=ReactElement.children
   for (const prop in ReactElement.props) {
    if(prop=='children') continue;
    domElement.setAttribute(prop,ReactElement.props[prop])
   }
   maincontainer.appendChild(domElement)
}

const ReactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click this to visit google .com'
}
const maincontainer=document.querySelector('.root')

customRender(ReactElement,maincontainer)
