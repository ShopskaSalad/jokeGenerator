document.getElementById('jokeBtn').addEventListener('click', function() {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define the API URL
    const url = 'https://api.chucknorris.io/jokes/random';

    // Configure it: GET-request for the URL
    xhr.open('GET', url, true);

    // Set up a function to handle the response
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Parse the JSON response
            console.log("RESPONSE TEXT "+this.responseText)
            const response = JSON.parse(xhr.responseText);
            console.log("ACTUAL RESPONSE"+response)

            // Display the joke in the page's innerHTML
            document.getElementById('jokeDisplay').innerHTML = response.value;
        } else {
            console.error('Error fetching joke:', xhr.statusText);
        }
    };

    // Send the request
    xhr.send();
});
