var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    var articles = xhr.response.articles;
    console.log(articles); // Add this line to inspect the data
    var articlesDiv = document.getElementById('articles');

    if (Array.isArray(articles)) {
      articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articlesDiv.appendChild(articleDiv);
      });
    } else {
      console.error('Expected an array of articles, but received:', articles);
    }
  } else {
    console.error('Failed to fetch JSON data:', xhr.statusText);
  }
};

xhr.onerror = function() {
  console.error('Network error occurred while fetching JSON data.');
};

xhr.send();