import m from "mithril";
import headbar from "./components/headbar";

let youSaid = '123';

const helloWorld = {
  view: () => m('div',
    m('input', {
      value: youSaid,
      oninput: e => youSaid = e.target.value
    }),
    m('p', 'You said: ' + youSaid)
  )
}

const listEcho = {
  view: () =>  m('ul', youSaid
    .split('')
    .map(c => m('li', c))
  )
}

const app = {
  view: () => m('div',
    m(headbar),
    m(helloWorld),
    m(listEcho))
}

m.mount(document.body, app);
