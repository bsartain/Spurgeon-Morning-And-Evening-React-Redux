import data from '../data/data';
import _ from 'lodash';

export const GET_POSTS = 'GET_POSTS';
export const SHOW_POST = 'SHOW_POST';
export const ARCHIVE_POST = 'ARCHIVE_POST';
export const LOAD_POST = 'LOAD_POST';
export const FILTER_POSTS = 'FILTER_POSTS'

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

