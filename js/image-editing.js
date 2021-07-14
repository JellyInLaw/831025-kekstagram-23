import '../nouislider/nouislider.js';
import { imgUploadPreview } from './form.js';

const effectLevel = document.querySelector('.effect-level');
const effectLevelContainer = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effects = document.querySelector('.effects__list');

//slider
noUiSlider.create(effectLevelContainer, {
  start: 100,
  range: {
    'min': 0,
    'max': 100,
  },
  step: 1,
  connect: 'lower',
});
//slider

let effect = 'none';

const resetEffect = function () {
  imgUploadPreview.style.removeProperty('filter');
  imgUploadPreview.removeAttribute('class');
  effectLevel.classList.add('hidden');
};

effectLevel.classList.add('hidden');

effects.addEventListener('click',(evt) => {
  if (evt.target.tagName === 'INPUT') {
    effect = evt.target.value;
    effectLevel.classList.remove('hidden');
    imgUploadPreview.removeAttribute('class');
    imgUploadPreview.classList.add(`effects__preview--${effect}`);

    if (effect === 'chrome') {
      effectLevelContainer.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 1,
        },
        step: 0.1,
        start: 100,
      });

      effectLevelContainer.noUiSlider.on('update',(__,handle,unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `grayscale(${effectLevelValue.value})`;
      });
    }

    if (effect === 'sepia') {
      effectLevelContainer.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 1,
        },
        step: 0.1,
        start: 100,
      });

      effectLevelContainer.noUiSlider.on('update',(__,handle,unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `sepia(${effectLevelValue.value})`;
      });
    }

    if (effect === 'marvin') {
      effectLevelContainer.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 100,
        },
        step: 1,
        start: 100,
      });

      effectLevelContainer.noUiSlider.on('update',(__,handle,unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `invert(${effectLevelValue.value}%)`;
      });
    }

    if (effect === 'phobos') {
      effectLevelContainer.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 3,
        },
        step: 0.1,
        start: 100,
      });

      effectLevelContainer.noUiSlider.on('update',(__,handle,unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `blur(${effectLevelValue.value}px)`;
      });
    }

    if (effect === 'heat') {
      effectLevelContainer.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 3,
        },
        step: 0.1,
        start: 100,
      });

      effectLevelContainer.noUiSlider.on('update',(__,handle,unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `brightness(${effectLevelValue.value})`;
      });
    }

    if (effect === 'none') {
      resetEffect();
    }
  }
});

export {resetEffect};
