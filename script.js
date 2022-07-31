const validator = {
  checkInput: (input) => {
    let rules = input.getAttribute('data-rules');
    if (rules) {
      rules = rules.split('|');
      for (let r in rules) {
        let rDetail = rules[r].split('=');
        switch (rDetail[0]) {
          case 'required':
            if (input.value == '') {
              return 'O campo precisa ser preenchido';
            }
            break;
          case 'min':
            if (input.value.length < rDetail[1]) {
              return `Você precisa inserir no minimo ${rDetail[1]} caracteres`;
            }
            break;
        }
      }
    }
    return true;
  },

  showError: (input, error) => {
    input.style.borderColor = '#FF0000';
    let errorElement = document.createElement('span');
    errorElement.classList.add('error');
    errorElement.innerHTML = error;
    input.parentElement.insertBefore(errorElement, input.nextSibling);
  },

  clearErrors: () => {
    errorC = document.querySelectorAll('.error');
    if (errorC) {
      errorC.forEach((error) => {
        error.remove();
      });
    }
  },

  handleSubmit: (event) => {
    event.preventDefault();
    let send = true;

    validator.clearErrors();
    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => {
      input.style.borderColor = 'initial'; //remove a borda em vermelho que servia para indicar erro (quando já solucionado)
      let check = validator.checkInput(input);
      if (check !== true) {
        send = false;
        validator.showError(input, check);
      }
    });

    if (send) {
      form.submit();
    }
  },
};

const form = document.querySelector('.validator');
form.addEventListener('submit', validator.handleSubmit);
