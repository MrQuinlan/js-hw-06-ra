const refs = {
    list: document.querySelector("ul"),
    item: document.querySelectorAll(".item"),
};

console.log("Number of categories: ", refs.list.childElementCount);

refs.item.forEach((el) => {
    console.log("Category: ", el.firstElementChild.textContent);
    console.log("Elements: ", el.lastElementChild.childElementCount);
});
