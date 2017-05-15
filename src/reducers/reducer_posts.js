/**
 * Created by rhe on 5/5/17.
 */
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';



export default function(state = {}, action){
    switch (action.type){
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POSTS:
            console.info(action.payload.data); //[ post1, post2]
            //{4: post}
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            //es5
            //const post = action.payload.data;
            //const newState = { ...state };
            //newState[post.id] = post;
            //return newState;

            //es6
            return { ...state, [action.payload.data.id]:action.payload.data};
        default:
            return state;
    }
}