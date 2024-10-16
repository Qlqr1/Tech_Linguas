function changeLanguage(lang) {
    const title = document.getElementById("title");
    const content = document.getElementById("content");
    
    if (lang === 'en') {
        title.textContent = "Welcome to my website!";
        content.textContent = "This is an example of content in English.";
    } else {
        title.textContent = "Bem-vindo ao meu site!";
        content.textContent = "Este é um exemplo de conteúdo em português.";
    }
}