function getTickets() {
    var data = {}
    data.requestType = "ticket"
    post('/api/makeRequest', data)
}

function post(path, data) {
    
    var json = JSON.stringify(data);
    $.ajax({
        url:path,
        type: "POST",
        data: json,
        contentType: 'application/json',
        success: function(rt)  {
            console.log(rt)
            window.location.href = "/AdminPages/AdminTicketReq.html";
        },
        error: function(xhr,status,err){
            alert("Error!");
        });
}
