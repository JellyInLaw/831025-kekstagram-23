import '../nouislider/nouislider.js';
import { imgUploadPreview } from './form.js';

const effectLevel = document.querySelector('.effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effects = document.querySelector('.effects__list');

effectLevel.classList.add('hidden');

//slider
noUiSlider.create(effectLevel, {
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

effects.addEventListener('click',(evt) => {
  if (evt.target.tagName === 'INPUT') {
    effect = evt.target.value;
    effectLevel.classList.remove('hidden');
    imgUploadPreview.removeAttribute('class');
    imgUploadPreview.classList.add(`effects__preview--${effect}`);

    if (effect === 'chrome') {
      effectLevel.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 1,
        },
        step: 0.1,
        start: 100,
      });

      effectLevel.noUiSlider.on('update',(__,handle,unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `grayscale(${effectLevelValue.value})`;
      });
    }

    if (effect === 'sepia') {
      effectLevel.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 1,
        },
        step: 0.1,
        start: 100,
      });

      effectLevel.noUiSlider.on('update',(__,handle,unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `sepia(${effectLevelValue.value})`;
      });
    }

    if (effect === 'marvin') {
      effectLevel.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 100,
        },
        step: 1,
        start: 100,
      });

      effectLevel.noUiSlider.on('update',(__,handle,unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `invert(${effectLevelValue.value}%)`;
      });
    }

    if (effect === 'phobos') {
      effectLevel.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 3,
        },
        step: 0.1,
        start: 100,
      });

      effectLevel.noUiSlider.on('update',(__,handle,unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `blur(${effectLevelValue.value}px)`;
      });
    }

    if (effect === 'heat') {
      effectLevel.noUiSlider.updateOptions({
        range: {
          'min': 0,
          'max': 3,
        },
        step: 0.1,
        start: 100,
      });

      effectLevel.noUiSlider.on('update',(__,handle,unencoded) => {
        effectLevelValue.value = unencoded[handle];
        imgUploadPreview.style.filter = `brightness(${effectLevelValue.value})`;
      });
    }

    if (effect === 'none') {
      imgUploadPreview.style.removeProperty('filter');
      effectLevel.classList.add('hidden');
    }
  }
});


