$(document).ready(function() {
    $.ajax({
        url: "https://5d7a59749edf7400140aa040.mockapi.io/api/v1/users"
    }).then(function(data) {
       $('.greeting-id').append(data);
       $('.greeting-content').append(data.id);
    });
});