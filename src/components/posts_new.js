/**
 * Created by rhe on 5/8/17.
 */


import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {
    renderField(field) {
        return (
          <div className="form-group">
              <label>{}</label>
              <input
                  className="form-control"
                  type="text"
                  {...field.input}
              />
          </div>
        );
    }



    render(){
        return (
            <form>
                <Field
                    name="title"
                    component={this.renderField}
                />
                <Field
                    name="tags"
                    component={this.renderField}
                />
            </form>
        )
    }
}


export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);

