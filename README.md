# Chuck Norris Joke Generator

A simple web application that generates random Chuck Norris jokes using the [Chuck Norris Joke API](https://api.chucknorris.io/). This project is built using JavaScript and makes use of `XMLHttpRequest` to fetch jokes from the API.

## Features

- Fetches a random Chuck Norris joke from the API.
- Displays the joke on the page.
- Simple and clean UI with a single button to get new jokes.

## How It Works

1. The user clicks the "Get a Joke" button.
2. An `XMLHttpRequest` is sent to the Chuck Norris API to fetch a random joke.
3. The response is received in JSON format.
4. The joke is extracted from the JSON response and displayed on the page using `innerHTML`.

## Technologies Used

- HTML
- CSS (optional, for styling)
- JavaScript
- [Chuck Norris API](https://api.chucknorris.io/)

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/chuck-norris-joke-generator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd chuck-norris-joke-generator
    ```

3. Open `index.html` in your browser.

## API Reference

This project uses the [Chuck Norris API](https://api.chucknorris.io/). You can get a random joke by sending a GET request to:

```
https://api.chucknorris.io/jokes/random
```

The response will contain a joke in JSON format, with the joke stored in the `value` field of the response object.

## Example Response

```json
{
    "categories": [],
    "created_at": "2020-01-05 13:42:19.104863",
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "hgt42wug7hhdnxnxrj2ghw",
    "updated_at": "2020-01-05 13:42:19.104863",
    "url": "https://api.chucknorris.io/jokes/hgt42wug7hhdnxnxrj2ghw",
    "value": "Chuck Norris can divide by zero."
}
```

## Future Improvements

- Add error handling for network issues.
- Style the page with CSS for a more visually appealing UI.
- Allow the user to choose categories for jokes (e.g., "dev", "animal").

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Chuck Norris API](https://api.chucknorris.io/) for providing the jokes.
