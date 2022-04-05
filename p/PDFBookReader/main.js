//Fullscreen and normal screen
var flag = 0;
try {
    document.querySelector("#fullsc").addEventListener('click', function(){
        if(flag == 0){
            document.querySelector(".book-content").requestFullscreen();
            flag = 1;
        }
        else if(flag == 1){
            flag = 0;
            document.exitFullscreen();
        }
    });
} catch (error) {
    
}
/*Adding Book details*/
var BookDetails = new Array();
BookDetails.push(new Array("No more Mr. Nice Guy", "Robert A. Glover", "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1337769144l/13851377.jpg"));
BookDetails.push(new Array("Hard Times Create Strong Men", "Stephan Aarnio", "https://images-na.ssl-images-amazon.com/images/I/61F+IQbLisL.jpg"));
BookDetails.push(new Array("Think and Grow Rich", "Nepolean Hill", "https://m.media-amazon.com/images/I/51Uw5tYiqsL.jpg"));
BookDetails.push(new Array("Everything is Fucked", "Mark Manson", "https://www.bookganga.com/eBooks/Content/images/books/06022cf7be8d48a1b9b0e2f4c7758fc8.jpg"));
BookDetails.push(new Array("The Subtle Art Of Not Giving A Fuck", "Mark Manson", "https://img1.od-cdn.com/ImageType-400/0293-1/BF5/143/7D/%7BBF51437D-BE51-4C7A-977B-E3DAEE0ED3A5%7DImg400.jpg"));
BookDetails.push(new Array("The POWER of Your Subconscious Mind", "Joseph Murphy", "https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg"));

/*Showing Books in the Index page*/
function showBooks(){
    bookTag = "";
    document.getElementById("BooksShows").innerHTML = "";
    for (i = 0; i < BookDetails.length; i++){
        bookTag = "<div class='book' pdf-data='" + i + "'>";
        bookTag += "<img src='" + BookDetails[i][2] + "' class='thumb'>";
        bookTag += "<p>" + BookDetails[i][0] + "</p>";
        bookTag += "<p>By- " + BookDetails[i][1] + "</p>";
        bookTag += "</div>";

        document.getElementById("BooksShows").innerHTML += bookTag;
    }
}

//Fetching PDF to the Canvas
let SelectedBook = new URL(window.location.href).searchParams.get('Bk');
if (SelectedBook != null) { 
    let BookTitle = document.querySelector('.container .top H1');
    BookTitle.innerHTML = BookDetails[SelectedBook][0];
}

    
    
