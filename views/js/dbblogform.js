$(document).ready(function() {
    const date_field = $('#date_active_field').closest('.form-group');
    date_field.hide();
        
    $(document).on('change', "input[name='active']", function() {
        if ( $('input:radio[name=active]:checked').val()=='1' ) {
        	date_field.hide();
        } else {
        	date_field.show();
        }
    });
});