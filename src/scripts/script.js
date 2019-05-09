var ourStoriesConsts = {
  header: "our-stories__accordion--header",
  content: "our-stories__accordion--content",
  contentCls: ".our-stories__accordion--content",
  contentActiveCls: ".our-stories__accordion--content.-active",
  contentInnerCls: ".our-stories__accordion--content--inner"
};

var flockDays = [
    '2019-04-12T00:00:00',
    '2019-04-26T00:00:00',
    '2019-05-10T00:00:00',
    '2019-05-24T00:00:00',
    '2019-06-07T00:00:00',
    '2019-06-21T00:00:00',
    '2019-07-05T00:00:00',
    '2019-07-19T00:00:00'
];

// Init
toggleAccordionItem(document.querySelector(ourStoriesConsts.contentCls));
setNextFlockDate();

document.addEventListener("click", function(e) {
  if (e.target.classList.contains(ourStoriesConsts.header)) {
    var matchingAccordionElement = getItemFromCollectionByClassName(
      e.target.parentElement.parentElement.children,
      ourStoriesConsts.content
    );
    toggleAccordionItem(matchingAccordionElement);
  }
  if(e.target.classList.contains('hamburger__menu--link')) {
    document.querySelector('.checkbox-toggle').click();
  }
});

window.addEventListener('resize', function() {
  var activeAccordionItem = document.querySelector(ourStoriesConsts.contentActiveCls);
  activeAccordionItem.style.maxHeight = activeAccordionItem.querySelector(ourStoriesConsts.contentInnerCls).scrollHeight + "px";
});

function getItemFromCollectionByClassName(HTMLCollection, className) {
  for (var i = 0; i < HTMLCollection.length; i++) {
    if (HTMLCollection[i].classList.contains(className))
      return HTMLCollection[i];
  }
}

function toggleAccordionItem(elem) {
  var prevElem = document.querySelector(ourStoriesConsts.contentActiveCls);

  if (!elem.style.maxHeight || prevElem !== elem) {
    if (prevElem) {
      prevElem.className = ourStoriesConsts.content;
      prevElem.style.maxHeight = 0;
    }
    elem.className += " -active";
    elem.style.maxHeight =
      elem.querySelector(ourStoriesConsts.contentInnerCls).scrollHeight + "px";
  }
}

function getFlockDateString(date) {
  var dateObj = new Date(date);
  var monthNames = [
    "januari", "februari", "maart",
    "april", "mei", "juni", "juli",
    "augustus", "september", "oktober",
    "november", "december"
  ];
  var dayNames = [
    "zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"
  ];

  var day = dateObj.getDate();
  var dayOfWeekIndex = dateObj.getDay();
  var monthIndex = dateObj.getMonth();

  if (date) {
    return 'De volgende Flock. dag is op ' + dayNames[dayOfWeekIndex] + ', ' + day + ' ' + monthNames[monthIndex] + '.';
  }
  
  return '';
}

function setNextFlockDate () {
  var nextFlockDay = getFlockDateString(getNextDate(flockDays, new Date()));

  document.querySelector('#next-flock-day').innerHTML = nextFlockDay;
}

function getNextDate(arr, val) {
  for (var i=0; i < arr.length; i++) {
    if (new Date(arr[i]) > val) {
      return arr[i];
    }
  }
  // No next date in array, add new flock days.
  return false;
}

var scroll = new SmoothScroll("a[data-scroll]");
