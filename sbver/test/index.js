fetch('https://sipity19.github.io/sbver/ver.json')
  .then(response => response.json())
    .then(data => console.log(data));

