const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const overlay = document.querySelector('.overlay');
const commentForm = document.querySelector('.comment-form');

const toggleMobMenu = function() {
  overlay.classList.toggle('active');

  if(overlay.classList.contains('active')) {
    overlay.classList.remove('slide-right');
    overlay.classList.add('slide-left');
  } else {
    overlay.classList.remove('slide-left');
    overlay.classList.add('slide-right');
  }
}

const toggleBurg = function() {
hamburger.classList.toggle('active');
toggleMobMenu();
}

const randomInt = function() {
  return Math.floor(Math.random() * 100);
};



const addComment = function (e) {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const comment = document.querySelector('#comment').value;

  const date = new Date(Date.now());

  const currentWeekday = new Intl.DateTimeFormat('en-us', {
    weekday: 'long',
  }).format(date);
  const currentMonth = new Intl.DateTimeFormat('en-us', {
    month: 'long',
  }).format(date);
  const currentDate = new Intl.DateTimeFormat('en-us', {
    day: 'numeric',
  }).format(date);
  const currentYear = new Intl.DateTimeFormat('en-us', {
    year: 'numeric',
  }).format(date);

  const pr = new Intl.PluralRules('en-US', {
    type: 'ordinal'
  });
  const suffixes = new Map([
    ['one',   'st'],
    ['two',   'nd'],
    ['few',   'rd'],
    ['other', 'th'],
  ]);
  const formatOrdinals = (n) => {
    const rule = pr.select(n);
    const suffix = suffixes.get(rule);
    return `${n}${suffix}`;
  };

  const commentPost = document.createElement('article');
  commentPost.classList.add('comment');

  const commentImgContainer = document.createElement('div');
  commentImgContainer.classList.add('comment__img-container');

  const postImg = document.createElement('img');
  commentImgContainer.appendChild(postImg);

  postImg.src = `https://randomuser.me/api/portraits/men/${randomInt()}.jpg`;
  postImg.alt = `User's profile image`;

  const commentCopy = document.createElement('div');
  commentCopy.classList.add('comment__copy');

  const commentHeading = document.createElement('h3');
  commentHeading.classList.add('comment__copy--heading');
  commentHeading.textContent = `${currentWeekday} ${currentMonth} ${formatOrdinals(currentDate)}, ${currentYear} by ${name}`;

  const commentCopyCopy = document.createElement('p');
  commentCopyCopy.classList.add('comment__copy--copy');
  commentCopyCopy.textContent = `${comment}`;

  commentCopy.appendChild(commentHeading);
  commentCopy.appendChild(commentCopyCopy);

  commentPost.appendChild(commentImgContainer);
  commentPost.appendChild(commentCopy);

  const commentsContainer = document.querySelector('.comments-container');
  commentsContainer.append(commentPost);
  

}


hamburger.addEventListener('click', toggleBurg);
commentForm.addEventListener('submit', addComment);

