var ourStoriesConsts = {
    header: 'our-stories__accordion--header',
    content: 'our-stories__accordion--content',
    contentCls: '.our-stories__accordion--content',
    contentActiveCls: '.our-stories__accordion--content.-active',
    contentInnerCls: '.our-stories__accordion--content--inner',
}

document.addEventListener('click', function(e){
    if(e.target.classList.contains(ourStoriesConsts.header)){
        var matchingAccordionElement = getItemFromCollectionByClassName(e.target.parentElement.parentElement.children, ourStoriesConsts.content);
        toggleAccordionItem(matchingAccordionElement);
        
    }
  })

function getItemFromCollectionByClassName (HTMLCollection, className) {
    for (var i = 0; i < HTMLCollection.length; i++) {
        if(HTMLCollection[i].classList.contains(className)) return HTMLCollection[i];
    }
}


function toggleAccordionItem(elem) {
    var prevElem = document.querySelector(ourStoriesConsts.contentActiveCls);

    if (!elem.style.maxHeight || prevElem !== elem) {
        if (prevElem) {
            prevElem.className = ourStoriesConsts.content;
            prevElem.style.maxHeight = 0;
        }
        elem.className+= " -active";
        elem.style.maxHeight = elem.querySelector(ourStoriesConsts.contentInnerCls).scrollHeight + "px";
    } else {
        
    }
}

toggleAccordionItem(document.querySelector(ourStoriesConsts.contentCls));

var scroll = new SmoothScroll('a[data-scroll]');