
const Swal = require('sweetalert2')
    
    document.addEventListener('DOMContentLoaded', function () {
        // Example: Open modal with SweetAlert2
        const personalInfoModalContent = document.getElementById('personalInfoModalContent');
        
        // Assuming you have a button to trigger the modal
        const openModalButton = document.getElementById('openPersonalInfoModalButton');
        openModalButton.addEventListener('click', function () {
            // Use SweetAlert2 to show the modal
            Swal.fire({
                title: 'Personal Information',
                html: personalInfoModalContent.innerHTML,
                showCloseButton: true,
                showConfirmButton: false,
                customClass: {
                    popup: 'modal-content',
                    closeButton: 'close',
                }
            });
        });
    });

