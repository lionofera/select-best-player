function stopListItemCreation() {
    if (document.getElementById('list').childNodes.length > 5) {
        document.createElement('li') = false;
    }
}


document.getElementById('btn-one').addEventListener('click', function() {
    stopListItemCreation()
    let li = document.createElement('li');
    li.innerText = document.getElementById('one').innerText;
    document.getElementById('list').appendChild(li);
    document.getElementById('btn-one').disabled = true;
  })
  document.getElementById('btn-two').addEventListener('click', function() {
    stopListItemCreation()
    let li = document.createElement('li');
    li.innerText = document.getElementById('two').innerText;
    document.getElementById('list').appendChild(li);
    document.getElementById('btn-two').disabled = true;
  })
document.getElementById('btn-three').addEventListener('click', function() {
    stopListItemCreation()
    let li = document.createElement('li');
    li.innerText = document.getElementById('three').innerText;
    document.getElementById('list').appendChild(li);
    document.getElementById('btn-three').disabled = true;
  })
document.getElementById('btn-four').addEventListener('click', function() {
    stopListItemCreation()
    let li = document.createElement('li');
    li.innerText = document.getElementById('four').innerText;
    document.getElementById('list').appendChild(li);
    document.getElementById('btn-four').disabled = true;
  })
document.getElementById('btn-five').addEventListener('click', function() {
    stopListItemCreation()
    let li = document.createElement('li');
    li.innerText = document.getElementById('five').innerText;
    document.getElementById('list').appendChild(li);
    document.getElementById('btn-five').disabled = true;
  })
  document.getElementById('btn-six').addEventListener('click', function() {
    stopListItemCreation()
    let li = document.createElement('li');
    li.innerText = document.getElementById('six').innerText;
    document.getElementById('list').appendChild(li);
    document.getElementById('btn-six').disabled = true;
  })


  document.getElementById('calc').addEventListener('click', function() {
    let playerFee = parseInt(document.getElementById('player-fee').value);
   let numOfPlayer = document.querySelectorAll('li').length;
   let playersFees = numOfPlayer * playerFee;
   document.getElementById('total-playerfee').innerText = playersFees;
  })

  

  document.getElementById('calc-total').addEventListener('click', function() {
    let managersFee = parseInt(document.getElementById('manager-fee').value);
    let coachesFee = parseInt(document.getElementById('coach-fee').value);
    let playersFees = parseInt(document.getElementById('total-playerfee').innerText);
    let finalBalance = managersFee + coachesFee + playersFees;
    document.getElementById('total').innerText = finalBalance;
  })