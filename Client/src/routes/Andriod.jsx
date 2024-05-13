import React from 'react'
import "../css/Ferm.css"
import { Link } from 'react-router-dom'
import myimage from "../img/img8.jpg"
export default function Androiddev() {
    return (
        <div>
            <h1>Android Development Roadmap</h1>
            <div className='container'>
                <img src={myimage} alt="imgbg" className='img-fluid align-items-center mx myimgb' />
            </div>
            <div className='container'>
                <h2 className='contentferm '><br />
                    Bored with Web Development?<br />Let's explore the field of Android development and create your First App. Whether you’re just starting your journey or leveling up your skills, this roadmap will guide you through the essential concepts, technologies and tools you need to master.</h2>
                <br></br>
                <br></br>
                <h2 className='myconthead'>
                    What Is Android Development?</h2>
                <h2 className='contentferm'>
                    Android development refers to the process of creating applications for devices running the Android operating system. Android development can be done using various programming languages, including Kotlin, Java, and C++, using the Android software development kit.<br /></h2>
                <br />
                <h2 className='myconthead'>
                    Navigating the Roadmap
                </h2>
                <h2 className='content1'>Our roadmap is divided into key areas, each representing a crucial aspect of Android Development. <br />
                    Buckle up as we explore!
                </h2>
            </div>
            <div className='container-fluid mx-5'>
                <div className="container2">
                    <div className="row align-items-start gx-1">
                        <div class="col-xl-4 col-md-6 ">
                            <div class="card">
                                {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                                <div class="card-body">
                                    <h5 class="card-title">Android Studio</h5>
                                    <Link class="card-text alpha" type="button" to="/notes/Android.pdf" target='_blank'>Familiarize yourself with Android Studio, its file structure, and its features such as creating a new project, running the app on AVD of Emulator or a real device, creating activities, classes, and drawable resource files. </Link>

                                </div>
                                <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="https://developer.android.com/codelabs/basic-android-kotlin-compose-first-app#1" target="_blank">Basics of Android Studio</Link>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6">

                            <div class="card">
                                {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                                <div class="card-body">
                                    <h5 class="card-title">Programming</h5>
                                    <button class="card-text" type="button">Learn Java and Kotlin programming languages, and gain a strong understanding of XML</button></div>
                                <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="https://www.w3schools.com/kotlin/" target="_blank">Kotlin</Link>
                                <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="/notes/JAVA.pdf" target="_blank">Java</Link>
                                <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="https://www.w3schools.com/cpp/" target="_blank">C++</Link></div>
                        </div>
                        <div class="col-xl-4 col-md-6">
                            <div className="card">
                                {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                                <div className="card-body">
                                    <h5 className="card-title">Android Components</h5>
                                    <Link class="card-text alpha" type="button" to="https://www.coursera.org/learn/androidapps"> Understand the necessary building blocks of Android applications, including Activities, Services, Content Providers, and Broadcast Receivers. Learn about the Activity life cycle,Processes and Application Lifecycle.</Link>
                                    {/* <a to="https://www.google.com/"><b>Click here to Learn More</b></a> */}
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-start">
                            <div class="col-xl-4 col-md-6">
                                <div class="card">
                                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                                    <div class="card-body">
                                        <h5 class="card-title">Android Architecture </h5>
                                        <Link to="https://developer.android.com/topic/architecture" class="card-text alpha" type="button">  Learn about Android Architecture Components, including ViewModel, LiveData, Room, and WorkManager. Understand the three famous MVVM (Model–View–ViewModel), MVI (Model-View-Intent), and MVP (Model View Presenter) architectural patterns.</Link>
                                        {/* <a to="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card">
                                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                                    <div class="card-body">
                                        <h5 class="card-title">Firebase</h5>
                                        <Link to="https://firebase.google.com/docs/android/learn-more" class="card-text alpha" type="button">Learn about Firebase, including Firebase Cloud Messaging (FCM) for push notifications.</Link>
                                        {/* <a to="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                                    </div> <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="https://www.udemy.com/course/firebase-fundamentals/" target="_blank">Fundamentals of Firebase</Link>
                                    <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="https://www.classcentral.com/classroom/youtube-firebase-auth-tutorial-45795" target="_blank"> Introduction to Firebase Authentication</Link>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card">
                                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                                    <div class="card-body">
                                        <h5 class="card-title">Android Jetpack</h5>
                                        <Link class="card-text alpha" type="button" to="https://www.scaler.com/topics/android/what-is-android-jetpack/"> Learn about Android Jetpack, which is a set of libraries, tools, and architectural guidance to help make it quick and easy to build great Android apps. It provides common infrastructure code so you can focus on what makes your app unique.</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-start">
                            <div class="col-xl-4 col-md-6">
                                <div class="card">
                                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                                    <div class="card-body">
                                        <h5 class="card-title">UI Design</h5>
                                        <Link class="card-text alpha" type="button" to="https://www.geeksforgeeks.org/android-ui-layouts/" target='_blank'> Explore different layouts, such as Frame, Linear, Relative, and Constraint. Learn about View Elements, such as TextView, EditText, Buttons, and ImageView. Understand Intent, including Implicit and Explicit Intents.</Link>
                                        {/* <a to="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card">
                                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                                    <div class="card-body">
                                        <h5 class="card-title">Storage System</h5>
                                        <Link to=" https://www.scaler.com/topics/android/shared-preferences-in-android/" class="card-text alpha" type="button" target="_blank">Understand Shared Preferences, File System, and Database. Learn about RoomDB.</Link>
                                        {/* <a to="https://www.google.com/" ><b>Click here to Learn More</b></a> */}
                                    </div>
                                    <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="https://developer.android.com/training/data-storage" target="_blank"> File Storage System</Link>
                                    <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="https://medium.com/mindorks/using-room-database-android-jetpack-675a89a0e942" target="_blank">RoomDB</Link>
                                    <Link class="btn btn-outline-light m-3 alpha card-text" type="button" to="https://www.scaler.com/topics/android/database-in-android/" target="_blank">SQLite</Link>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card">
                                    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
                                    <div class="card-body">
                                        <h5 class="card-title">Practice</h5>
                                        <Link to="https://mobterest.medium.com/a-comprehensive-guide-to-memory-profiling-in-android-studio-d82f3fcd28d8" class="card-text alpha" type="button">  Learn about exceptions, error handling, logging, and memory profiling.<br />Keep practicing and learning new concepts on Android. Join workshops or conferences on Android to enhance your knowledge and skills.</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="container">
                <h2 className='mycont text-center'>  Remember, this roadmap isn’t a strict linear path. Feel free to explore, experiment, and specialize based on your interests.<br /></h2>

                <h2 className='mycont text-center'>
                    Ready to embark on your adventure? Let’s dive in!</h2><h2 className='fig1 '>👨🏼‍💻</h2>
                <h2 className='mycont text-center'>Feel free to customize and expand upon this introduction to create an inviting and informative roadmap page for aspiring developers! </h2>
            </div></div>
    )
}