import React from 'react';
import ReactDOM from 'react-dom';
import { FirstComponent, SecondComponent } from '@lib/project-a';

class App extends React.Component {
    render() {
        return (
            <div>
                <FirstComponent/>
                <SecondComponent/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));