function addCopyButtonToCodeBlocks() {
  const codeBlocks = document.querySelectorAll(
    'pre > code[class^="language-"]',
  );
  codeBlocks.forEach((codeBlock) => {
    codeBlock.style.backgroundColor = "#272822";

    const copyButton = document.createElement("button");
    copyButton.classList.add("btn", "copy-code-button");
    copyButton.type = "button";
    copyButton.setAttribute("aria-label", "Copy code");
    copyButton.style.background = "none";
    copyButton.style.border = "none";
    copyButton.style.color = "#d1d1d1";
    copyButton.style.fontSize = "100%";
    copyButton.style.cursor = "pointer";
    copyButton.style.position = "absolute";
    copyButton.style.top = "2px";
    copyButton.style.right = "3px";
    copyButton.innerHTML = `
      <i class="fa-solid fa-copy copy-code-icon copy-code-icon-default" aria-hidden="true"></i>
      <i class="fa-solid fa-check copy-code-icon copy-code-icon-success" aria-hidden="true"></i>
    `;

    copyButton.addEventListener("click", () => {
      const codeToCopy = codeBlock.innerText;
      navigator.clipboard.writeText(codeToCopy);

      copyButton.classList.add("is-copied");
      copyButton.setAttribute("aria-label", "Code copied");
      setTimeout(() => {
        copyButton.classList.remove("is-copied");
        copyButton.setAttribute("aria-label", "Copy code");
      }, 1500);
    });

    const preElement = codeBlock.parentElement;
    preElement.style.position = "relative";
    preElement.appendChild(copyButton);
  });
}

document.addEventListener("DOMContentLoaded", addCopyButtonToCodeBlocks);
