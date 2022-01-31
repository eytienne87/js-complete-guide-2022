const openAddMenuBtn = document.querySelector('header button');
const addModal = document.getElementById('add-modal');
const removeAddMenuBtn = addModal.querySelector('.btn--passive');
const backdrop = document.getElementById('backdrop');

const inputs = document.querySelectorAll('input');
const addMovieButton = removeAddMenuBtn.nextElementSibling
const ul = document.querySelector('#movie-list');
const defaultMessage = document.getElementById('entry-text');

const movieElements = document.querySelectorAll('.movie-element')
const movieElement = document.querySelector('.movie-element')
const deleteModal = document.getElementById('delete-modal');
const errorMessage = addModal.lastElementChild.firstElementChild;

const movies = [];

// Movie Card

const addMovieHandler = () => {
  const titleValue = inputs[0].value.trim();
  const imageUrlValue = inputs[1].value.trim();
  const ratingValue = inputs[2].value;

  // Error validations
  const incompleteForm = (titleValue === '' || imageUrlValue === '');
  const invalidRating = (+ratingValue > 5 || +ratingValue < 1 || ratingValue === '');

  if (incompleteForm && invalidRating) {
    errorMessage.innerHTML = `<p class="error">*Please fill out all the fields</p>
                              <p class="error">*Rating must be between 1 and 5</p>`;
    return
  } else if (invalidRating) {
    errorMessage.innerHTML = `<p class="error">*Rating must be between 1 and 5</p>`;
    return
  } else if (incompleteForm) {
    errorMessage.innerHTML = `<p class="error">*Please fill out all the fields</p>`;
    return
  };

  const newMovie = {
    title: titleValue,
    imageUrl: imageUrlValue,
    rating: ratingValue
  }

  movies.push(newMovie);
  console.log(movies);
  toggleAddingModal();
};

const displayMovieCard = () => {
  defaultMessage.style.display = 'none';
  ul.insertAdjacentHTML('beforeend',
    `<li class="movie-element">
    <div class="movie-element__image">
    <img src="${inputs[1].value}" alt="movie picture">
    </div>
    <div class="movie-element__info">
    <h2>${inputs[0].value}</h2>
    <p>${inputs[2].value}/5 stars</p>
    </div>
    </li>`
  )
  toggleAddingModal();
  inputs[1].value = '';
  inputs[2].value = '';
  inputs[0].value = '';
}

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};


const toggleAddingModal = () => {
  errorMessage.innerHTML = '';
  addModal.classList.toggle('visible');
  toggleBackdrop();
}

const cancelAddMovieHandler = () => {
  toggleAddingModal();
}

const backdropClickHandler = () => {
  toggleAddingModal();
};


const displayDeletingModal = () => {
  deleteModal.classList.add('visible');
  backdrop.classList.add('visible');
}


movieElements.forEach(element => element.addEventListener('click', displayDeletingModal));

// Opening "Add movie" Modal
openAddMenuBtn.addEventListener('click', toggleAddingModal);

// Closing "Add movie" modal
removeAddMenuBtn.addEventListener('click', cancelAddMovieHandler);
backdrop.addEventListener('click', backdropClickHandler);

addMovieButton.addEventListener('click', addMovieHandler)
