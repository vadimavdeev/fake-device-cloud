(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var form = document.getElementById('grant-code-form');
        var code = document.getElementById('grant-code');

        if (!(form && code)) {
            return;
        }

        form.addEventListener('submit', function (event) {
            if (code.value.trim() === '') {
                event.preventDefault();
            }
        })
    });
}());