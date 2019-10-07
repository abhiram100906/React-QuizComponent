import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion';
import { throws } from 'assert';

class QuizQuestionButton extends Component {

    render() {
        return (
            <li>
                <button>
                    {this.props.button_text}
                </button>
            </li>
        )
    }

}

export default QuizQuestionButton