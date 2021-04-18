let users = [{
        name: 'Lucy',
        age: 20,
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png'
    },
    {
        name: 'Kris',
        age: 21,
        gender: 'M',
        hobby: 'boxing',
        avatar: 'avatar2.png'
    },
    {
        name: 'Matt',
        age: 25,
        gender: 'M',
        hobby: 'boxing',
        avatar: 'avatar3.png'
    },
    {
        name: 'Eben',
        age: 25,
        gender: 'M',
        hobby: 'Sports',
        avatar: 'avatar4.png'
    },
    {
        name: 'Sarah',
        age: 21,
        gender: 'F',
        hobby: 'boxing',
        avatar: 'avatar5.png'
    },
];
window.addEventListener('load', function () {
    let searchBtn = document.getElementById('searchBtn');
    let results = document.getElementById('results');

    search = () => {
        // Get Hobby
        let hobby = document.getElementById('hobby').value;

        // Get Gender
        let genderField = document.getElementById('gender');
        let g = genderField.selectedIndex;
        let gender = genderField.options[g].value;

        // Get Age - Min && Max
        let ageMin = document.getElementById('min').value;
        let ageMax = document.getElementById('max').value;

        let resultsHtml = '';
        let usersLength = users.length;
        for (let i = 0; i < usersLength; i++) {
            let n = users[i].name;
            let h = users[i].hobby;
            let age = users[i].age;

            // Check gender
            if (gender == 'A' || gender == users[i].gender) {
                // Check hobby
            console.log(age);

                if (hobby == '' || hobby == users[i].hobby) {
                    // Filter Age
                    if(ageMin == '' || ageMin < users[i].age){
                        if(ageMax == '' || ageMax > users[i].age){
                            resultsHtml += `
                        <div class="person-row">
                            <img src="" alt="">
                            <div class="person-info">
                                <div>Name: ${n}</div>
                                <div>Hobby: ${h}</div>
                                <div>Age: ${age}</div>
                            </div>
                            <button>Add as friend</button>
                        </div>
                        `;
                        }
                    }
                }
            }
        }

        results.innerHTML = resultsHtml;
    };

    searchBtn.addEventListener('click', search);
});