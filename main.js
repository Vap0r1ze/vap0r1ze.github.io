window.onload = function () {
  var span = document.getElementById('topic');
  var words = [
    'JavaScript', 'full stack', 'Vue',
    'Tatsumaki', 'web'
  ];
  var word = words[0];
  function backspace () {
    word = word.slice(0, -1);
    span.innerText = word;
    if (word) {
      setTimeout(backspace, 200);
    } else {
      words.push(words.shift());
      setTimeout(type, 200);
    }
  }
  function type () {
    word = words[0].slice(0, word.length + 1);
    span.innerText = word;
    if (word === words[0]) {
      finish();
    } else {
      setTimeout(type, 200);
    }
  }
  function finish () {
    setTimeout(() => {
      backspace();
    }, 5000);
  }
  finish();
}
