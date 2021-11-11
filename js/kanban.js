let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
  let item = document.createElement('div');
  item.classList.add(item);
  item.id = 'item-' + order;
  item.draggable = true;

  item.addEventListener('dragstart', (e)=>{
    return(
      e.DataTransfer.setData('text', e.target.id)
    );
  });
  item.addEventListener('dragend', (e)=>{
    return(
      e.DataTransfer.clearData()
    )
  });
  let input = document.createElement('input');
  item.appendChild(input);

};

document.querySelectorAll('.drop').forEach(element => {
});