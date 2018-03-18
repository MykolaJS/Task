let userList = document.getElementById('user');

function addUserList(user) {
  let strUser = JSON.stringify(user, "");
  // console.log(strUser);

  let elemUser = document.createElement('p');
  elemUser.innerHTML = strUser;
  userList.appendChild(elemUser);
}

userList.addEventListener('click', function(event) {
    JSON.parse(event.target.innerHTML, function (key, value) {
       if (key == 'id') window.open(`http://localhost:8080/task1.html?postId=${value}`, '_self').document.write(event.target.innerHTML);
      });
    });

function getData(url, funcArr) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);
  xhr.send();

  if (xhr.status != 200) {
    console.log('erorr' + xhr.status + ': ' + xhr.statusText);
  } else {
    let json = JSON.parse(xhr.response);
    // console.log(json);
    funcArr(json);
  }
}

getData('https://jsonplaceholder.typicode.com/posts', function(arrUser) {
  arrUser.forEach(function(user) {
    addUserList(user);
  });
})
