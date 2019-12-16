import axios from "axios";


export function getAllTweets() {
    console.log("Getting tweets list")
    return axios.get(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet`);
}

export function createTweet(content, userName) {
    const date = new Date();
    const today = date.toISOString();
    return axios.post(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet`, {
        userName: userName,
        content: content,
        date: today,
    });
}



