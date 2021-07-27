import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer B9tQzVqcxSaH5YDwSfRm8m9n6OEUjI9yyzSLi6B8LrjaetnI6zx8ssid1ZKtb_DoPffRdVKji1-oQnvh0bPZoGPtNNa-e3DodgY7uUXF2Y6SApY8H9p7w1pnX7f3YHYx'

    }
});