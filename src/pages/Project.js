import React from 'react'

function Project() {
    return (
        <div className="container" style={{margin:"60px"}}>

{/* Downloadable resume */}
<section>
                <div className="row mt-2">
                    <div className="col-lg-8">
                        <h2 id="Portfolio">Portfolio</h2>

                        <div className="resume" style={{marginLeft:"10px"}}>
                            <a href="Resume 2020.pdf" download>
                                <h4>Downloadable Resume</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

{/* //PROJECTS */}
            <section>

                <div className="row">
                    <div className="col-lg-4 mt-5">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="/png-files.png/movie.png" className="card-img-top"
                                alt="Holiday at the Movies screenshot" />
                            <div className="card-body">
                                <p className="card-text">An application that provides a list of movies based on the holidays
                            that are closest to the date that is entered.</p>
                                <p className="links"><a href="https://github.com/Project-1-Group-4/Holiday-at-the-Movies"
                                    target="_blank" rel="noopener noreferrer">Code</a></p>
                                <p className="links"><a href="https://project-1-group-4.github.io/Holiday-at-the-Movies/"
                                    target="_blank" rel="noopener noreferrer">Website</a></p>

                            </div>
                        </div>
                    </div>



                    <div className="col-lg-4 mt-5">
                        <figure>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://user-images.githubusercontent.com/68556793/101971614-580b5d00-3bf8-11eb-8391-ef689a892f45.png" className="card-img-top"
                                    alt="Screenshot of note taker" />
                                <div className="card-body">
                                    <p className="card-text">The purpose of the application is to keep track of daily tasks and have an organized mindset by using this convenient app that will allow you to write, save, and delete notes.</p>
                                    <p className="links"><a
                                        href="https://github.com/jlparker3/Note-Taker"
                                        target="_blank" rel="noopener noreferrer">Code</a></p>
                                    <p className="links"><a
                                        href="https://note-taker-app3.herokuapp.com/"
                                        target="_blank" rel="noopener noreferrer">Website</a></p>
                                </div>
                            </div>

                        </figure>



                    </div>



                    <div className="col-lg-4 mt-5">
                        <figure>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://user-images.githubusercontent.com/68556793/103932777-f7cce580-50e7-11eb-881d-0462b3cf128f.png" className="card-img-top"
                                    alt="Screenshot of burger genie" />
                                <div className="card-body">
                                    <p className="card-text">A full stack application that allows the user to create, delete and consume the selected burger.</p>
                                    <p className="links"><a href="https://github.com/jlparker3/Burger-Genie" target="_blank"
                                        rel="noopener noreferrer">Code</a></p>
                                    <p className="links"><a
                                        href="https://burgergenie.herokuapp.com/"
                                        target="_blank" rel="noopener noreferrer">Website</a></p>

                                </div>
                            </div>
                        </figure>
                    </div>


                    <div className="col-lg-4 mt-5">
                        <figure>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://user-images.githubusercontent.com/68556793/108079519-86f8e180-7034-11eb-9750-329a966467dc.png" className="card-img-top"
                                    alt="Screenshot of budget app" />
                                <div className="card-body">
                                    <p className="card-text">The purpose of the application is to keep track of your money. It gives you the benefit of seeing your money flex and shrink in graphical notation.</p>
                                    <p className="links"><a
                                        href="https://github.com/jlparker3/Progressive-Budget"
                                        target="_blank" rel="noopener noreferrer">Code</a></p>
                                    <p className="links"><a
                                        href="https://progressive-budget-app-12.herokuapp.com/"
                                        target="_blank" rel="noopener noreferrer">Website</a></p>
                                </div>
                            </div>

                        </figure>



                    </div>



                    <div className="col-lg-4 mt-5">
                        <figure>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://user-images.githubusercontent.com/68556793/107160246-bfc0f880-695a-11eb-9160-60e6337da842.png" className="card-img-top"
                                    alt="Screenshot of workout tracker" />
                                <div className="card-body">
                                    <p className="card-text">The purpose of the application is to keep track of daily workouts which stores the data in a mongg database, with that information makes graphs of your total workout summary.</p>
                                    <p className="links"><a
                                        href="https://github.com/jlparker3/hw17-Workout-Tracker"
                                        target="_blank" rel="noopener noreferrer">Code</a></p>
                                    <p className="links"><a
                                        href="https://workout-tracker5.herokuapp.com/"
                                        target="_blank" rel="noopener noreferrer">Website</a></p>
                                </div>
                            </div>

                        </figure>



                    </div>




                    <div className="col-lg-4 mt-5">
                        <figure>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src="https://user-images.githubusercontent.com/68556793/106040908-b7d2a000-60a0-11eb-9f6e-53f7e7c14faf.png" className="card-img-top"
                                    alt="Screenshot of note taker" />
                                <div className="card-body">
                                    <p className="card-text">The-Kindness-Club-App is an application created with the goals of bringing people together while they are using the application and having fun. </p>
                                    <p className="links"><a
                                        href="https://github.com/Project-2-Group-4/The-Kindness-Club"
                                        target="_blank" rel="noopener noreferrer">Code</a></p>
                                    <p className="links"><a
                                        href="http://kindnessclub.herokuapp.com/home"
                                        target="_blank" rel="noopener noreferrer">Website</a></p>
                                </div>
                            </div>

                        </figure>



                    </div>

                </div>
            </section>

        </div>
    )
}

export default Project
