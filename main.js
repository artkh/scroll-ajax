let content = document.querySelector('#content');
let page = 1;
window.addEventListener('scroll', function() {
  let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
  let clientHeight = document.documentElement.clientHeight;

  let request = new XMLHttpRequest();
  request.open('GET', `ajax${page}.html`);
  request.setRequestHeader('Content-type', 'application/html; charset=utf-8');
  request.send();

  request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status == 200 && windowRelativeBottom < clientHeight + 100) {
      let data = request.response;
      content.insertAdjacentHTML("beforeend", data);
      page++;
    }
  });
});