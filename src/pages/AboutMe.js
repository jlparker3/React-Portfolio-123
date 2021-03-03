import React from 'react'

function AboutMe() {
    return (
        <div >

            <div style={{margin:"50px"}} >

                <div className="jumbotron" id="name" style={{marginTop:"30px"}}>

                    <h1 className="display-2" style={{ color: "black" , justifyContent:"center"}} >Jessica Parker</h1>
                    
                </div>



            </div>
            <section>

                <div className="row" style={{margin:"50px"}}>
                    <div className="col-xs-7" >
                        <div className="row">

                            <div className="col-md-7">
                                <figure>
                                    <img className="photo" src="https://ca.slack-edge.com/T01AA2DAAQJ-U01AN4YLW12-387079237bca-512"
                                        alt="Jessica Parker image" className="center" style={{ marginTop: "40px" }} />
                                </figure>

                            </div>
                            <div className="container" >
                                <div className="col-md-10" className="text" >
                                    <p> On top of being a Northwestern University
                                    bootcamp student, I currently work in Surgical Pathology in a hospital setting. During
                                    the coronavirus
                                    pandemic, I found myself with a fair amount of free time. I decided to pick up coding
                                    out of curiosity. Soon
                                    after, I discovered how much one could truly do with the power of code. It amazed me. I
                                    began drafting ideas
                                    for websites and applications that would help communities in various ways. With the
                                    support of my family I
                                    decided to go down this path that will open endless opportunities. I have always had a
                                    passion for helping
                                    others and I thought health care was the only field for me. Empowering individuals with
                                    the tools to improve
                                    their lives on a daily basis is the core reason why I am attending this bootcamp. I wish
                                    to learn as much as
                                    possible to be able to provide knowledge and support to small businesses, to over seen
                                    communities, to a
                            more inclusive well rounded version of the internet.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>


        </div>
    )
}

export default AboutMe
