let userInput;
let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';
let counter = 0;

function setup(){
    noCanvas();
    userInput = select('#userinput');
    //userInput.changed(startSearch);
    startSearch();
    function startSearch(){
        goWiki(userInput.value());
    }

    function goWiki(term){
        //let term = userInput.value();
        counter++;
        if(counter < 10){
            let url = searchUrl + term;
            loadJSON(url, gotData, 'jsonp'); 
        }
    }

    function gotData(data){
        let len = data[1].length;
        let index = floor(random(len));
        let title = data[1][index];
        try {
            title = title.replace(/\s+/g,"_");
        } catch {
            title = title;
        }
        createDiv(title);
        let url = contentUrl + title;
        //console.log(url);
        loadJSON(url, gotContent, 'jsonp');
    }

    function gotContent(data){
        let page = data.query.pages;
        let pageId= Object.keys(data.query.pages)[0];
        let content =page[pageId].revisions[0]['*'];
        let wordRegex = /\b\w{4,}\b/g;
        var words =content.match(wordRegex);
        var word = random(words);
        goWiki(word);
        console.log(word);

    }
    
}

function draw(){

}