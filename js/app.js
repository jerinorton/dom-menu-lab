console.log('code is working')

const menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];
{text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
    ]};
    {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
    ]};
];


const main = document.querySelector('mainEl');
console.log('mainEl')

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>'; 

mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');

menuLinks.forEach(function(link) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
});


const subMenuEl = document.getElementById('sub-menu');


subMenuEl.style.height = '100%';


subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';


subMenuEl.classList.add('flex-around');


subMenuEl.style.position = 'absolute';


subMenuEl.style.top = '0';


const topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;


topMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    const link = evt.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);


    if (link.classList.contains('active')) {
    link.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
}

    topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
});

    link.classList.add('active');
//started to get consfused at this point
    const linkData = menuLinks.find(function(linkObj) {
    return linkObj.text === link.textContent;
});
    showingSubMenu = 'subLinks' in linkData;


    if (showingSubMenu) {
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top = '100%';
    } else {
    subMenuEl.style.top = '0';
    mainEl.innerHTML = '<h1>about</h1>';
    }
});


function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function(link) {
    const linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
    });
}

    
    subMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault();
    const link = evt.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);
    
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    
    topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
    });
    
    mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
});




