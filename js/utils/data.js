import {getRandomIntInclusive} from './get-random-int-inclusive.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артем',
  'Влад',
  'Венеамин',
  'Татьяна',
  'Анастасия',
  'Олег',
  'Валера',
  'Василиса',
  'Турбо-Валера',
  'Никита',
  'Денис',
];

const DESCRIPTION = ['Машина','Футболка','Яблоко','Закат','Просто красота'];

const countComments = 25;

function getPhotoURL (index) {
  return `photos/${ index + 1 }.jpg`;
}

function getCommentId (number) {
  return number * 5;
}

function getAvatarURL (){
  return `img/avatar-${ getRandomIntInclusive(1,6) }.svg`;
}

function getMessage (){
  return MESSAGES[getRandomIntInclusive(0,MESSAGES.length - 1)];
}

function getName (){
  return NAMES[getRandomIntInclusive(0,NAMES.length - 1)];
}

function getComment (index){
  const comment = {
    id:getCommentId(index),
    avatar:getAvatarURL(),
    message:getMessage(),
    name: getName(),
  };
  return comment;
}

function getComments (index) {
  const comments = [];
  comments.length = getRandomIntInclusive(1,10);
  for (let jindex = 0 ; jindex < comments.length ; jindex ++ ){
    comments[jindex] = getComment(index + getRandomIntInclusive(1,100000));
  }
  return comments;
}

const createPhotoDescription = (index) => (
  {
    id:index,
    url: getPhotoURL(index),
    description:DESCRIPTION[getRandomIntInclusive(0,DESCRIPTION.length - 1)],
    likes:getRandomIntInclusive(15,200),
    comments:getComments(index),
  }
);

const photoDescriptions = new Array(countComments).fill(null).map(
  (currElement,index) => createPhotoDescription(index),
);

export {photoDescriptions};
