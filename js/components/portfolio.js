const portfolio = (filtersParent, filter, worksSelector, fish) => {
  const filtersContainer = document.querySelector(filtersParent),
        filters = filtersContainer.querySelectorAll(filter),
        works = document.querySelectorAll(worksSelector),
        no = document.querySelector(fish);

  let filterName;

  const showWorks = (filter) => {
    if(!filterName) {
      no.classList.remove('hidden');
      no.classList.add('show');
    } else {
      no.classList.add('hidden');
      no.classList.remove('show');
    }

    works.forEach((item) => {
      if (item.classList.contains(filterName)) {
        item.classList.add('show');
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
        item.classList.remove('show');
      }

    });
  };


  const onFiltersContainerClick = (evt) => {
    const target = evt.target;

    if(target.closest(filter)) {
      filters.forEach((element) => {
        element.classList.remove('active');
      });
      target.classList.add('active');

      if (target.classList.contains('granddad') || target.classList.contains('grandmother')) {
        filterName = '';
      } else {
        filterName = target.getAttribute('class').split(' ', 1)[0];
      }
      showWorks(filterName);
    }
  };

  filtersContainer.addEventListener('click', onFiltersContainerClick)
};

export default portfolio;
