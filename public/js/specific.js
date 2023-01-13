import { actions } from '../js/general-actions.js';
// import { goTo } from '../js/general.js'; // you can use goTo fn

actions.ready.push(() => {
    document.querySelector('.specific-class').innerHTML = 'Hello specific world!';
    console.log('Hello specific world!');
})

