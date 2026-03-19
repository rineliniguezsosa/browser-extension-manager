import './style.css'
import data from './data.json'

const toggleThemeButton = document.getElementById('toggleThemeButton') as HTMLButtonElement;
const iconTheme = document.getElementById('iconTheme') as HTMLImageElement;
const extensionList = document.getElementById('extension-list') as HTMLDivElement;
let extensions = data;

toggleThemeButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  iconTheme.src = document.documentElement.classList.contains('dark') ?
    './src/assets/images/icon-sun.svg'
    : './src/assets/images/icon-moon.svg';
});

const extensionsAll = data.map((extension) => {
  return `
        <article data-id="${extension.id}" class="min-h-50 max-w-100 w-full flex flex-col 
        items-stretch rounded-2xl p-5 bg-card desktop:max-w-[33%]">
          <div class="flex flex-row">
            <div class="w-1/4">
              <img src="${extension.logo}" alt="${extension.name} Icon" />
            </div>
            <div class="w-3/4 px-1 pb-5">
              <h2 class="text-xl font-bold font-notosans text-title">${extension.name}</h2>
              <p class="text-base font-normal font-notosans text-text">${extension.description}</p>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button data-id="${extension.id}" class="rounded-full border-2 border-Neutral-300 px-4 py-1 font-notosans font-medium
                  bg-buttonRemove text-text removeExtensionButton">
              Remove
            </button>

            <label class="relative inline-block w-9.5 h-5 cursor-pointer">

              <input type="checkbox" class="peer sr-only" ${extension.isActive ? 'checked' : ''} />
              <div class="absolute inset-0 ${extension.isActive ? 'bg-Red-400' : 'bg-gray-300'} rounded-[34px] transition duration-400
                  peer-checked:peer-focus:shadow-[0_0_1px_#2196F3]">
              </div>
              <div class="absolute left-1 bottom-1 w-3.5 h-3.5 bg-white rounded-full
                  transition duration-400
                  peer-checked:translate-x-4.5">
              </div>
            </label>
          </div>
        </article>`;
}).join('');

extensionList.innerHTML = extensionsAll;

const removeExtensionButton = document.querySelectorAll('.removeExtensionButton') as NodeListOf<HTMLButtonElement>;

removeExtensionButton.forEach((button) => {
  button.addEventListener('click', (event) => {
    const target = event.currentTarget as HTMLButtonElement;

    const id = button.getAttribute('data-id');
    const article = target.closest('article') as HTMLElement;

    if (article) {
      article.remove();
    }

    if (id) {
      const extensionRemoved = extensions.filter((item) => item.id !== Number(id));
      extensions = extensionRemoved;
    }

  })
})
