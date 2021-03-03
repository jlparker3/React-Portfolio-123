import React from 'react'

function Contact() {
    return (


        <div className="container contact">
        <div className="row">
            <div className="col-md-12 mt-5">
                <header>
                    <h2 className="contact-me" id="Contact">Contact Me</h2>
                </header>

                <form>
                    <section className="row">
                        <div className="col-md-4 mt-3">
                            
                            <input type="text" className="form-control" id="Name" placeholder="Name" style={{ width: "300px" }} />
                        </div>
                    </section>

                    <section className="row">
                        <div className="col-md-4 mt-3">
                            
                            <input type="text" className="form-control" id="Email" placeholder="Email" style={{ width: "300px" }} />
                        </div>
                    </section>

                    <section className="row">
                        <div className="col-md-4 mt-3">
                            
                            <input type="text" className="form-control" id="Message" placeholder="Message" style={{ width: "300px" }} />
                        </div>
                    </section>


                </form>
                <section className="submit">
                    <div className="row mt-3 mb-4">
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </section>
            </div>


        </div>

    </div>


    )
}

export default Contact
