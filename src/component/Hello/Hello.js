import React,{Compoent} from 'react';

class Hello extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div>引用Hello组件</div>
        )
    }
}
export default Hello;