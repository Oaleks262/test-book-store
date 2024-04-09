document.addEventListener('DOMContentLoaded', function() {
    // Створюємо об'єкт з інформацією про книгу
    const book = {
        title: '1984',
        cover: './img/1984.webp',
        description: '"1984" — один з найголовніших і вже точно найважливіший роман минулого сторіччя. Важко пригадати якийсь інший літературний твір, який би без зайвої манірності, настільки ж чітко, прадиво і жорстоко поставив перед загалом таку ж важливу проблематику. А саме: що таке влада? Яка її природа? Куди прямує сучасне суспільство? Що таке справжня смерть, і яка саме смерть є справжньою — фізична смерть індивіда, а чи смерть його внутрішнього єства, при збереженні фізичного тіла? Що таке свобода, і як вона співвідноситься з владою? Чи можливий бодай найменший прояв свободи, нехай навіть у вигляді можливості мати свої власні глибоко приховані, вільні від примусу думки, в умовах абсолютної тоталітарної влади?',
        author: {
          name: 'Джордж Орвелл',
          link: 'https://uk.wikipedia.org/wiki/%D0%94%D0%B6%D0%BE%D1%80%D0%B4%D0%B6_%D0%9E%D1%80%D0%B2%D0%B5%D0%BB%D0%BB'
        },
        characteristics: {
          "Жанр": 'Роман',
          "Рік": 2024,
          "Кількість сторінок": 320
        }
      };
  
    // дані про книгу
    document.querySelector('.book-title').textContent = book.title;
    document.querySelector('.book-cover').src = book.cover;
    document.querySelector('.description').textContent = book.description;
    const authorLink = document.querySelector('.author-link');
    authorLink.textContent = book.author.name;
    authorLink.href = book.author.link;
  
    const characteristicsList = document.querySelector('.characteristics');
    for (const [key, value] of Object.entries(book.characteristics)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${key}: ${value}`;
      characteristicsList.appendChild(listItem);
    }
    // функція кнопки "читати більше"
    const readMoreBtn = document.querySelector('.read-more-btn');
    const description = document.querySelector('.description');
  
    readMoreBtn.addEventListener('click', function() {
      if (description.style.height === '50px') {
        description.style.height = description.scrollHeight + 'px';
        readMoreBtn.textContent = 'Згорнути';
      } else {
        description.style.height = '50px';
        readMoreBtn.textContent = 'Розгорнути';
      }
    });
});