import axios from "axios";


export function getAllTweets() {
    return axios.get(`https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet`);
}

export function createTweet(tweet) {        
    return axios({
        method: 'post',
        url: `https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet`, 
        data: { tweet: tweet }
    });
}



