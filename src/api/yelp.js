import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer sCeTYrTTfTp3LXm3QieEGlwwpJJ1ZIefYy9lzE7lZLgarFUeDGToRqvn7oxFhM6DwYi0ofXcypl4Pxh0QcoBxbCaFL4JiymHqDl6zGzdEdIWgVQ-twNbOeYJJy86XnYx'
    }
});