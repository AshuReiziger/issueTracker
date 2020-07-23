//adding an eventHandeler
document.getElementById('issueInputForm').addEventListener('submit',saveIssue);

function saveIssue(e){
    let issueDesc = document.getElementById('issueDescInput').value;
    let issuesSeverity = document.getElementById('issueSeverityInput').value;
    let issuesAssignedTo = document.getElementById('issueAssignedToInput').value;
    let issueId = chance.guid();//this is where chance comes in to assign a unique id to this instance

    let issueStatus = 'open';

    let issue = {
        id: issueId,
        description: issueDesc,
        severity: issuesSeverity,
        assignedTo: issuesAssignedTo,
        status: issueStatus
    }

    if(localStorage.getItem('issues')== null){
        let issues = [];
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));
    }else{
        var issue = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));
    }

    document.getElementById('issueInputForm').reset();

    fetchIssues();

    e.preventDefault();

}

function fetchIssues(){
    //used to fetch the list of issues already available
    //i.e fetching issues from local storage(i.e the browsers local storage)
    let issues = JSON.parse(localStorage.getItem('issues'));
    let issuesListe = document.getElementById('issuesList');

    issuesList.innerHTML = '';//initialise a content and make sure the content of the div element is empty

    for (var i = 0; i < issues.lenght; i++){
        let id = issues[i].id;
        let desc = issues[i].description;
        let assignedTo = issues[i].assignedTo;
        let status = issues[i].status;

        issuesList.innerHTML += '<div class="well>' +
                                '<h6>Issue ID: ' + id + '</h6>' +
                                '<p><span class="label label-info">' + status + '</span></p>'+
                                '<h3>' + desc + '</h3>'+
                                '<p><span class="glyphicon  glyphicon-time"></span>' + severity + '</p>'+
                                '<p><span class="glyphicon  glyphicon-time"></span>' + assignedTo + '</p>'+
                                '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>'+
                                '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                                '</div>';

    }
}

//reference video https://www.youtube.com/watch?v=NYq9J-Eur9U
//javascript documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators