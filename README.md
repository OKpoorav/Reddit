# Reddit Feed Fetcher

This is a simple web application that allows users to enter subreddit names, dynamically add lanes (subreddit containers), and fetch recent posts from Reddit. It leverages the Reddit JSON API to pull data and display posts, including text and media (images, videos, links).

## Features

- **Dynamic Subreddit Creation**: Users can click a button to add a new lane, which is a container for a specific subreddit.
- **Fetch Posts**: On pressing Enter after typing a subreddit name, the app fetches the latest posts from Reddit for that subreddit and displays them in the respective lane.
- **Display Media**: The app supports images, videos, and links from Reddit posts, displaying them appropriately within each lane.

## How It Works

1. **Input to Create Subreddit**: Each lane has an input field where users can type the name of a subreddit. Pressing Enter replaces the input field with the name of the subreddit.
   
2. **Dynamic Lanes**: Clicking the "+" button creates a new lane, each capable of holding posts from a specific subreddit. Each lane is independent of others.
   
3. **Fetch Data from Reddit API**: When a user presses Enter after entering a subreddit name, an API request is made to Reddit's API (`https://www.reddit.com/r/{subreddit}.json`) to fetch the latest posts from that subreddit.

4. **Post Display**: The fetched posts are displayed within the lane with the title, self-text, and any media (images, videos, or external links).

5. **Handling Media**: If a post contains an image, it's displayed using an `<img>` tag. If the post has a video, it's embedded using the `<video>` tag. Other types of posts are displayed as clickable links.

## Technologies Used

- **HTML**: Used to structure the layout of the application, including the input fields, buttons, and post containers.
- **CSS**: Used for styling the page and ensuring a clean, user-friendly interface.
- **JavaScript**: Used for handling the dynamic elements such as adding lanes, fetching data from Reddit, and updating the UI with fetched content.
- **Reddit API**: The app fetches data from the Reddit API using `fetch()` to retrieve JSON data for specific subreddits.

