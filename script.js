

 function run(){
    let htmlCode = document.querySelector("#html-code").value;
    let cssCode = document.querySelector("#css-code").value;
    let jsCode = document.querySelector("#js-code").value;
    let output = document.querySelector("#output");

    output.contentDocument.body.innerHTML = htmlCode +"<style>" +  cssCode + "</style>";
    output.contentWindow.eval(jsCode);
 }


//  function fetchTodo() {
//    fetch("https://jsonplaceholder.typicode.com/todos")
//    .then(data => data.json())
//    .then(data => console.log("TODOS", data))
//    .catch(error => console.log(error))
//  }

//  JSON -> Javascript object nottion

