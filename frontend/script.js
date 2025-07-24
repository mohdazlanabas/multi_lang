const languages = {
  "python": 9001,
  "javascript": 9002,
  "dart": 9005,
  "go": 9006,
  "rust": 9007,
  "c": 9008,
  "cpp": 9009,
  "csharp": 9010,
  "ruby": 9017,
  "kotlin": 9011
};

const messagesDiv = document.getElementById("messages");

Object.keys(languages).forEach(lang => {
  const port = languages[lang];
  fetch(`http://localhost:${port}/${lang}`)
    .then(res => res.text())
    .then(msg => {
      const wrapper = document.createElement("div");
      wrapper.className = "message";

      const text = document.createElement("div");
      text.innerText = msg;
      wrapper.appendChild(text);

      const btn = document.createElement("button");
      btn.innerText = "Show Code";
      btn.onclick = () => {
        const codeDiv = document.getElementById(`code-${lang}`);
        codeDiv.style.display = codeDiv.style.display === "none" ? "block" : "none";
      };
      wrapper.appendChild(btn);

      const code = document.createElement("pre");
      code.className = "code-block";
      code.id = `code-${lang}`;
      code.innerText = "// Loading...";
      code.style.display = "none";
      wrapper.appendChild(code);

      fetch(`/snippets/${lang}.txt`)
        .then(res => res.text())
        .then(codeText => {
          code.innerText = codeText;
        })
        .catch(() => {
          code.innerText = "// Code snippet not found.";
        });

      messagesDiv.appendChild(wrapper);
    })
    .catch(err => {
      const div = document.createElement("div");
      div.className = "message";
      div.innerText = `${lang.toUpperCase()} failed to load.`;
      messagesDiv.appendChild(div);
    });
});
