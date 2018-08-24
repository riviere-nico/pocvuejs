import m from "mithril";

function test(elem) {
  console.log(this)
  elem.style.color = 'red'
}

const helloWorld = {
  view: () =>
    m('h1', {onclick: m.withAttr("value", "123")}, 'Hello World !')
}

export default helloWorld;
