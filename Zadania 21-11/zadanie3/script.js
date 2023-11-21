const getResponse = (response) => {
    if (response.status == 200)
        return response.json();
    else
        throw new Error('Wystąpił błąd podczas pobierania danych z tego adresu.');
};

const showDataJson = (dataJSON) => {
    for (const post of dataJSON) {
        console.log("----------------------------------------------");
        console.log("Title [" + post.title + "]");
        console.log("Body [" + post.body + "]");
    }
};

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(getResponse)
    .then(showDataJson)
    .catch(error => console.error("Wykryto błąd -> " + error));