

const images = [
    { src: 'imagens/penguin.png', title: 'Fancy Penguin', category: 'Animals' },
    { src: 'imagens/catwinter.png', title: 'Cat Winter time', category: 'Animals' },
    { src: 'imagens/violão_.png', title: 'Squirrel playing instrument', category: 'Animals' },
    { src: 'imagens/cowboy.png', title: 'Cat Cowboy', category: 'Animals' },
    { src: 'imagens/doglazzy.png', title: 'Lazzy Dog', category: 'Animals' },
    { src: 'imagens/pet.png', title: 'Chicken Running', category: 'Animals' },
    { src: 'imagens/snow.png', title: 'Dog Winter time', category: 'Animals' },
    { src: 'imagens/hare.png', title: 'Hare Running', category: 'Animals' },
    { src: 'imagens/pet.png', title: 'Chicken Running', category: 'Nature' },
    { src: 'imagens/robot.png', title: 'Chicken Running', category: 'Robot' }
  ];

  const galleryContainer = document.querySelector('#gallery');
  const filterContainer = document.querySelector('#filters');
  const resetButton = document.querySelector('#reset');
  
  // Imagens na galeria
  function renderImages(imageArray) {
    galleryContainer.innerHTML = ''; 

    imageArray.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.src;
      imgElement.alt = image.title;
      imgElement.classList.add('gallery-item');
      galleryContainer.appendChild(imgElement);
    });
  }
  
  //Botões de filtro
  function renderFilters() {
    const categories = [...new Set(images.map(image => image.category))];
    categories.forEach(category => {
      const button = document.createElement('button');
      button.textContent = category;
      button.classList.add('filter-btn');
      button.addEventListener("click", function() {
        filterImages(category);
      });
      filterContainer.appendChild(button);
    });
}

  function filterImages(category) {
    const filteredImages = images.filter(image => image.category === category);
    renderImages(filteredImages);
  }

  // "Show all" botão
  resetButton.addEventListener("click", function () {
    renderImages(images);
  });
  
  renderFilters();
  renderImages(images)