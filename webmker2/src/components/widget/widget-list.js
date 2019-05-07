import React, { Component } from "react";

export default class WidgetList extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light fixed-top bg-light">
                    <a class="color-black" href="../Page/Page-list.html">
                        <i class="fas fa-chevron-left" />
                    </a>
                    <a class="navbar-brand" href="Widget-list.html">
                        Widgets
                    </a>
                    <a class="color-black" href="Widget-chooser.html">
                        <i class="fas fa-plus" />
                    </a>
                </nav>

                <div class="container-fluid">
                    <div>
                        <div class="absolute-right">
                            <a href="Widget-heading.html">
                                <i class="fas fa-cog" />
                            </a>
                            <a href="#">
                                <i class="fas fa-bars" />
                            </a>
                        </div>

                        <div>
                            <h1>Welcome</h1>
                        </div>
                    </div>

                    <div>
                        <div class="absolute-right">
                            <a href="Widget-heading.html">
                                <i class="fas fa-cog" />
                            </a>
                            <a href="#">
                                <i class="fas fa-bars" />
                            </a>
                        </div>

                        <div>
                            <h3>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Similique saepe vel sit
                                repellendus quis
                            </h3>
                        </div>
                    </div>

                    <div>
                        <div class="absolute-right">
                            <a href="Widget-image.html">
                                <i class="fas fa-cog" />
                            </a>
                            <a href="#">
                                <i class="fas fa-bars" />
                            </a>
                        </div>

                        <div>
                            <img
                                class="img-fluid"
                                src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
                                alt="bird image"
                            />
                        </div>
                    </div>

                    <div>
                        <div class="absolute-right">
                            <a href="Widget-heading.html">
                                <i class="fas fa-cog" />
                            </a>
                            <a href="#">
                                <i class="fas fa-bars" />
                            </a>
                        </div>

                        <div>
                            <h5>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tempora, architecto
                                dignissimos. Voluptatibus placeat excepturi eum{" "}
                                <a href="http://www.google.com">
                                    repellendus totam quam error atque
                                </a>{" "}
                                asperiores, blanditiis sequi sit, reiciendis
                                quibusdam? In numquam expedita impedit.
                            </h5>
                        </div>
                    </div>

                    <div>
                        <div class="absolute-right">
                            <a href="Widget-heading.html">
                                <i class="fas fa-cog" />
                            </a>
                            <a href="#">
                                <i class="fas fa-bars" />
                            </a>
                        </div>

                        <div>
                            <h3> vel sit repellendus quis</h3>
                        </div>
                    </div>

                    <div>
                        <div class="absolute-right">
                            <a href="Widget-youtube.html">
                                <i class="fas fa-cog" />
                            </a>
                            <a href="#">
                                <i class="fas fa-bars" />
                            </a>
                        </div>

                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe
                                width="1903"
                                height="769"
                                src="https://www.youtube.com/embed/SqrbIlUwR0U"
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                            />
                        </div>
                    </div>

                    <div>
                        <div class="absolute-right">
                            <a href="Widget-heading.html">
                                <i class="fas fa-cog" />
                            </a>
                            <a href="#">
                                <i class="fas fa-bars" />
                            </a>
                        </div>

                        <div>
                            <h5>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Officiis nostrum maiores
                                blanditiis iste doloribus harum magni ullam
                                repellat eaque? Et veniam accusantium illo
                                nostrum dolores temporibus. Cum cupiditate alias
                                eius.
                            </h5>
                        </div>
                    </div>
                </div>

                <footer class="navbar navbar-light fixed-bottom bg-light">
                    <div class="full-width">
                        <a
                            class="color-black float-right"
                            href="../User/Profile.html"
                        >
                            <i class="fas fa-user" />
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}
