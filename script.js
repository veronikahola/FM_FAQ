const containers = document.querySelectorAll('.container');
const hideShow = (answer) => {
    answer.classList.toggle('hidden');
  };

for (let i = 0; i < containers.length; i++) {
  const container = containers[i];
  const answer = container.querySelector('.a');

  container.addEventListener('click', () => hideShow(answer));
}

