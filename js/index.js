const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const overlay = document.querySelector('.overlay');
const commentForm = document.querySelector('.comment-form')

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




const addComment = function (e) {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const comment = document.querySelector('#comment').value;


  const commentPost = document.createElement('article');
  commentPost.classList.add('comment');

  const commentImgContainer = document.createElement('div');
  commentImgContainer.classList.add('comment__img-container');

  const postImg = document.createElement('img');
  commentImgContainer.appendChild(postImg);

  postImg.src = 'https://picsum.photos/200';
  postImg.alt = `User's profile image`;

  const commentCopy = document.createElement('div');
  commentCopy.classList.add('comment__copy');

  const commentHeading = document.createElement('h3');
  commentHeading.classList.add('comment__copy--heading');
  commentHeading.textContent = `DATE HERE ${name}`;

  const commentCopyCopy = document.createElement('p');
  commentCopyCopy.classList.add('comment__copy--copy');
  commentCopyCopy.textContent = `${comment}`;

  commentCopy.appendChild(commentHeading);
  commentCopy.appendChild(commentCopyCopy);

  commentPost.appendChild(commentImgContainer);
  commentPost.appendChild(commentCopy);



  const commentsContainer = document.querySelector('.comments-container');
  commentsContainer.append(commentPost);
  


  // const markup = `
  //   <article class="comment">
  //     <div class="comment__img-container">
  //       <img
  //         src="../images/comment-image-1.jpg"
  //         alt="User's profile image"
  //       />
  //     </div>
  //     <div class="comment__copy">
  //       <h3 class="comment__copy--heading">
  //         Tuesday October 9th, 2021 by Sulaire
  //       </h3>
  //       <p class="comment__copy--copy">
          
  //       </p>
  //     </div>
  //   </article>
  // `;

  console.log(name, email, comment);
}


hamburger.addEventListener('click', toggleBurg);
commentForm.addEventListener('submit', addComment);

