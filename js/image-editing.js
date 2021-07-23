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

const updateEffects = function (min,max,step,start,kind,unit) {
  effectLevelContainer.noUiSlider.updateOptions({
    range: {
      'min': min,
      'max': max,
    },
    step: step,
    start: start,
  });

  effectLevelContainer.noUiSlider.on('update',(__,handle,unencoded) => {
    effectLevelValue.value = unencoded[handle];
    imgUploadPreview.style.filter = `${kind}(${effectLevelValue.value}${unit})`;
  });
};

effectLevel.classList.add('hidden');

effects.addEventListener('click',(evt) => {
  if (evt.target.tagName === 'INPUT') {
    effect = evt.target.value;
    effectLevel.classList.remove('hidden');
    imgUploadPreview.removeAttribute('class');
    imgUploadPreview.classList.add(`effects__preview--${effect}`);

    if (effect === 'chrome') {
      updateEffects(0,1,0.1,1,'grayscale','');
    }

    if (effect === 'sepia') {
      updateEffects(0,1,0.1,1,'sepia','');
    }

    if (effect === 'marvin') {
      updateEffects(0,100,1,100,'invert','%');
    }

    if (effect === 'phobos') {
      updateEffects(0,3,0.1,3,'blur','px');
    }

    if (effect === 'heat') {
      updateEffects(0,3,0.1,3,'brightness','');
    }

    if (effect === 'none') {
      resetEffect();
    }
  }
});

export {resetEffect};
