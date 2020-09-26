// написать функцию sortArrayBooble(array) - принемает массив -
//     возвращает новый массив(не мутирует старый)
// отсортированые методом пузерька

const randomArray = [1, 15, 22, 46, 11, 5, 9, 14, 81, 0];

const sortArrayBooble = function (array) {
  for (let i = 0; i <= array.lengh; i += 1) {
    if (array[i] > array[i + 1]) {
      console.log(i);
      array[i + 1] = array[i];
    }
  }
};

sortArrayBooble(randomArray);
