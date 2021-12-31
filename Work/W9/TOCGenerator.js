let articleContent = document.ELEMENT_NODE, TOCContainer = document.ELEMENT_NODE;
let eleSpan = document.ELEMENT_NODE;
let TOCDesHeader = document.ELEMENT_NODE;
let TOCDesList = document.ELEMENT_NODE;
let pointCount = 0, pointSubCount = 1;
let AllTOCLinks = document.ELEMENT_NODE;

/*-------------------------------------------------------*/
function generatingLinks(type) {
    pointCount = 1;
    
    aTOC = "<" + type + ">";
    for (i = 0; i < articleContent.childElementCount; i++){
        if (articleContent.children[i].nodeName == "H2") {
            aTOC += "<li><a href='"+ "#Point" + pointCount + "'>" + articleContent.children[i].innerText + '</a>';
            
            aTOCSub = '';
            var j = i + 1;
            pointSubCount = 1;
            while (j < articleContent.childElementCount && articleContent.children[j].nodeName != "H2") {
                if (articleContent.children[j].nodeName == "H3") {
                    aTOCSub += "<li><a href='" + "#Point" + pointCount + "SubP" + pointSubCount + "'>" + articleContent.children[j].innerText + '</a></li>';
                    pointSubCount++;
                }
                j++;
            }
            pointCount++;
            if (aTOCSub != '') {
                aTOCSub = "<" + type + ">" + aTOCSub + "</" + type + ">";
                aTOC += aTOCSub;
            }

            aTOC += "</li>";
        }
    }
    aTOC += "</" + type + ">";
    TOCDesList.innerHTML = aTOC;
}
/*-------------------------------------------------------*/
function addLinksToHeader(contentHoldr) {
    pointCount = 1;
    articleContent = document.querySelector(contentHoldr);
    
    for (i = 0; i < articleContent.childElementCount; i++){
        if (articleContent.children[i].nodeName == "H2") {
            articleContent.children[i].setAttribute("id","Point"+pointCount);
            
            var j = i + 1;
            pointSubCount = 1;
            while (j < articleContent.childElementCount && articleContent.children[j].nodeName != "H2") {
                if (articleContent.children[j].nodeName == "H3") {
                    articleContent.children[j].setAttribute("id","Point"+pointCount + "SubP" + pointSubCount);
                    pointSubCount++;
                }
                j++;
            }
            pointCount++;
        }
    }
}
/*-------------------------------------------------------*/
function addLinksToSpan(contentHoldr) {
    articleContent = document.querySelector(contentHoldr);

    pointCount = 1;

    for (i = 0; articleContent.children[i] != articleContent.lastElementChild; i++){
        if (articleContent.children[i].nodeName == "H2" && articleContent.children[i-1].nodeName != "SPAN") {
            
            tag = "<span class='point-span' id='Point" + pointCount + "'></span>";
            articleContent.children[i].insertAdjacentHTML("beforeBegin", tag);
            
            var j = i + 2;
            pointSubCount = 1;
            
            while (j < articleContent.childElementCount && articleContent.children[j].nodeName != "H2") {
                if (articleContent.children[j].nodeName == "H3" && articleContent.children[j - 1].nodeName != "SPAN") {
                    tag = "<span class='point-span' id='Point" + pointCount + "SubP" + pointSubCount + "'></span>";
                    articleContent.children[j].insertAdjacentHTML("beforeBegin", tag);
                    pointSubCount++;
                }
                j++;
            }
            pointCount++;
        }
    }
}
/*-------------------------------------------------------*/
function TOCDesWordpress(contentHoldr, tocContainer, status) {
    
    articleContent = document.querySelector(contentHoldr);
    TOCContainer = document.querySelector(tocContainer);
    
    /*Creating TOC Header*/

    TOCDesHeader = document.createElement('div');
    TOCDesList = document.createElement('div');

    TOCDesHeader.classList.add('TOCheader');
    TOCDesList.classList.add('TOCLinks');
    TOCDesList.classList.add('show');
    if (status == 'Show')
        TOCDesHeader.innerHTML += "<p><b>Table of Contents</b></p><a href='javascript:void(0)' id='TOCToggle'>Hide</a>";
    else {
        TOCDesHeader.innerHTML += "<p><b>Table of Contents</b></p><a href='javascript:void(0)' id='TOCToggle'>Show</a>";
        TOCDesList.classList.remove("show");
    }
    
    /*Creating TOC Links*/
    generatingLinks("ol");
    TOCContainer.classList.add("WPToc");
    TOCContainer.appendChild(TOCDesHeader);
    TOCContainer.appendChild(TOCDesList);

    /* TOC Toggle show/hide*/
    document.querySelector("#TOCToggle").addEventListener("click", function () {
        TOCDesList.classList.toggle("show");
        if (this.innerHTML == 'Show')
            this.innerHTML = 'Hide';
        else
            this.innerHTML = 'Show';
    });
}
/*-------------------------------------------------------*/
function TOCDesWordpress2(contentHoldr, tocContainer, status) {
    
    articleContent = document.querySelector(contentHoldr);
    TOCContainer = document.querySelector(tocContainer);
    
    /*Creating TOC Header*/
    TOCDesHeader = document.createElement('div');
    TOCDesList = document.createElement('div');

    TOCDesHeader.classList.add('TOCheader');
    TOCDesList.classList.add('TOCLinks');
    TOCDesList.classList.add('show');
    if (status == 'Show')
        TOCDesHeader.innerHTML += "<p><b>Table of Contents</b></p><a href='javascript:void(0)' id='TOCToggle'>Hide</a>";
    else {
        TOCDesHeader.innerHTML += "<p><b>Table of Contents</b></p><a href='javascript:void(0)' id='TOCToggle'>Show</a>";
        TOCDesList.classList.remove("show");
    }
    
    /*Creating TOC Links*/
    generatingLinks("ul");
    TOCContainer.classList.add("WPToc2");
    TOCContainer.appendChild(TOCDesHeader);
    TOCContainer.appendChild(TOCDesList);

    /* TOC Toggle show/hide*/
    document.querySelector("#TOCToggle").addEventListener("click", function () {
        TOCDesList.classList.toggle("show");
        if (this.innerHTML == 'Show')
            this.innerHTML = 'Hide';
        else
            this.innerHTML = 'Show';
    });
}
/*-------------------------------------------------------*/
function TOCDesModern(contentHoldr, tocContainer, status) {
    
    articleContent = document.querySelector(contentHoldr);
    TOCContainer = document.querySelector(tocContainer);
    
    /*Creating TOC Header*/
    TOCDesHeader = document.createElement('div');
    TOCDesList = document.createElement('div');

    TOCDesHeader.classList.add('TOCheader');
    TOCDesList.classList.add('TOCLinks');
    TOCDesList.classList.add('show');
    if (status == 'Show')
        TOCDesHeader.innerHTML += "<p><b>Table of Contents</b></p><a href='javascript:void(0)' id='TOCToggle'><i class='fa fa-chevron-up'></i></a>";
    else {
        TOCDesHeader.innerHTML += "<p><b>Table of Contents</b></p><a href='javascript:void(0)' class='rot180' id='TOCToggle'><i class='fa fa-chevron-up'></i></a>";
        TOCDesList.classList.remove("show");
    }
    
    /*Creating TOC Links*/
    generatingLinks("ul");
    TOCContainer.classList.add("Modern");
    TOCContainer.appendChild(TOCDesHeader);
    TOCContainer.appendChild(TOCDesList);

    /* TOC Toggle show/hide*/
    document.querySelector("#TOCToggle").addEventListener("click", function () {
        TOCDesList.classList.toggle("show");
        if (document.querySelector(".Modern #TOCToggle").classList.contains("rot180"))
            document.querySelector(".Modern #TOCToggle").classList.remove("rot180")
        else
            document.querySelector(".Modern #TOCToggle").classList.add("rot180");
    });
}
/*-------------------------------------------------------*/
function TOCGenerator(contentHoldr, tocContainer, TOCDesign, TOCstatus, Span) {
    let aTOC = "";
    let aTOCSub = "";
    
    /*---- TOC Design Type ----*/
    if (TOCDesign == "WP") {
        TOCDesWordpress(contentHoldr, tocContainer, TOCstatus);
    }
    if (TOCDesign == "WP2") {
        TOCDesWordpress2(contentHoldr, tocContainer, TOCstatus);
    }
    if (TOCDesign == "Modern") {
        TOCDesModern(contentHoldr, tocContainer, TOCstatus);
    }
    /*---- Adding ID with span or ID in Header ----*/
    if (Span == "span")
        addLinksToSpan(contentHoldr);
    else
        addLinksToHeader(contentHoldr);
    
    /*---- TOC Links on click scroll ----*/
    AllTOCLinks = document.querySelectorAll(".TOCLinks a");
    AllTOCLinks.forEach(Link => {
        Link.addEventListener("click", function (event) {
            document.getElementById(Link.getAttribute("href").substring(1)).scrollIntoView();
        })
    });
}