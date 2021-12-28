function generateParts(partsAmount,footerAmount) {
  for (let index = 0; index < partsAmount; index++) {
    let part = document.createElement('h2');
    part.className = "tree-part"
    document.body.append(part)
  }

  for (let index = 0; index < footerAmount; index++) {
    let part = document.createElement('h2');
    part.className = "tree-footer"
    document.body.append(part)
  }
}

function setPart(index) {
  let treeParts = document.querySelectorAll(".tree-part,.tree-footer");
    if (treeParts[index].className == 'tree-part') {
      treeParts[index].textContent = '#'.repeat(index + 1)
    }
    else {
      treeParts[index].textContent = '##'
    }
}

function deleteParts() {
  let parts = document.querySelectorAll('h2');
  for (let index = 0; index < parts.length; index++) {
    parts[index].remove();
  }
}

function generate() {
  deleteParts();
  let partsValue = document.querySelector('#part-input').value;
  let footersValue = document.querySelector('#footer-input').value;

  generateParts(partsValue,footersValue)

  for (let index = 0; index < partsValue+footersValue; index++) {
    setPart(index);
  }
}