function slugify(title){
    const lowRegTitle=title.toLowerCase();
    const arraySlugify=lowRegTitle.split(" ");
    const arraySlugifyShow=arraySlugify.join("-");
    return arraySlugifyShow;
}

console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));