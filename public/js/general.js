import { actions } from "./general-actions.js";

actions.scroll.push(
    () => {
        const btnBack = document.getElementById("back-to-top");
        btnBack.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
        
        btnBack.style.display = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ? 'block' : 'none';
    }
);

document.addEventListener('DOMContentLoaded', () => {
    actions.ready.forEach(scrollFn => scrollFn());
    window.onscroll = () => {
        actions.scroll.forEach(scrollFn => scrollFn());
    }
});

// this function can be imported in any specific js
export const goTo = (link = '/') => {
    location.href = link;
}