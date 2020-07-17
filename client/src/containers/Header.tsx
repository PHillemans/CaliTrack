import * as React from 'react';

class Header extends React.Component {
    render() {
        return(
            <div className="flex content-center">
                <div className="pt-5 text-center align-middle w-full bg-gray-700 h-20 text-white">
                    <div className='text-3xl'>Calitrack</div>
                </div>
            </div>
        );
    }
}

export default Header;
