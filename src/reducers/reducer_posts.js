/**
 * Created by rhe on 5/5/17.
 */
import { FETCH_POSTS } from '../actions';
import _ from 'lodash';



export default function(state = {}, action){
    switch (action.type){
        case FETCH_POSTS:
            console.info(action.payload.data); //[ post1, post2]
            //{4: post}
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}