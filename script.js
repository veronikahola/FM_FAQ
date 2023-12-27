const containers = document.querySelectorAll('.container');


for (let i = 0; i < containers.length; i++) {
  const container = containers[i];
  const answer = container.querySelector('.a');
  const icon = container.querySelector('.img');

  const hideShow = (answer) => {

    if (icon.src.includes('icon-plus')) {
        icon.src = '/assets/images/icon-minus.svg';
      } else {
        icon.src = '/assets/images/icon-plus.svg';
      }

    answer.classList.toggle('hidden');

  };

  container.addEventListener('click', () => hideShow(answer));
}

