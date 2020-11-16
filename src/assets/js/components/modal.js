$('[data-modal]').on('click', function(event) {
    event.preventDefault();

    let modal = $(this).data('modal');

    console.log(modal);
});