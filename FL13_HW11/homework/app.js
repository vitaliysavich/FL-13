const data = [
  {
    folder: true,
    title: 'Pictures',
    children: [
      {
        title: 'logo.png'
      },
      {
        folder: true,
        title: 'Vacations',
        children: [
          {
            title: 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Desktop',
    children: [
      {
        folder: true,
        title: 'screenshots',
        children: null
      }
    ]
  },
  {
    folder: true,
    title: 'Downloads',
    children: [
      {
        folder: true,
        title: 'JS',
        children: null
      },
      {
        title: 'nvm-setup.exe'
      },
      {
        title: 'node.exe'
      }
    ]
  },
  {
    title: 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function createTreeDOM(arr) {
  let ul = document.createElement('ul');
  arr.forEach((el) => {
    if (!arr.length) {
      return;
    }
    let li = document.createElement('li');
    if (el.folder) {
      li.innerHTML = `<span class="folder"><span class="material-icons" style="color:orange">folder</span>
      <input class="text" value=${el.title} disabled></span>`;
      if (el.children) {
        let subUl = createTreeDOM(el.children);
        li.append(subUl);
        subUl.hidden = true;
      } else {
        let empty = document.createElement('li');
        empty.innerHTML = '<i>Folder is empty</i>';
        li.append(empty);
        empty.hidden = true;
      }
    } else {
      li.innerHTML = `<span>
    <span class="material-icons" style="color:#808080">insert_drive_file</span>
    <input class="text" value=${el.title} disabled>
    </span>`;
    }
    ul.append(li);
  });
  return ul;
}
rootNode.onclick = function (event) {
  if (event.target.className !== 'folder') {
    return;
  }
  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) {
    childrenContainer = event.target.parentNode.querySelector('li');
  }
  childrenContainer.hidden = !childrenContainer.hidden;
  let icon = event.target.firstChild;
  if (childrenContainer.hidden) {
    icon.innerHTML = 'folder';
  } else {
    icon.innerHTML = 'folder_open';
  }
};
function createMenu() {
  let ul = document.createElement('ul');
  ul.id = 'menu';
  let rename = document.createElement('li');
  rename.innerHTML = 'Rename';
  let del = document.createElement('li');
  del.innerHTML = 'Delete item';
  rename.id = 'rename';
  del.id = 'del';
  ul.append(rename);
  ul.append(del);
  ul.hidden = true;
  return ul;
}
rootNode.append(createTreeDOM(data));
rootNode.append(createMenu());

let menu = rootNode.querySelector('#menu');
rootNode.addEventListener(
  'contextmenu',
  (event) => {
    menu.classList.remove('active');
    event.preventDefault();
    menu.style.top = `${event.clientY}px`;
    menu.style.left = `${event.clientX}px`;
    if (event.target.tagName === 'SPAN' || event.target.tagName === 'INPUT') {
      menu.classList.add('active');
      menu.querySelector('#rename').addEventListener('click', () => {
        let ren = event.target;
        ren.disabled = false;
        ren.focus();
        ren.select();
      });
      menu.querySelector('#del').addEventListener('click', () => {
        let del = event.target.parentNode;
        del.remove();
      });
    } else {
      menu.hidden = false;
    }
  },
  false
);
menu.addEventListener(
  'click',
  (event) => {
    menu.classList.remove('active');
    menu.hidden = true;
    event.stopPropagation();
  },
  false
);
document.addEventListener(
  'click',
  (event) => {
    if (event.button !== 2) {
      menu.classList.remove('active');
      menu.hidden = true;
      rootNode.querySelector('.text').disabled = true;
    }
  },
  false
);
