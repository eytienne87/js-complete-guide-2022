const openAddMenuBtn = document.querySelector('header button');
const addModal = document.getElementById('add-modal');
const removeAddMenuBtn = addModal.querySelector('.btn--passive');
const backdrop = document.getElementById('backdrop');

const inputs = document.querySelectorAll('input');
const addMovieButton = removeAddMenuBtn.nextElementSibling;
const ul = document.querySelector('#movie-list');
const defaultMessage = document.getElementById('entry-text');

const movieElements = document.querySelectorAll('.movie-element');
const movieElement = document.querySelector('.movie-element');
const deleteModal = document.getElementById('delete-modal');
const errorMessage = addModal.lastElementChild.firstElementChild;

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    defaultMessage.style.display = 'block';
  } else {
    defaultMessage.style.display = 'none';
  }
}

const clearMovieInputs = () => {
  for (const input of inputs) {
    input.value = '';
  }
}

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
  toggleAddingModal();
  clearMovieInputs();
  updateUI();
  renderNewMovieElement(newMovie.title, newMovie.imageUrl, newMovie.rating);
  console.log(movies);
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="movie picture">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `
  ul.append(newMovieElement);
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
  clearMovieInputs();
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
