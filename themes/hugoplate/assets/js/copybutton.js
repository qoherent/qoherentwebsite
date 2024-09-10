function addCopyButtonToCodeBlocks() {
    const codeBlocks = document.querySelectorAll(
      'pre > code[class^="language-"]'
    );
    const copyIcon = '<i class="fas fa-copy"></i>';
    const copiedIcon = '<i class="fas fa-check"></i>';
  
    codeBlocks.forEach((codeBlock) => {
      codeBlock.style.backgroundColor = "#272822";
  
      const copyButton = document.createElement("button");
      copyButton.classList.add("btn", "copy-code-button");
      copyButton.style.background = "none";
      copyButton.style.border = "none";
      copyButton.style.color = "#d1d1d1";
      copyButton.style.fontSize = "100%"; 
      copyButton.style.cursor = "pointer";
      copyButton.style.position = "absolute";
      copyButton.style.top = "2px";
      copyButton.style.right = "3px";
      copyButton.innerHTML = copyIcon;
  
      copyButton.addEventListener("click", () => {
        const codeToCopy = codeBlock.innerText;
        navigator.clipboard.writeText(codeToCopy);
  
        copyButton.innerHTML = copiedIcon;
        setTimeout(() => {
          copyButton.innerHTML = copyIcon;
        }, 1500);
      });
  
      const preElement = codeBlock.parentElement;
      preElement.style.position = "relative"; 
      preElement.appendChild(copyButton);
    });
  }
  
  document.addEventListener("DOMContentLoaded", addCopyButtonToCodeBlocks);
  