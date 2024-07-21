let book={
    title:"javascript",
    author:"xyz",
    year:2002,
}
console.log(book);

console.log(book.author, book["title"]);

book.Greeting=function(){
    console.log(`the title of book is ${this.title} and author name is ${this.author}`)
}

book.Greeting();

book.changeYearName=function(yearName){
    this.year=2004
    console.log(book.year);
}

book.changeYearName();
console.log(book);


let liberary={
    name:"youthliberary",
    books:[{
        title:"javascript",
    author:"xyz",},
{
    title:"java",
    author:"abc",
    year:2008,
},]
}
console.log(liberary);
console.log(liberary.name, liberary.books[0].title, liberary.books[1].title);

for (const key in book) {
   console.log(book);
}

console.log(Object.keys(book))
console.log(Object.values(book))
