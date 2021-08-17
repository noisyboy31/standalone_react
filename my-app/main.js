//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', getData);

function getData() {

    //Get API
    fetch('https://randomuser.me/api/?page=3&results=10')
        .then(res => res.json())
        .then(data => {

            let setList = data.results;

            //Get Data Value
            let output = "<h2><center>Get User Data List</center></h2>";

            //Get Data Loop Through
            setList.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card m-2 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2><center>First Name: ${lists.name.first}</centre></h2></li>
                            <li class="list-group-item"><h2><center>Last Name: ${lists.name.last}</centre></h2></li>
                            <li class="list-group-item"><center><img src="${lists.picture.large}"></centre></li>
                            <li class="list-group-item"><center>Phone Number: ${lists.cell}</centre></li>
                            <li class="list-group-item"><center>DOB: ${lists.dob.date}</centre></li>
                            <li class="list-group-item"><center>Email ID: ${lists.email}</centre></li>
                            <li class="list-group-item"><center>Country: ${lists.location.country}</centre></li>
                            <li class="list-group-item"><center>City: ${lists.location.city}</centre></li>
                            <li class="list-group-item"><center>PostCode: ${lists.location.postcode}</centre></li>
                        </ul>
                    </div>
                </div> `;
            });

            //Show On Our Screen All Data
            document.getElementById('output').innerHTML = output;

        });
};