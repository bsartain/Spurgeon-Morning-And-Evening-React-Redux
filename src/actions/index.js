import data from '../data/data';
import wisdom from '../data/wisdom'
import _ from 'lodash';
import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const SHOW_POST = 'SHOW_POST';
export const ARCHIVE_POST = 'ARCHIVE_POST';
export const LOAD_POST = 'LOAD_POST';
export const FILTER_POSTS = 'FILTER_POSTS';
export const GET_PSALMS = 'GET_PSALMS';
export const GET_PROVERBS = 'GET_PROVERBS';
export const GET_ECCLESIASTES = 'GET_ECCLESIASTES'
 
export function getPosts(){

    return{
        type: GET_POSTS,
        payload: data
    }
}

export function showPost(post){
    return{
        type: SHOW_POST,
        payload: post
    }
}

export function showArchivePost(post){

    return{
        type: ARCHIVE_POST,
        payload: post
    }
}

export function showPostOnLoad(){

    return{
        type: LOAD_POST,
        payload: data
    }
}

export function filterPosts(term){

    const filteredPosts = _.filter(data, (post) => {
        if(!term){
            return post.keyverse.indexOf('');
        } else if(term){
            return post.keyverse.indexOf(term) > -1;
        }
    });

    return{
        type: FILTER_POSTS,
        payload: filteredPosts
    }
}

export function getPsalms(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;

    today = mm + '/' + dd;

    let todaysDate;
    wisdom.forEach((el) => {
        if(el.date === today){
            todaysDate = el;
        }
    });

    const url = `https://api.esv.org/v3/passage/html/?q=${todaysDate.psalms}&include-footnotes=false&include-audio-link=false`

    const todaysPsalm = axios.get(url, {
        'headers':{
            'Authorization':'Token 8ea1a445b74a5d683af4d71f322ae221e2ac682c'
        }
    })


    return{
        type: GET_PSALMS,
        payload: todaysPsalm
    }
}

export function getProverbs(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;

    today = mm + '/' + dd;

    let todaysDate;
    wisdom.forEach((el) => {
        if(el.date === today){
            todaysDate = el;
        }
    });

    const url = `https://api.esv.org/v3/passage/html/?q=${todaysDate.proverbs}&include-footnotes=false&include-audio-link=false`

    const todaysProverbs = axios.get(url, {
        'headers':{
            'Authorization':'Token 8ea1a445b74a5d683af4d71f322ae221e2ac682c'
        }
    })


    return{
        type: GET_PROVERBS,
        payload: todaysProverbs
    }
}

export function getEcclesiastes(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;

    today = mm + '/' + dd;

    let todaysDate;
    wisdom.forEach((el) => {
        if(el.date === today){
            todaysDate = el;
        }
    });

    const url = `https://api.esv.org/v3/passage/html/?q=${todaysDate.ecclesiastes}&include-footnotes=false&include-audio-link=false`

    const todaysEcclesiastes = axios.get(url, {
        'headers':{
            'Authorization':'Token 8ea1a445b74a5d683af4d71f322ae221e2ac682c'
        }
    })


    return{
        type: GET_ECCLESIASTES,
        payload: todaysEcclesiastes
    }
}

