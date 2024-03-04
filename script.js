function printInfo() {
  let firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let age = document.getElementById('age').value;
  let profession = document.getElementById('profession').value;
  let fullName = `${firstName} ${lastName}`;
  let textColor = fullName.length > 5 ? 'green' : 'red';

  let bgColor;
  switch (profession) {
    case 'IT':
      bgColor = 'purple';
      break;
    case 'Hospitality':
      bgColor = 'yellow';
      break;
    default:
      bgColor = 'white';
      break;
  }

  document.getElementById('result').innerHTML = `
    Full Name: <span style="color: ${textColor}">${fullName}</span><br>
    Age: <span style="color: ${textColor}">${age}</span><br>
    Profession: ${profession}
  `;
  document.getElementById('result').style.backgroundColor = bgColor;
}

document.getElementById('btn').addEventListener('click', printInfo);
