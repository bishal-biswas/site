/*-------------Work Type Filter Buttons--------------*/
let workType = document.querySelectorAll('.portfolio .workTypes .types');
var FiltVal = '.all';
var FiltValText = 'All Works';
workType.forEach(ele => ele.addEventListener('click', function () {

    $('.wrapper .container .main').animate({
        scrollTop : $('.workHolder').offset().top
    }, 500);

    workType.forEach(e => {
        e.classList.remove('active');
    });
    ele.classList.add('active');

    FiltVal = ele.getAttribute('data-filter');
    FiltValText = ele.textContent;
    if (FiltVal == '.all') {
        $('.portfolio .workHolder .work').show('1000');
    }
    else {
        $('.portfolio .workHolder .work').not(FiltVal).hide('1500');
        $('.portfolio .workHolder .work').filter(FiltVal).show('2000');
    }
}));

/*-------------Work Details show--------------*/
let child, SelectedWorkIndex, filteredWorks, filteredWorksTitle , clickedWork;
let tempNavBttns ,NavBttns;
let allWorks = document.querySelectorAll('.workHolder .work');

allWorks.forEach(clickedWork => clickedWork.addEventListener('click', function () {

    filteredWorks = document.querySelectorAll('.workHolder .work' + FiltVal);
    SelectedWorkIndex = Array.from(filteredWorks).indexOf(clickedWork);
    
    filteredWorksTitle = clickedWork.children[0].lastElementChild.textContent;
    
    showWorkDetails(SelectedWorkIndex, filteredWorks , filteredWorksTitle); 
    /*-------------Show Work using Nav Button--------------*/
    /* NavBttns =  document.querySelectorAll('.workDetailsHolder .workDetails .projectDetails .WorkNav a');
    
    NavBttns.forEach(btns => btns.addEventListener('click' , function(){
        showWorkDetails(Number(btns.getAttribute('index')) , filteredWorks , btns.children[2].textContent );
    }));    */
}));

function showWorkDetails(index, filterWork ,workTitle) {
    /*4 Work Details*/document.querySelector('.workDetailsHolder .workDetails').scrollTop = 0;
    /*1 Counter*/document.querySelector('.workDetailsHolder .workHeadHolder .workCounter p').textContent = (index+1) + ' of ' + filterWork.length + ' ('+FiltValText+')';
    /*2 Work Title*/document.querySelector('.workDetailsHolder .workDetails .mainThumb h2').textContent = workTitle;
    /*3 Main Thumbnail*/document.querySelector('.workDetailsHolder .workDetails .mainThumb .main-thumb').innerHTML = filterWork[index].children[1].children[0].innerHTML;
    /*4 Work Details*/document.querySelector('.workDetailsHolder .workDetails .projectDetails').innerHTML = filterWork[index].children[1].children[1].innerHTML;
    /*5 Screenshot images*/let WImgLink = document.querySelectorAll('.workDetailsHolder .workDetails .projectDetails .screenShots a');

    for(i=0; i< WImgLink.length;i++){WImgLink[i].setAttribute('data-fancybox', 'W'+(index+1) );}

    let previousWorkBtn =  document.querySelector('.WorkDetailbottomNav .WorkNav a:nth-child(1)');
    let nextWorkBtn =  document.querySelector('.WorkDetailbottomNav .WorkNav a:nth-child(2)');
    
    /*Work Nav Button*/
    if((index+1) != filterWork.length){
        nextWorkBtn.children[1].setAttribute('src' , filterWork[index + 1].children[0].children[0].getAttribute('src'));
        nextWorkBtn.children[2].innerHTML = filterWork[index + 1].children[0].children[1].innerHTML;
        nextWorkBtn.setAttribute('index' , (index+1));
        nextWorkBtn.style.display = 'flex';
    }
    else
        nextWorkBtn.style.display = 'none';

    if(index != 0){
        previousWorkBtn.children[1].setAttribute('src' , filterWork[index-1].children[0].children[0].getAttribute('src'));
        previousWorkBtn.children[2].innerHTML = filterWork[index-1].children[0].children[1].innerHTML;
        previousWorkBtn.setAttribute('index' , (index-1));
        previousWorkBtn.style.display = 'flex';
    }
    else
        previousWorkBtn.style.display = 'none';
    
    /*Adding Nav Button*/
    document.querySelector('.workDetailsHolder .workDetails .projectDetails').innerHTML += document.querySelector('.WorkDetailbottomNav').innerHTML;
    
    NavBttns =  document.querySelectorAll('.workDetailsHolder .workDetails .projectDetails .WorkNav a');
    NavBttns.forEach(btns => btns.addEventListener('click' , function(){
        document.querySelector('.workDetailsHolder .workDetails .projectDetails').innerHTML="";
        showWorkDetails(Number(btns.getAttribute('index')) , filteredWorks , btns.children[2].textContent );
    }));   
    
    $('.workDetailsHolder').fadeIn(1500);
    document.querySelector('.workDetailsHolder').style.display = 'flex';
}

/*-------------Work Details Close Button--------------*/
let WorkDetailsClsBtn = document.querySelector('.workDetailsHolder .workHeadHolder .clsBtn');
let workDetailsHolder = document.querySelector('.workDetailsHolder');
WorkDetailsClsBtn.addEventListener('click', function () {
    $('.workDetailsHolder').fadeOut(500);
});

/*-------------showing work using URL--------------*/

function showUsingURL(){
    
    let getWorkIndex = new URL(window.location.href).searchParams.get('WI');
    if(getWorkIndex != null){
        getWorkIndex= parseInt(getWorkIndex);
        filteredWorks = document.querySelectorAll('.workHolder .work' + FiltVal);
        showWorkDetails(getWorkIndex, filteredWorks , allWorks[getWorkIndex].children[0].innerText);
    }
}
showUsingURL();