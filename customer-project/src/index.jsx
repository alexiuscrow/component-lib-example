import React from 'react';
import ReactDOM from 'react-dom';
import { FirstComponent, SecondComponent } from '@component-lib-example/library-project';

import './style';
import '@component-lib-example/library-project/lib/FirstComponent/style';
import '@component-lib-example/library-project/lib/SecondComponent/style';

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