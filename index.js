//template_bdcr8py
//service_9q399ls
//d_pui6aaSYWe-zi2G

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_9q399ls'
            'template_bdcr8py'
            event.target,
            'd_pui6aaSYWe-zi2G'
    ).then(() => {
        console.log('this worked');
        })

}