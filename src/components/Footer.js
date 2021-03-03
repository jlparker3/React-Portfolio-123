import React from 'react'

function Footer() {
    return (
        <footer className="fixed-bottom" style={{height:"130px"}}>
        <div>
            <div className="text-center">Cell: 662.736.2221</div>
            <div className="text-center"><a>Email: jessicaleighparker3@gmail.com</a></div>

            <div className="row">
                <div className="col-sm-2">
                    <a href="https://github.com/jlparker3">
                        <img src="png-files.png/ .png" alt="github icon" className="mt-1 w-100" id="icon" /></a>
                </div>
                <div className="col-sm-2">
                    <a href="https://www.linkedin.com/in/jessica-parker-5575561b7/">
                        <img src="png-files.png/linkedin.png" alt="linkedin icon" className="mt-1 linkedin w-100" id="icon" /></a>
                </div>

            </div>
        </div>

    </footer>


    )
}

export default Footer
