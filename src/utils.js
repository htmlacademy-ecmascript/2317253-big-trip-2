import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
// стоит ли использовать этот плагин с точки зрения производительности?
dayjs.extend(duration);

function formatDate(date) {
  return date && dayjs(date).format('MMM D');
}

function formatTime(date) {
  return date && dayjs(date).format('HH:mm');
}

function formatDateTimeForInput(date) {
  return date && dayjs(date).format('DD/MM/YY HH:mm');
}

function getTimeDifference(dateFrom, dateTo) {
  const diff = dayjs(dateTo).diff(dayjs(dateFrom));
  const dur = dayjs.duration(diff);
  const days = dur.days('DD');
  const hours = dur.hours('HH');
  const minutes = dur.minutes('mm');
  const result = [];
  if (days > 0) {
    result.push(`${days.toString().padStart(2, '0')}D`);
  }
  if (hours > 0) {
    result.push(`${hours.toString().padStart(2, '0')}H`);
  }
  result.push(`${minutes.toString().padStart(2, '0')}M`);
  return result.join(' ');
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomPrice() {
  return Math.floor(Math.random() * 10000) + 10;
}

function getRandomIds(min, max, count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    const id = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
    if (!result.includes(id)) {
      result.push(id);
    }
  }
  console.log('result of getRandomId', result);
  return result;
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//правильно ли эту функцию объявлять тут? Или лучше в point-view.js?
function getDestination(pointDestinationId, AllTripDestinations) {
  return AllTripDestinations.find(
    (destionation) => pointDestinationId === destionation.id
  );
}

export {
  getRandomArrayElement,
  getRandomPrice,
  formatDate,
  capitalizeFirst,
  getDestination,
  formatTime,
  getTimeDifference,
  getRandomIds,
  formatDateTimeForInput,
};
